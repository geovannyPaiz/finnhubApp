import { useEffect, useRef } from 'react';
import PushNotification from 'react-native-push-notification';
import { FINNHUB_API_KEY } from '@env';

export const useAlert = (alerts: AlertItem[]) => {
  const wsRef = useRef<WebSocket | null>(null);
  const triggeredAlertsRef = useRef<Record<string, boolean>>({});

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
            const currentPrice = trade.p;

            const alert = alerts.find(a => a.symbol === currentSymbol);
            if (!alert) return;

            const { symbol, alertPrice } = alert;
            const key = `${symbol}-${alertPrice}`;

            if (currentPrice > alertPrice && !triggeredAlertsRef.current[key]) {
              triggeredAlertsRef.current[key] = true;

              console.log(
                `🚨 ${symbol} superó el precio de alerta: $${alertPrice} → $${currentPrice}`,
              );

              PushNotification.localNotification({
                channelId: 'stock-alerts',
                title: '📈 Alerta de precio',
                message: `${symbol} superó $${alertPrice}. Precio actual: $${currentPrice}`,
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

  return null;
};
