"use client";

import { useState } from "react";
import { Product } from "@/interfaces/product.interface";
import Image from "next/image";
import Link from "next/link";

interface Props {
    product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
    const [displayImage, setDisplayImage] = useState(product.images[0])

    return (
        <div className="rounded-md overflow-hidden fade-in">
            <Link href={`/product/${product.slug}`}>
                <Image
                    src={`/products/${displayImage}`}
                    alt={product.title}
                    className="max-w-80 max-h-80 object-cover px-2 sm:px-4 md:px-6 rounded"
                    width={500}
                    height={500}
                    onMouseEnter={() => product.images[1] && setDisplayImage(product.images[1])}
                    onMouseLeave={() => setDisplayImage(product.images[0])}
                />
            </Link>
            <div className="p-4 flex flex-col">
                <Link href={`/product/${product.slug}`} className="hover:text-blue-600">
                    {product.title}
                </Link>
                <span className="font-bold">S/{product.price}</span>
            </div>
        </div>
    )
}