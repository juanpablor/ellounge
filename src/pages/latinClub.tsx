import React from "react";
import LatinClubLayout from "./latinClubLayout";
import { graphql } from "gatsby";
import { CompanyData } from "../interfaces/interfaces";
import data from "../data/data.json";
import images from "../images";
import MainLogo from "../components/mainLogo";
import ClubNavigation from "../components/clubNav";
import Footer from "../components/footer";
import { useTranslation } from "react-i18next";

const info: CompanyData = data[0];

interface LatinClubProps {
  data?: CompanyData;
}

const LatinClub: React.FC<LatinClubProps> = () => {
  const { t } = useTranslation();
  return (
    <div
      className="flex flex-col w-full"
      style={{
        backgroundImage: `url(${images.BackgroundClubImage})`,
        backgroundSize: "content",
      }}
    >
      <LatinClubLayout data={info}>
        <div className="flex flex-row w-full sm:w-[40rem] mx-auto mt-16">
          <div className="w-60 sm:w-[72rem] ml-2 sm:ml-0">
            <img src={images.beer.src} alt={images.beer.alt} />
          </div>
          <div className="flex flex-col ml-4 pr-4 sm:pr-0">
            <div className="w-32 sm:w-72 mt-0 sm:mt-12">
              <MainLogo fillColour={"#fff"} />
            </div>
            <div className="mt-8 w-full">
              <h2 className="text-primary text-4xl">
                {t("general.latinClubPage.title")}
              </h2>
              <p className="text-white mt-4">
                {t("general.latinClubPage.intro")}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 h-48 sm:h-[24rem] w-[36rem] right-0 overflow-hidden hidden sm:flex">
          <img
            className="absolute -right-32 w-full"
            src={images.cocktail_wireframe.src}
            alt={images.cocktail_wireframe.alt}
          />
        </div>

        <div className="hidden sm:flex w-full relative">
          <div className="flex mx-auto my-12">
            <ClubNavigation data={info} />
          </div>
        </div>

        <div className="relative w-full flex mt-16 sm:mt-0">
          <div className="relative flex w-full sm:w-[60rem] bg-white/30 h-44 mx-auto overflow-hidden p-4">
            <img
              className="absolute w-52 sm:w-[16rem] -right-8 sm:-right-14 -top-16"
              src={images.cocktail_wireframe_2.src}
              alt={images.cocktail_wireframe_2.alt}
            />
            <img
              className="absolute w-52 sm:w-[16rem] -left-8 sm:-left-14 -bottom-16 rotate-180"
              src={images.cocktail_wireframe_2.src}
              alt={images.cocktail_wireframe_2.alt}
            />

            <div className="text-white flex px-2 sm:px-20 items-center">
              <img className="w-12 sm:w-20" src={images.cocktail_5.src} alt={images.cocktail_5.alt} />
              <p className="px-6 text-sm sm:text-xl">
                {t("general.latinClubPage.content_1")}
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full relative flex-col my-24">
          <div className="mx-auto text-latinBlue mb-8 text-md sm:text-2xl">
            {t("general.latinClubPage.content_2")}
          </div>
          <p className="text-white text-sm sm:text-xl w-full sm:w-1/2 text-center px-16 mx-auto">
            {t("general.latinClubPage.content_3")}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row w-72 sm:w-[70rem] gap-8 mx-auto mb-24">
          <img className="w-96" src={images.latin_club_1.src} alt={images.latin_club_1.alt} />
          <img className="w-96" src={images.latin_club_2.src} alt={images.latin_club_2.alt} />
          <img className="w-96" src={images.latin_club_3.src} alt={images.latin_club_3.alt} />
        </div>

        <div className="bg-latinClub">
          <Footer data={info} />
        </div>
      </LatinClubLayout>
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
