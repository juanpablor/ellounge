import * as React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import images from "../images";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import MainLogo from "../components/mainLogo";
import LanguageSelector from "../components/languageSelector";
import { CompanyData } from "../interfaces/interfaces";
import data from "../data/data.json";

const info: CompanyData = data[0];

const IndexPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <a href="/elLounge">
        <div className="fixed left-4 top-[60%] sm:top-[50%] w-20 sm:w-48 h-20 sm:h-40 rounded-r-full flex justify-end z-20">
          <div className="w-20 sm:w-40 h-20 sm:h-40 text-white rounded-full text-center relative flex items-center justify-center bg-primary">
            <svg className="absolute w-full h-full" viewBox="0 0 100 100">
              <defs>
                <path
                  id="circlePath"
                  d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                />
              </defs>
              <text fontSize="10" fill="white">
                <textPath xlinkHref="#circlePath" startOffset="0">
                  El Lounge&nbsp;&nbsp;&bull;&nbsp;El Lounge&nbsp;&nbsp;&bull;&nbsp;&nbsp;El Lounge&nbsp;&nbsp;&bull;&nbsp;El Lounge&nbsp;&nbsp;&bull;&nbsp;
                </textPath>
              </text>
            </svg>

            <div className="absolute flex flex-col items-center justify-center">
              <HiArrowLongLeft className="mx-auto text-xl sm:text-4xl" />
              <span className="text-xs sm:text-xl uppercase font-extrabold">{t("general.food")}</span>
            </div>
          </div>
        </div>
      </a>

      <a href="/latinClub">
        <div className="fixed right-4 top-[60%] sm:top-[50%] z-50 sm:right-0 w-20 sm:w-48 h-20 sm:h-40 rounded-l-full flex justify-start">
          <div className="w-20 sm:w-40 h-20 sm:h-40 text-white rounded-full text-center relative flex items-center justify-center bg-latinFucsia">
            <svg className="absolute w-full h-full" viewBox="0 0 100 100">
              <defs>
                <path
                  id="circlePath"
                  d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                />
              </defs>
              <text fontSize="10" fill="white">
                <textPath xlinkHref="#circlePath" startOffset="0">
                  El Lounge&nbsp;&nbsp;&bull;&nbsp;El Lounge&nbsp;&nbsp;&bull;&nbsp;&nbsp;El Lounge&nbsp;&nbsp;&bull;&nbsp;El Lounge&nbsp;&nbsp;&bull;&nbsp;
                </textPath>
              </text>
            </svg>

            <div className="absolute flex flex-col items-center justify-center">
              <HiArrowLongRight className="mx-auto text-xl sm:text-4xl" />
              <span className="text-xs sm:text-xl uppercase font-extrabold">{t("general.drinks")}</span>
            </div>
          </div>
        </div>
      </a>

      <section className="flex justify-center">
        <div className="mt-12 w-44 sm:w-96 absolute z-30">
          <MainLogo fillColour="#fff" />
        </div>
      </section>

      <section className="z-10"
        style={{
          backgroundImage: `url(${images.cocktail_wireframe_2})`,
        }}
      
      >
        <div
          className="bottom-half flex justify-center bg-secondary bg-cover bg-center"
          style={{
            backgroundImage: `url(${images.elloungeBg.src})`,
            backgroundPosition: "bottom left"
          }}
        >
          <div className="content-center">
            <img className="w-40 sm:w-96" src={images.plate.src} alt={images.plate.alt} />
          </div>
        </div>

        <div
          className="top-half flex justify-center bg-latinFucsia/90"
          style={{
            backgroundImage: `url(${images.latinClubBg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "top right"
          }}
        >
          <div className="content-center relative z-10">
            <img className="w-40 sm:w-96" src={images.plate.src} alt={images.plate.alt} />
          </div>
        </div>
        <div className="absolute right-4 sm:right-20 top-4 sm:top-12 z-40">
          <LanguageSelector clubLayout={true} data={info} />
        </div>
      </section>

      <section className="relative flex justify-center z-10 h-screen">
        <div className="w-48 sm:w-96 flex self-center">
          <img
            className="w-20 sm:w-48 h-40 sm:h-96 relative left-6 sm:left-8 bottom-8 sm:bottom-20"
            src={images.cocktail.src}
            alt={images.cocktail.alt}
          />
        </div>

        <div className="flex self-center">
          <img
            className="ml-20 w-32 sm:w-60 h-32 sm:h-80 relative bottom-0 sm:bottom-4 left-0 sm:left-8"
            src={images.beer.src}
            alt={images.beer.alt}
          />
        </div>
      </section>
    </>
  );
};

export default IndexPage;

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
