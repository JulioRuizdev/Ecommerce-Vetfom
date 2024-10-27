'use client'

import { currencyFormat } from '@/utils';
import { BarChart } from '@tremor/react';
import { useEffect, useState } from 'react';
import { getOrderByMonth } from '@/actions/';

type ChartDataType = {
    name: string;
    Ventas: number;
};

export function AreaCharts() {
    const [chartdata, setChartdata] = useState<ChartDataType[]>([]);


    useEffect(() => {
        const fetchData = async () => {
            const data = await getOrderByMonth();
            setChartdata(data);
        };

        fetchData();
    }, []);

    const dataFormatter = (number: number) => currencyFormat(number);

    return (
        <BarChart
            className="mt-6"
            data={chartdata}
            index="name"
            categories={['Ventas']}
            colors={['blue']}
            valueFormatter={dataFormatter}
            yAxisWidth={48}
        />
    );
}
