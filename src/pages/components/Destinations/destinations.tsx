import { SwiperDestination } from "../SwiperBanner/SwiperDestination/swiperDestination";

export function Destinations() {
  return (
    <section id="destinations" className="w-full mt-16">
      <div className="max-w-xl">
        <span className="uppercase text-greenAqua tracking-[0.3em]">
          Destinos
        </span>
        <h1 className="text-grayTitle text-4xl sm:text-6xl pt-4">
          Os Melhores Destinos para Você
        </h1>
      </div>
      <div className="w-full">
        <SwiperDestination />
      </div>
    </section>
  );
}
