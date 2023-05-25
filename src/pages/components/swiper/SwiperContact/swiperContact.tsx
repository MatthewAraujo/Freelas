import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Mousewheel } from "swiper";

const bannerSwiper = [
  {
    id: 1,
    img: "/galeria/crist.webp",
    title: "Rio de Janeiro",
  },
  {
    id: 2,
    img: "/galeria/yeahhh.webp",
    title: "Rio de Janeiro",
  },
  {
    id: 3,
    img: "/galeria/confeitaria.webp",
    title: "Confeitaria colombo",
  },
  {
    id: 4,
    img: "/galeria/boaviagem.webp",
    title: "Rio de Janeiro",
  },
  {
    id: 5,
    img: "/galeria/carnaval.webp",
    title: "Rio de Janeiro",
  },
  {
    id: 6,
    img: "/galeria/cristo.webp",
    title: "Rio de Janeiro",
  },
  
  {
    id: 8,
    img: "/galeria/family.webp",
    title: "Rio de Janeiro",
  },
  {
    id: 9,
    img: "/galeria/parquenacional.webp",
    title: "Rio de Janeiro",
  },
  {
    id: 10,
    img: "/galeria/praia.webp",
    title: "Rio de Janeiro",
  },
  {
    id: 10,
    img: "/galeria/rio.webp",
    title: "Rio de Janeiro",
  },
  {
    id: 10,
    img: "/galeria/rj.webp",
    title: "Rio de Janeiro",
  },
];

export default function SwiperContact() {
  const slides = bannerSwiper;

  return (
    <div className="w-full h-full">
      <Swiper
        slidesPerView={1}
        direction="horizontal"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Mousewheel, Autoplay]}
        className="w-[600px]"
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
