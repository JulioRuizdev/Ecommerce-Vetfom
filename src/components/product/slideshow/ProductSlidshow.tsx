'use client';

import { useState } from "react";


import { Swiper as SwiperObject} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './slideshow.css';
import Image from "next/image";
import { ProductImage } from "../product-image/ProductImage";

interface Props{
  images: string[];
  title: string;
  className?: string;

}


export const ProductSlidshow = ({images, title, className}:Props) =>{
  
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();
  
  return (
    <div className={className}>
      <Swiper
        style={{
          '--swiper-navigation-color': '#000',
          '--swiper-pagination-color': '#000',
        } as React.CSSProperties
      }
        spaceBetween={10}
        navigation={true}
        autoplay={{
          delay: 2500,
        }}
        thumbs={{ 
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
        }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        {
          images.map(image => (
            <SwiperSlide key={ image }  className="">
              <ProductImage 
                width={600} // Controla el ancho máximo de la imagen
                height={600} // Controla el alto máximo de la imagen
                src={image}
                alt={ title}
                className="object-contain rounded-lg"
              />
            </SwiperSlide>
          ))
        }

      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {
          images.map(image => (
            <SwiperSlide key={ image }  className="">
              <ProductImage 
                width={300}
                height={300}
                src={image}
                alt={ title}
                className="rounded-lg object-fill"
              />
            </SwiperSlide>
          ))
        }
      </Swiper>

    </div>
  )
}

