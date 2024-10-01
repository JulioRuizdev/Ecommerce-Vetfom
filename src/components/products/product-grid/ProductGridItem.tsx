import { Product } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

interface Props {
    product: Product[];
}

export const ProductGridItem = ({ product }:Props) => {

  return (
    <div className="rounded-md overflow-hidden fade-in">

        <Link href={ `/product/${ product.slug }` }>
        <Image
            src={ `/products/${product.images[0] }`}
            alt={ product.title }
            className="max-w-80 max-h-80 object-cover "
            width={500}
            height={500}
        />
        </Link>


        <div className="p-4 flex flex-col">
            <Link href={ `/product/${ product.slug }`} className="hover:text-blue-600" >
            {product.title}
            </Link>
            <span className="font-bold">S/{product.price}</span>

        </div>
        
    </div>
  )
}
