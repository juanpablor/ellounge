import React, { ReactNode } from "react";
import { graphql } from "gatsby";
import { CompanyData } from "../interfaces/interfaces";
import LatinClubLayout from "./latinClubLayout";
// import MainLogo from "../components/mainLogo";
// import { useTranslation } from "react-i18next";
import images from "../images";
import Footer from "../components/footer";
import data from "../data/data.json";

interface visitUsProps {
  children: ReactNode;
  data?: CompanyData;
  eventPage?: boolean;
}

const info: CompanyData = data[0];

const visitUs: React.FC<visitUsProps> = ({ data }) => {
  const companyInfo: CompanyData | undefined = data || undefined;
  // const { t } = useTranslation();
  const white = "rgba(255, 255, 255, 0.5)";
  const secondary = "rgb(38, 77, 76)";
  const primary = "rgba(163, 175, 61, 0.75)";
  const fucsia = "rgba(255, 255, 255, 0.4)";
  const black = "rgba(0, 0, 0, 0.6)";


  return (
    <div
      className="flex flex-col w-full h-full"
      style={{
        backgroundImage: `url(${images.BackgroundImage})`,
        backgroundSize: "content",
      }}
    >
      <LatinClubLayout data={companyInfo} eventPage={true}>
        <div className="">
          <div className="flex w-4/5 mx-auto h-[550px]">
            <iframe
              className="w-full iframe"
              style={{ color: "rgb(255, 255, 255) !important" }}
              src={`https://widgets.libroreserve.com/WEB/QC016493475991/book?bg-color=${fucsia}&bg-color-2=${black}&btn-color=${secondary}&btn-text-color=${primary}&text-color-2=${white}&text-color-3=${white}`}
            ></iframe>
          </div>

          <div className="flex justify-center mt-20">
            <iframe
              className="w-[500px] h-[300px]"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=1735%20st%20denis%20montreal&t=k&z=19&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>

          <div className="flex flex-row w-full overflow-hidden relative h-[240px] -mt-24">
            <img
              className="w-96  object-cover rotate-180 aspect-[4/3] absolute -bottom-20 -left-20"
              src={images.cocktail_wireframe_2.src}
              alt={images.cocktail_wireframe_2.alt}
            />
            <img
              className="w-96 object-cover aspect-[4/3] absolute -bottom-12 -right-24"
              src={images.cocktail_wireframe.src}
              alt={images.cocktail_wireframe.alt}
            />
          </div>
        </div>

        <div className="flex bg-latinClub relative">
          <Footer data={info} />
        </div>
      </LatinClubLayout>
    </div>
  );
};

export default visitUs;

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

// const styles = {
//   before:
//     "before:content-[''] before:block before:border-latinFucsialight before:border-2 before:rounded-2xl before:absolute before:shadow-md before:shadow-latinFucsia",
// };
