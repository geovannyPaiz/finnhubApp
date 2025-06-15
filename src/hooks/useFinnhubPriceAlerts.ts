import { useEffect, useRef } from 'react';
import PushNotification from 'react-native-push-notification';
import { FINNHUB_API_KEY } from '@env';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { updateWatchListData } from '../store/slice/watchlistSlice';

export const useFinnhubPriceAlerts = (alerts: AlertItem[]) => {
  const wsRef = useRef<WebSocket | null>(null);
  const triggeredAlertsRef = useRef<Record<string, boolean>>({});
  const dispatch = useDispatch();
  const watlistItemsRef = useRef<WatchListItem[]>([]);
  const watlistItems = useSelector((state: RootState) => state.watchlist);

  useEffect(() => {
    watlistItemsRef.current = watlistItems;
  }, [watlistItems]);

  useEffect(() => {
    if (!alerts.length) return;

    const ws = new WebSocket(`wss://ws.finnhub.io?token=${FINNHUB_API_KEY}`);
    wsRef.current = ws;

    ws.onopen = () => {
      console.log('✅ WebSocket conectado');

      alerts.forEach(({ symbol }) => {
        ws.send(JSON.stringify({ type: 'subscribe', symbol }));
        console.log(`🟢 Suscrito a ${symbol}`);
      });
    };

    ws.onmessage = event => {
      try {
        const data = JSON.parse(event.data);

        if (data.type === 'trade' && data.data) {
          data.data.forEach((trade: any) => {
            const currentSymbol = trade.s;
            const currentPriceP = trade.p;

            const alert = alerts.find(a => a.symbol === currentSymbol);

            const watchlistItem = watlistItemsRef.current.find(
              a => a.symbol === currentSymbol,
            );
            if (!alert) return;

            const { symbol, alertPrice } = alert;
            const key = `${symbol}-${alertPrice}`;

            const percentChange =
              ((currentPriceP - Number(watchlistItem?.currentPrice)) /
                Number(watchlistItem?.currentPrice || 1)) *
              1000;
            dispatch(
              updateWatchListData({
                symbol,
                currentPrice: currentPriceP,
                percentChange: parseFloat(percentChange.toFixed(2)),
              }),
            );

            if (
              currentPriceP > alertPrice &&
              !triggeredAlertsRef.current[key]
            ) {
              triggeredAlertsRef.current[key] = true;

              PushNotification.localNotification({
                channelId: 'stock-alerts',
                title: '📈 Alert!',
                message: `${symbol} is over $${alertPrice}. Current Price: $${currentPriceP}`,
                playSound: true,
                vibrate: true,
                soundName: 'default',
              });
            }
          });
        }
      } catch (err) {
        console.error('❌ Error procesando mensaje WebSocket:', err);
      }
    };

    ws.onerror = error => {
      console.error('❌ WebSocket error:', error);
    };

    ws.onclose = () => {
      console.log('🔌 WebSocket cerrado');
    };

    return () => {
      if (ws.readyState === WebSocket.OPEN) {
        alerts.forEach(({ symbol }) => {
          ws.send(JSON.stringify({ type: 'unsubscribe', symbol }));
        });
      }
      ws.close();
    };
  }, [JSON.stringify(alerts)]);
};
