import { Product } from "@/interfaces";
import { ProductGridItem } from "./ProductGridItem";

interface Props {
    products: Product[];
}

export const ProductGrid = ({ products }:Props) => {

  return (
    <div className="grid grid-cols-1 gap-y-10 mb-5 sm:grid-cols-2 md:grid-cols-3 ">
        {
            products.map( product => (
                <ProductGridItem 
                key={ product.slug }
                product={ product }

                />

        ))
    }
        
    </div>
  )
}
