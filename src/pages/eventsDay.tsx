import React from "react";
import { graphql } from "gatsby";
import MenuLayout from "./foodLayout";
import { CompanyData } from "../interfaces/interfaces";
import companyData from "../data/data.json";
import { Helmet } from "react-helmet";
import favicon from "../images/icon.png";
import { useTranslation } from "react-i18next";
import Footer from "../components/footer";

const info: CompanyData = companyData[0];

const EventsDay: React.FC = () => {
  const companyInfo: CompanyData = companyData[0];
  const { t } = useTranslation();
  const white = "rgba(255, 255, 255, 0.5)";
  const secondary = "rgb(38, 77, 76)";
  const primary = "rgba(163, 175, 61, 0.75)";
  return (
    <MenuLayout data={companyInfo}>
      <Helmet>
        <title>
          {t("productMenu.dishes_title")} - {companyInfo.name}
        </title>
        <link rel="icon" href={favicon} />
      </Helmet>
      <div className="flex flex-col w-2/5 mx-auto">
        <h3 className="text-center text-primary text-4xl">Visítanos</h3>
        <p className="text-center text-white">
          Descubre lo mejor de la cocina colombiana y venezolana en Point Bar
          Lounge. Convenientemente ubicado en Montreal, te invitamos a unirte a
          nosotros para una experiencia gastronómica inolvidable que celebra los
          vibrantes sabores de América Latina. Desde nuestros cócteles
          innovadores hasta nuestros platos deliciosos, cada momento en Point
          Bar Lounge es una celebración de la excelencia culinaria
        </p>
      </div>

      <div className="mb-20">
        <div className="flex w-4/5 mx-auto h-[550px]">
          <iframe
            className="w-full iframe"
            style={{ color: "rgb(255, 255, 255) !important" }}
            src={`https://widgets.libroreserve.com/WEB/QC016493475991/book?bg-color=${primary}&bg-color-2=${secondary}&btn-color=${secondary}&btn-text-color=${primary}&text-color-2=${white}&text-color-3=${white}`}
          ></iframe>
        </div>

        <div className="flex justify-center mt-20">
          <iframe
            className="w-[500px] h-[300px]"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=1735%20st%20denis%20montreal&t=k&z=19&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
      </div>

      <div className="flex bg-latinClub relative z-20">
        <Footer data={info} />
      </div>
    </MenuLayout>
  );
};

export default EventsDay;

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
