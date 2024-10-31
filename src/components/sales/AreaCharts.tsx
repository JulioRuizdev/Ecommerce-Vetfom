import { currencyFormat } from '@/utils';
import { BarChart } from '@tremor/react';

type ChartDataType = {
    name: string;
    Ventas: number;
};

type AreaChartsProps = {
    chartData: ChartDataType[];
};

export function AreaCharts({ chartData }: AreaChartsProps) {
    const dataFormatter = (number: number) => currencyFormat(number);

    return (
        <BarChart
            className="mt-6"
            data={chartData}
            index="name"
            categories={['Ventas']}
            colors={['blue']}
            valueFormatter={dataFormatter}
            yAxisWidth={48}
        />
    );
}
