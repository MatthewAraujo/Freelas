import Banner from "./components/Banner/banner";
import Destinations from "./components/Destinations/destinations";
import Header from "./components/Header/header";
import AboutMe from "./components/AboutMe/sobremim";
import ContactMe from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import { GetStaticProps } from "next";

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto px-8 pt-8">
      <Header />
      <Banner />
      <Destinations />
      <AboutMe />
      <ContactMe />
      <Footer />
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
