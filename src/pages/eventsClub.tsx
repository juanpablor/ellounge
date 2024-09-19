import React, { ReactNode } from "react";
import { graphql } from "gatsby";
import { CompanyData } from "../interfaces/interfaces";
import LatinClubLayout from "./latinClubLayout";
import MainLogo from "../components/mainLogo";
import { useTranslation } from "react-i18next";
import images from "../images";
import Footer from "../components/footer";
import data from "../data/data.json";

interface eventsClubProps {
  children: ReactNode;
  data?: CompanyData;
  eventPage?: boolean;
}

const info: CompanyData = data[0];

const eventsClub: React.FC<eventsClubProps> = ({ data }) => {
  const companyInfo: CompanyData | undefined = data || undefined;
  const { t } = useTranslation();
  return (
    <div
      className="flex flex-col w-full h-full"
      style={{
        backgroundImage: `url(${images.BackgroundTexture})`,
        backgroundSize: "content",
      }}
    >
      <LatinClubLayout data={companyInfo} eventPage={true}>
        <div className="w-[20rem] mx-auto">
          <MainLogo fillColour={"#fff"} />
        </div>
        <h3 className="text-primary text-5xl text-center my-8 w-full tracking-widest">
          {t("general.eventsClubPage.title")}
        </h3>

        <div className="flex flex-row max-w-[920px] mx-auto ">
          <div className="flex w-1/2 p-16 relative">
            <img
              src={images.planta_7}
              className="absolute w-44 right-0 top-0"
              alt=""
            />

            <div
              className={`${styles.before} before:w-[372px] before:h-[510px] before:left-4 before:top-12`}
            >
              <img
                className="w-[332px] h-[470px]"
                src={images.events_1}
                alt=""
              />
            </div>
            <img
              src={images.planta_7}
              className="absolute w-44 rotate-180 left-0 bottom-0"
              alt=""
            />
          </div>
          <div className="flex flex-col w-1/2 pl-8 pt-24">
            <h4 className="text-latinFucsia text-2xl text-right">
              {t("general.eventsClubPage.subtitle")}
            </h4>
            <p className="text-white text-xl text-right pt-8">
              {t("general.eventsClubPage.content_1")}
            </p>
          </div>
        </div>

        <div className="flex flex-row max-w-[920px] mx-auto relative">
          <div className="flex flex-col self-center">
            <p className="text-white text-xl">
              {t("general.eventsClubPage.content_2")}
            </p>
          </div>
          <div className="flex relative z-20">
            <div
              className={`${styles.before} before:w-[406px] before:h-[312px] before:-left-4 before:-top-4`}
            >
              <img
                className="qw-[366px] qh-[284px]"
                src={images.events_2}
                alt=""
              />
            </div>
          </div>
          <img
            src={images.planta_7}
            className="absolute w-44 rotate-45 -right-12 -bottom-24 z-10"
            alt=""
          />
        </div>

        <div className="flex relative h-64 mt-24">
          <div className="flex flex-row w-full overflow-hidden relative">
            <img
              className="w-1/2 -scale-x-100 object-cover aspect-[4/3] absolute top-0"
              src={images.plantasFlamingo}
              alt=""
            />
            <img
              className="w-1/2 object-cover aspect-[4/3] absolute top-0 right-0"
              src={images.plantasFlamingo}
              alt=""
            />
          </div>
        </div>

        <div className="bg-latinClub">
          <Footer data={info} />
        </div>
      </LatinClubLayout>
    </div>
  );
};

export default eventsClub;

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

const styles = {
  before:
    "before:content-[''] before:block before:border-latinFucsialight before:border-2 before:rounded-2xl before:absolute before:shadow-md before:shadow-latinFucsia",
};
