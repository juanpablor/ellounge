import React from "react";
import LatinClubLayout from "./latinClubLayout";
import { graphql } from "gatsby";
import { CompanyData } from "../interfaces/interfaces";
import data from "../data/data.json";
import images from "../images";
import MainLogo from "../components/mainLogo";
import ClubNavigation from "../components/clubNav";
import Footer from "../components/footer";

const info: CompanyData = data[0];

interface LatinClubProps {
  data?: CompanyData;
}

const LatinClub: React.FC<LatinClubProps> = () => {
  return (
    <div className="flex flex-col w-full h-screen"  style={{
      backgroundImage: `url(${images.BackgroundClubImage})`,
    }}>


    <LatinClubLayout data={info}>
      <div className="flex flex-row w-[40rem] mx-auto mt-20">
        <div className="flex">
          <img src={images.beer} alt="" />
        </div>
        <div className="flex flex-col">
          <MainLogo fillColour={"#fff"} />
          <div>
            <h2 className="text-primary text-4xl">Latín Club</h2>
            <p className="text-white">
              Únete a nosotros todos los viernes y sábados después de las
              11:00pm cuando El Lounge se transforma en el club latino más
              caliente de Montreal.
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full relative">
        <div className="flex mx-auto my-12">
          <ClubNavigation data={info} /> 
        </div>

        <div className="absolute bottom-12 -right-20">
          <img
            className=" w-[30rem]"
            src={images.cocktail_wireframe}
            alt=""
          />
        </div>
      </div>


      <div className="relative w-full flex">
        <div className="relative flex w-[60rem] bg-white/30 h-44 mx-auto overflow-hidden p-4">
          <img className="absolute w-[16rem] -right-14 -top-16" src={images.cocktail_wireframe_2} alt="" />
          <img className="absolute w-[16rem] -left-14 -bottom-16 rotate-180" src={images.cocktail_wireframe_2} alt="" />

          <div className="text-white flex px-20 items-center">

          <img className="w-20 " src={images.cocktail_5} alt="" />
          <p className="px-6 text-xl">Baila toda la noche al ritmo electrizante de nuestro DJ en vivo, que toca lo mejor de la música de fiesta latina.</p>
          </div>
        </div>
      </div>

      <div className="flex w-full relative flex-col my-24">
        <div className="mx-auto text-latinBlue mb-8 text-2xl">¡ Sumérgete en la energía de la noche latina!</div>
        <p className="text-center text-white text-3xl">Experimenta la energía y emoción de una verdadera fiesta latina aquí en El Lounge.</p>
      </div>

      <div className="flex w-[70rem] gap-8 mx-auto mb-24">
        <img className="w-96" src={images.latin_club_1} alt="" />
        <img className="w-96" src={images.latin_club_2} alt="" />
        <img className="w-96" src={images.latin_club_3} alt="" />
      </div>
    </LatinClubLayout>
    <div className="bg-latinClub">

    <Footer data={info}/>
    </div>
    </div>
  );
};

export default LatinClub;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
