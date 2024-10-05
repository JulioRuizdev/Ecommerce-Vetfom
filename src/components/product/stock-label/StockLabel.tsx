'use client';

import { getStockBySlug } from "@/actions";
import { titleFont } from "@/app/config/fonts"
import { useEffect, useState } from "react";

interface Props{
    slug: string;
}


export const StockLabel = ({slug}: Props) => {

    const [stock, setStock] = useState(0);
    const [isLoading, setIsLoagind] = useState(true)
    
    useEffect(() => {
        getStock();
    },[]);

    const getStock = async () =>{
        const inStock = await getStockBySlug(slug);
        setStock(inStock);
        setIsLoagind(false);
    }
  
    return (
    <>
        {
            isLoading ? (
                <h1 className={`${ titleFont.className} antialiased font-bold text-lg bg-gray-200 animate-pulse`}>
                &nbsp;
                </h1>
            ) :
            (
                <h1 className={`${ titleFont.className} antialiased font-bold text-lg`}>
                Stock: {stock}
                </h1>
            )
        }


    </>
  )
}
