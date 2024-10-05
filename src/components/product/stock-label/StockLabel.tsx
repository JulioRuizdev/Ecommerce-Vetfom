'use client';

import { titleFont } from "@/app/config/fonts"
import { useEffect } from "react";

interface Props{
    slug: string;
}


export const StockLabel = ({slug}: Props) => {
    
    useEffect(() => {
        getStock();
    },[]);

    const getStock = async () =>{
    }
  
    return (

    <h1 className={`${ titleFont.className} antialiased font-bold text-xl`}>
    Stock:150
    </h1>
  )
}
