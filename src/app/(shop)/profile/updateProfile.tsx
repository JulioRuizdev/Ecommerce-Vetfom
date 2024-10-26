"use client";

import { createUpdateProfile, deleteProfileImage } from "@/actions";
import { ProductImage } from "@/components";
import { Category, Product, User , UserImage as UserWithImage ,ProductImage as ProductWithImage} from "@/interfaces";

// import Image from "next/image";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

interface Props {
  product: Partial<Product> & { ProductImage?: ProductWithImage[]};
  categories: Category[];
}

interface FormInputs{
  name: string;      
  email: string;         
  emailVerified?: Date | null; 
  password: string;     
  role: string;           

  images?: FileList;

}