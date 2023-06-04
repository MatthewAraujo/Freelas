import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Image from "next/image";

const destinations = [
  {
    id: 1,
    name: "Cristo Redentor",
    image: "/cristo.jpg",
    description:
      "O Cristo Redentor é uma estátua art déco que retrata Jesus Cristo, localizada no topo do morro do Corcovado, a 709 metros acima do nível do mar, no Parque Nacional da Tijuca, com vista para a maior parte da cidade do Rio de Janeiro, Brasil.",
  },
  {
    id: 2,
    name: "Pao de Acucar",
    image: "/pao-de-acucar.jpg",
    description:
      "O Pão de Açúcar é um pico localizado no bairro da Urca, na cidade do Rio de Janeiro, no Brasil. É um dos vários morros costeiros do Brasil, que se erguem sobre o oceano Atlântico.",
  },
  // {
  //   id: 3,
  //   name: "Vista Chinesa",
  //   image: "/vista-chinesa.jpg",
  //   description:
  //     "A Vista Chinesa é um mirante localizado no Parque Nacional da Tijuca, na cidade do Rio de Janeiro, no Brasil.",
  // },
  {
    id: 4,
    name: "Jardim Botanico",
    image: "/jardim.png",
    description:
      "O Jardim Botânico é um tesouro verde no Rio de Janeiro, com mais de 8.000 espécies de plantas e árvores, muitas delas raras e ameaçadas de extinção. Além de seus jardins exuberantes, o local abriga monumentos históricos, como a estufa de ferro e vidro, e uma reserva de Mata Atlântica preservada, que oferece trilhas para caminhadas e observação da fauna e flora. Uma experiência inesquecível para os amantes da natureza.",
  },
  // {
  //   id: 5,
  //   name: "Pedra Bonita",
  //   image: "/pedra-bonita.jpg",
  //   description:
  //     "A Pedra Bonita é um dos pontos turísticos da cidade do Rio de Janeiro, no Brasil. Localiza-se no Parque Nacional da Tijuca, entre os bairros de São Conrado e Barra da Tijuca, na Zona Sul da cidade.",
  // },
  {
    id: 6,
    name: "Parque Lage",
    image: "/parque-lage.jpg",
    description:
      "O Parque Henrique Lage, no bairro do Jardim Botânico, é um refúgio verde no coração do Rio de Janeiro. Com uma área de mais de 52 hectares, é um dos maiores parques urbanos da cidade, com trilhas para caminhadas, lagos, jardins exuberantes e um palacete histórico que abriga um centro de arte e cultura. Um lugar perfeito para relaxar, fazer um piquenique e apreciar a natureza.",
  },
  {
    id: 7,
    name: "Escadaria Selaron",
    image: "/escadaria-selaron.jpg",
    description:
      "A Escadaria Selarón é um dos pontos turísticos mais icônicos do Rio de Janeiro. Localizada no bairro de Santa Teresa, é uma obra de arte ao ar livre composta por mais de 200 degraus cobertos por mosaicos coloridos. Criada pelo artista chileno Jorge Selarón, a escadaria é um tributo à cultura brasileira e uma experiência única e vibrante para os visitantes.",
  },
  {
    id: 8,
    name: "Museu do Amanha",
    image: "/museu-do-amanha.jpg",
    description:
      "O Museu do Amanhã, localizado na zona portuária do Rio de Janeiro, é um espaço inovador e interativo que explora as possibilidades do futuro. Com exposições imersivas e tecnologias de ponta, o museu aborda temas como ciência, sustentabilidade e mudanças climáticas de uma maneira fascinante e educativa. Uma visita obrigatória para quem busca conhecimento e inspiração.",
  },
  {
    id: 9,
    name: "Cinelandia",
    image: "/cine-landia.jpg",
    description:
      "Cinelandia, no centro histórico do Rio de Janeiro, é uma área de grande valor cultural e arquitetônico. A Praça Floriano é o ponto central, cercada pelo majestoso Theatro Municipal, a Biblioteca Nacional, o Museu de Belas Artes e o Cine Odeon, entre outros edifícios notáveis. Um passeio incrível para os amantes da história, arte e cultura.",
  },
  {
    id: 10,
    name: "Praça XV",
    image: "/praça-XV.jpg",
    description:
      "A Praça XV, coração histórico do Rio de Janeiro, é um lugar icônico que merece ser visitado. Lá se encontram o Paço Imperial, a estátua de D. Pedro I, o Arco do Teles e o antigo cais do porto, entre outras atrações.",
  },
  {
    id: 11,
    name: "Praias",
    image: "/copacabana.jpg",
    description:
      " As praias do Rio de Janeiro são um dos principais atrativos da cidade.",
  },
  {
    id: 12,
    name: "angra dos reis",
    image: "/angra-dos-reis.jpg",
    description:
      "Angra dos Reis, praias paradisíacas e ilhas deslumbrantes cercadas pela Mata Atlântica. Um paraíso de águas cristalinas para amantes de natureza e esportes aquáticos.",
  },

  {
    id: 14,
    name: "Petropolis",
    image: "/petropolis.jpg",
    description:
      "Petrópolis é uma cidade encantadora e histórica localizada na região serrana do Rio de Janeiro. Fundada em 1843, a cidade é conhecida por suas belas construções em estilo imperial, que remetem à época em que foi escolhida como refúgio de verão da família real brasileira. Entre os principais pontos turísticos de Petrópolis, destacam-se o Museu Imperial, que abriga um acervo precioso de objetos e mobiliário do século XIX, e o Palácio de Cristal, um belíssimo pavilhão de vidro e aço construído em 1884. Além disso, a cidade conta com uma rica gastronomia, com opções que vão desde os pratos típicos da culinária alemã até a famosa cerveja local. Com clima ameno e paisagens deslumbrantes, Petrópolis é um destino imperdível para quem busca história, cultura e natureza.",
  },
];

import { Mousewheel, Autoplay } from "swiper";
export default function SwiperDestination() {
  return (
    <div className="w-full mt-8">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        breakpoints={{
          350: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          420: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        mousewheel={{ invert: true }}
        modules={[Mousewheel, Autoplay]}
      >
        {destinations.map((d) => (
          <SwiperSlide key={d.id} className="group">
            <div className="flex flex-col gap-2 text-grayText h-full max-h-[513px]">
              <div className="order-1 group-odd:order-2">
                <Image
                  width={315}
                  height={410}
                  src={d.image}
                  alt={d.name}
                  className="h-[400px] w-full object-cover  "
                />
              </div>
              <div className="order-2 group-odd:order-1 ">
                <p className="line-clamp-4">{d.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
