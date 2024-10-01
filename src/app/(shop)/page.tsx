import Image from "next/image";
import { titleFont } from "../config/fonts";

export default function Home() {
  return (
    <main className="">
      <h1>Hola mundo</h1>
      <h1 className={`${titleFont.className} font-bold`}>Hola mundo</h1>
    </main>

  );
}
