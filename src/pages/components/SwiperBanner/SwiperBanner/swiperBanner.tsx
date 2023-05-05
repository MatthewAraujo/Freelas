import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectFade, Autoplay } from "swiper";

const bannerSwiper = [
  {
    id: 1,
    img: "/rio.png",
    title: "Rio de Janeiro",
  },
  {
    id: 2,
    img: "/petropolis.jpg",
    title: "Rio de Janeiro",
  },
  {
    id: 3,
    img: "/museu-do-amanha.jpg",
    title: "Rio de Janeiro",
  },
];

export function SwiperBanner() {
  const slides = bannerSwiper;

  return (
    <div>
      <Swiper
        slidesPerView={1}
        direction="horizontal"
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        modules={[Autoplay, EffectFade]}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="h-[300px] sm:h-full">
            <Image
              className="object-cover h-[500px] w-full"
              src={slide.img}
              width={938}
              height={368}
              alt={slide.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
