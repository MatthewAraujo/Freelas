import  SwiperBanner from "../swiper/SwiperBanner/swiperBanner";

export default function Banner() {
  return (
    <section id="banner" className="w-full mt-16">
      <div
        className="w-full max-w-4xl
       flex flex-col items-start gap-8"
      >
        <h1 className=" text-4xl sm:text-6xl text-grayTitle font-bold uppercase">
          Venha conhecer as belezas do Rio de Janeiro
        </h1>
        <p className="text-xl text-grayText font-medium">
          Visitar e aprender sobre as historias dos pontos turísticos
        </p>
      </div>
      <div className="max-w-full ms-auto mt-4">
        <SwiperBanner />
      </div>
    </section>
  );
}
