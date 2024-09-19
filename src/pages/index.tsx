import * as React from "react";
// import Indexlayout from "./Indexlayout";
import { graphql } from "gatsby";
// import data from "../data/data.json";
// import { Trans } from "gatsby-plugin-react-i18next";
// import Head from "../components/head";
// import { CompanyData, DataLayout } from "../interfaces/interfaces";
import images from "../images";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import MainLogo from "../components/mainLogo";

// const info: CompanyData = data[0];
// const pageTitle: string = "welcome";

// const IndexPage: React.FC<DataLayout> = ({ data }) => {
const IndexPage: React.FC = () => {
  return (
    <>
      <a href="/restaurant">
        <div className="fixed top-[50%] w-48 h-32 rounded-r-full flex justify-end z-20">
          <div className="w-32 h-32 text-white rounded-full text-center relative flex items-center justify-center">
            <svg className="absolute w-full h-full" viewBox="0 0 100 100">
              <defs>
                <path
                  id="circlePath"
                  d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                />
              </defs>
              <text fontSize="10" fill="white">
                <textPath xlinkHref="#circlePath" startOffset="0">
                  El Lounge &bull; El Lounge &bull; El Lounge &bull; El Lounge
                  &bull; El Lounge &bull;
                </textPath>
              </text>
            </svg>

            <div className="absolute flex flex-col items-center justify-center">
              <HiArrowLongLeft className="mx-auto text-4xl" />
              <span className="text-xl">Food</span>
            </div>
          </div>
        </div>
      </a>

      <a href="/latinClub">
        <div className="fixed top-[50%] z-50 right-0 w-48 h-32 rounded-l-full flex justify-start">
          <div className="w-32 h-32 text-white rounded-full text-center relative flex items-center justify-center">
            <svg className="absolute w-full h-full" viewBox="0 0 100 100">
              <defs>
                <path
                  id="circlePath"
                  d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                />
              </defs>
              <text fontSize="10" fill="white">
                <textPath xlinkHref="#circlePath" startOffset="0">
                  El Lounge &bull; El Lounge &bull; El Lounge &bull; El Lounge
                  &bull; El Lounge &bull;
                </textPath>
              </text>
            </svg>

            <div className="absolute flex flex-col items-center justify-center">
              <HiArrowLongRight className="mx-auto text-4xl" />
              <span className="text-xl">Drinks</span>
            </div>
          </div>
        </div>
      </a>

      <section className="flex justify-center">
        <div className="mt-12 w-96 absolute z-30">
          <MainLogo fillColour="#fff" />
        </div>
      </section>

      <section className="z-10">
        <div className="bottom-half flex justify-center bg-secondary">
          <div className="content-center">
            <img className="w-96" src={images.plate} alt="" />
          </div>
        </div>

        <div className="top-half flex justify-center bg-latinClub">
          <div className="content-center">
            <img className="w-96" src={images.plate} alt="" />
          </div>
        </div>
      </section>

      <section className="relative flex justify-center z-10 h-screen">
        <div className="w-96 flex self-center">
          <img
            className="w-48 h-96 relative left-8 bottom-20"
            src={images.cocktail}
            alt=""
          />
        </div>

        <div className="flex self-center">
          <img
            className="ml-20 w-60 h-80 relative bottom-4 left-8"
            src={images.beer}
            alt=""
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
