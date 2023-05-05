import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="aboutMe" className="w-full mt-16">
      <div className="max-w-lg">
        <span className="uppercase text-greenAqua tracking-[0.3em]">
          Sobre mim
        </span>
        <h1 className="text-grayTitle text-4xl sm:text-6xl pt-4">
          Regina <br /> de Paula
        </h1>
      </div>
      <div className="w-full flex items-center flex-col justify-center gap-12 sm:flex-row">
        <div className="w-full sm:w-1/2 mt-8">
          <p className="text-grayText text-xl">
            Sou uma pessoa que gosta de viajar e conhecer novos lugares, e
            também gosto de compartilhar minhas experiências com outras pessoas.
          </p>
          <p className="text-grayText text-xl pt-4">
            Sou formada em Turismo e Hotelaria, e atualmente estou cursando
            Análise e Desenvolvimento de Sistemas.
          </p>
        </div>
        <div className="w-full sm:w-1/2 rounded-full p-4 grid place-items-center">
          <Image
            src="/regina.png"
            alt="Regina de Paula"
            width={250}
            height={250}
          />
        </div>
      </div>
    </section>
  );
}
