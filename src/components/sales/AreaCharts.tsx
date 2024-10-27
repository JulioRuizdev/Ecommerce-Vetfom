'use client';
import { currencyFormat } from '@/utils';
import { BarChart } from '@tremor/react';


const chartdata = [
  {
    name: 'Enero',
    'Ventas': 2488,
  },
  {
    name: 'Febrero',
    'Ventas': 1445,
  },
  {
    name: 'Marzo',
    'Ventas': 743,
  },
  {
    name: 'Abril',
    'Ventas': 281,
  },
  {
    name: 'Mayo',
    'Ventas': 251,
  },
  {
    name: 'Julio',
    'Ventas': 232,
  },
  {
    name: 'Agosto',
    'Ventas': 98,
  },
    {
        name: 'Septiembre',
        'Ventas': 45,
    },
    {
        name: 'Octubre',
        'Ventas': 12,
    },
    {
        name: 'Noviembre',
        'Ventas': 5,
    },
    {
        name: 'Diciembre',
        'Ventas': 2,
    },
];

const dataFormatter = (number: number) => currencyFormat(number);

export function AreaCharts() {
  return (
    <>
      {/* <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Ventas totales por mes
      </h3> */}
      <BarChart
        className="mt-6"
        data={chartdata}
        index="name"
        categories={['Ventas']}
        colors={['blue']}
        valueFormatter={dataFormatter}
        yAxisWidth={48}
      />
    </>
  );
}