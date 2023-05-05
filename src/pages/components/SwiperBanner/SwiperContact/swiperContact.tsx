import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const bannerSwiper = [
  {
    id: 1,
    img: "/rio.png",
    title: "Rio de Janeiro",
  },
];

export function SwiperContact() {
  const slides = bannerSwiper;

  return (
    <div className="w-full h-full">
      <Swiper
        slidesPerView={1}
        direction="horizontal"
        loop={true}
        effect={"fade"}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="h-[300px] sm:h-[500px]">
              <Image
                className="object-cover h-full max-w-[369px] sm:max-w-full"
                src={slide.img}
                width={938}
                height={368}
                alt={slide.title}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
