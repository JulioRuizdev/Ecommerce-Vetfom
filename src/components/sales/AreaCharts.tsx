'use client';
import { BarChart } from '@tremor/react';

const chartdata = [
  {
    name: 'Enero',
    'Number of threatened species': 2488,
  },
  {
    name: 'Febrero',
    'Number of threatened species': 1445,
  },
  {
    name: 'Marzo',
    'Number of threatened species': 743,
  },
  {
    name: 'Abril',
    'Number of threatened species': 281,
  },
  {
    name: 'Mayo',
    'Number of threatened species': 251,
  },
  {
    name: 'Julio',
    'Number of threatened species': 232,
  },
  {
    name: 'Agosto',
    'Number of threatened species': 98,
  },
    {
        name: 'Septiembre',
        'Number of threatened species': 45,
    },
    {
        name: 'Octubre',
        'Number of threatened species': 12,
    },
    {
        name: 'Noviembre',
        'Number of threatened species': 5,
    },
    {
        name: 'Diciembre',
        'Number of threatened species': 2,
    },
];

const dataFormatter = (number: number) =>
  Intl.NumberFormat('us').format(number).toString();

export function AreaCharts() {
  return (
    <>
      <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Number of species threatened with extinction (2021)
      </h3>
      <BarChart
        className="mt-6"
        data={chartdata}
        index="name"
        categories={['Number of threatened species']}
        colors={['blue']}
        valueFormatter={dataFormatter}
        yAxisWidth={48}
      />
    </>
  );
}