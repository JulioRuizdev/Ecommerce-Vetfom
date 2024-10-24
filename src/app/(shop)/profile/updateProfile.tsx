"use client";

import { createUpdateProduct, deleteProductImage } from "@/actions";
import { ProductImage } from "@/components";
import { Category, Product, ProductImage as ProductWithImage} from "@/interfaces";

// import Image from "next/image";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

interface Props {
  product: Partial<Product> & { ProductImage?: ProductWithImage[]};
  categories: Category[];
}

interface FormInputs{
  title: string;
  slug: string;
  description: string;
  price: number;
  inStock: number;
  tags: string;
  section: 'food' | 'toy' | 'article' | 'medicine';
  categoryId: string;

  images?: FileList;

}