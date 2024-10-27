import { AreaCharts } from "@/components";
import { Card, Metric, Text } from '@tremor/react';


export default function DashPage() {
  return (
    <>

      <h1 className="font-bold text-3xl text-center my-4">Ventas totales por mes</h1>

      <div className="gap-4 mb-36">
        <Card
              className="mx-auto max-w-full"
              decoration="top"
              decorationColor="indigo"
            >
          <AreaCharts />

        </Card>
      </div>
        
    
    </>

  )
}
