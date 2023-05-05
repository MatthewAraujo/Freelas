export default function Header() {
  return (
    <header className="w-full flex justify-between items-center text-grayText">
      <div className=" text-base ">
        <a href="#" className="w-full">
          Regina de paula
        </a>
      </div>
      <div className="hidden sm:flex justify-center items-center gap-16">
        <a href="#banner">Home</a>
        <a href="#destinations">Destino</a>
        <a href="#aboutMe">Sobre mim</a>
      </div>
      <div className="p-2 border-solid border-greenAqua border-[1px] rounded-3xl">
        <a href="#contact">Contato</a>
      </div>
    </header>
  );
}
