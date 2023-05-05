import { Envelope, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";
import { FacebookLogo } from "phosphor-react";
import SwiperContact from "../swiper/SwiperContact/swiperContact";
export default function ContactMe() {
  return (
    <section id="contact" className="w-full my-16 ">
      <div className="w-full flex items-center flex-col justify-center gap-12 sm:flex-row">
        <div className="w-full sm:w-1/2 rounded-full  grid h-full place-items-center">
          <SwiperContact />
        </div>
        <div className="w-full sm:w-1/2 mt-8">
          <div className="max-w-md">
            <span className="uppercase text-greenAqua tracking-[0.3em]">
              Contato
            </span>
            <h1 className="text-grayTitle text-4xl sm:text-6xl pt-4">
              Deixe-me guiar a sua aventura
            </h1>
          </div>

          <div className="mt-8">
            <div className="flex flex-col gap-4 text-grayText">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-greenAqua p-1">
                  <WhatsappLogo size={22} color="#fff" />
                </div>
                <a
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=5521995059295"
                >
                  {" "}
                  (21) 9950-59295{" "}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-greenAqua p-1">
                  <FacebookLogo size={22} color="#fff" />
                </div>
                <a target="_blank" href="">
                  {" "}
                  Regina de paula
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-greenAqua p-1">
                  <Envelope size={22} color="#fff" />
                </div>
                <a target="_blank" href="">
                  {" "}
                  reginadepaulas@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-greenAqua p-1">
                  <InstagramLogo size={22} color="#fff" />
                </div>
                <a
                  target="_blank"
                  href="https://www.instagram.com/reginadepaula7771/"
                >
                  {" "}
                  reginadepaula7771{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
