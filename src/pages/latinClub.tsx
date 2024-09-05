import React from "react";
import LatinClubLayout from "./latinClubLayout";
import { graphql } from "gatsby";
import { CompanyData } from "../interfaces/interfaces";
import data from "../data/data.json";
import images from "../images";
import MainLogo from "../components/mainLogo";

const info: CompanyData = data[0];

const LatinClub: React.FC = () => {
  return (
    <LatinClubLayout data={info}>
      <div className="flex flex-row w-[40rem] mx-auto">
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

      <div className="absolute w-[20rem] bottom-0 right-0 overflow-hidden">
        <img
          className="absolute -bottom-12 w-44 -right-12"
          src={images.cocktail_wireframe}
          alt=""
        />
      </div>
    </LatinClubLayout>
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
