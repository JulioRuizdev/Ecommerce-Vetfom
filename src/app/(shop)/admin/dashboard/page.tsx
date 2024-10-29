import { AreaCharts } from "@/components";
import { Card, Metric, Text } from '@tremor/react';


export default function DashPage() {
  return (
    <>

      <h1 className="font-bold text-3xl text-center my-4">Ventas totales por mes</h1>
      <div className="gap-4 mb-36 grid grid-cols-3 mx-auto max-w-6xl">
        <Card
          className="mx-auto max-w-xs"
          decoration="top"
          decorationColor="indigo"
        >
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Mejor mes</p>
          <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">$34,743</p>
        </Card>
        <Card
          className="mx-auto max-w-xs"
          decoration="top"
          decorationColor="indigo"
        >
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Peor mes</p>
          <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">$34,743</p>
        </Card>
        <Card
          className="mx-auto max-w-xs"
          decoration="top"
          decorationColor="indigo"
        >
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">venta maxima</p>
          <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">$34,743</p>
        </Card>                
        <Card
          className="mx-auto max-w-full col-span-3"
          decoration="top"
          decorationColor="indigo"
        >
          <AreaCharts />
        </Card>
      </div>
        
    
    </>

  )
}
