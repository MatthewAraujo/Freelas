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
          <p className="text-grayText text-xl px-4 text-justify">
            Meu nome completo é Regina Célia de Paula Souza, nome turístico
            Regina de Paula. Moro no Rio de Janeiro há 18 anos, sou apaixonada
            pela cidade. Sou Guia de Turismo, com licença desde 2010. Tenho 72
            anos mas muita energia e disposição. Conheço todas muitas histórias
            sobre os pontos turísticos, já li muito a respeito! Falo inglês e espanhol, um pouco de francês e italiano.
          </p>
        </div>
        <div className="w-full sm:w-1/2  rounded-full p-4 grid place-items-center">
          <Image
            src="/profile.jpg"
            alt="Regina de Paula"
            width={250}
            height={250}
            className=" w-[250px] h-[250px] object-cover rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
