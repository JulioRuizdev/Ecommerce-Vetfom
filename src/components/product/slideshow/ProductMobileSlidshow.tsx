'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

import './slideshow.css';
import Image from "next/image";

interface Props{
  images: string[];
  title: string;
  className?: string;

}


export const ProductMobileSlidshow = ({images, title, className}:Props) =>{
  
  return (
    <div className={className}>
      <Swiper
        style={{
          width: '100vw',
          height: '500px',
        }}
        pagination={true}
        navigation={true}
        autoplay={{
          delay: 2500,
        }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay, Pagination]}
        className="mySwiper2"
      >
        {
          images.map(image => (
            <SwiperSlide key={ image }  className="">
              <Image 
                width={600} // Controla el ancho máximo de la imagen
                height={500} // Controla el alto máximo de la imagen
                src={`/products/${image}`}
                alt={ title}
                className="object-contain"
              />
            </SwiperSlide>
          ))
        }

      </Swiper>


    </div>
  )
}

