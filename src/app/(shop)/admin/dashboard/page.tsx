'use client'
import { AreaCharts } from "@/components";
import { Card } from '@tremor/react';
import { useEffect, useState } from 'react';
import { getOrderByMonth } from '@/actions';
import { currencyFormat } from '@/utils';

type ChartDataType = {
  name: string;
  Ventas: number;
};

export default function DashPage() {
  const [bestMonth, setBestMonth] = useState({ month: '', sales: 0 });
  const [worstMonth, setWorstMonth] = useState({ month: '', sales: 0 });
  const [maxSale, setMaxSale] = useState(0);
  const [chartData, setChartData] = useState<ChartDataType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getOrderByMonth();
      setChartData(data.chartData);  // Asegúrate de que data.chartData tenga el tipo correcto
      setBestMonth(data.bestMonth);
      setWorstMonth(data.worstMonth);
      setMaxSale(data.maxSale);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className="font-bold text-3xl text-center my-4">Ventas totales por mes</h1>
      <div className="gap-4 mb-36 grid grid-cols-3 mx-auto max-w-6xl">
        <Card className="mx-auto max-w-xs" decoration="top" decorationColor="indigo">
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Mejor temporada</p>
          <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
            {bestMonth.month}: {currencyFormat(bestMonth.sales)}
          </p>
        </Card>
        <Card className="mx-auto max-w-xs" decoration="top" decorationColor="indigo">
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Peor temporada</p>
          <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
            {worstMonth.month}: {currencyFormat(worstMonth.sales)}
          </p>
        </Card>
        <Card className="mx-auto max-w-xs" decoration="top" decorationColor="indigo">
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Venta máxima</p>
          <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
            {currencyFormat(maxSale) }
          </p>
        </Card>                
        <Card className="mx-auto max-w-full col-span-3" decoration="top" decorationColor="indigo">
          <AreaCharts chartData={chartData} />
        </Card>
      </div>
    </>
  );
}
