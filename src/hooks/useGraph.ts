import { FINNHUB_API_KEY } from '@env';
import { useEffect, useState } from 'react';

type HistoricalData = {
  [symbol: string]: number[];
};

const useGraph = (symbols: string[]) => {
  const [chartData, setChartData] = useState<number[][]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!symbols.length) return;

    const fetchMultipleHistoricalData = async (): Promise<HistoricalData> => {
      const resolution = 'D';
      const from = Math.floor(Date.now() / 1000) - 7 * 24 * 60 * 60;
      const to = Math.floor(Date.now() / 1000);
      const allData: HistoricalData = {};

      await Promise.all(
        symbols.map(async symbol => {
          try {
            const url = `https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=${resolution}&from=${from}&to=${to}&token=${FINNHUB_API_KEY}`;
            const res = await fetch(url);
            const json = await res.json();
            console.log(url);

            if (json.s === 'ok') {
              allData[symbol] = json.c;
            } else {
              console.warn(`❗️Datos inválidos para ${symbol}`, json);
            }
          } catch (error) {
            console.error(`Error al obtener datos para ${symbol}:`, error);
          }
        }),
      );

      return allData;
    };

    const loadData = async () => {
      try {
        setLoading(true);
        const result = await fetchMultipleHistoricalData();
        const datasets = symbols.map(symbol => result[symbol]).filter(Boolean);
        setChartData(datasets);
      } catch (err) {
        setError('Ocurrió un error al cargar los datos.');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [symbols]);

  return {
    chartData,
    loading,
    error,
  };
};

export default useGraph;
