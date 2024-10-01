import Image from "next/image";
import { titleFont } from "../config/fonts";
import { Title } from "@/components";

export default function Home() {
  return (
    <>
    <Title 
      title="Tienda"
      subtitle="Todos los Productos"
      className="mb-2"
    />
    
    </>

  );
}
