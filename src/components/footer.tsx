import React from "react";
import { Link } from "gatsby";
import MainLogo from "../components/mainLogo"
import { useTranslation } from "gatsby-plugin-react-i18next";

interface FooterProps {
  data?: any;
}

const Footer: React.FC<FooterProps> = ({data}) => {
  const { t } = useTranslation();

  return (
    <footer className={styes.container}>
      <Link to="/" className="max-w-32">
        <MainLogo fillColour="#fff"/>
      </Link>
      <ul>
        <li>{data.companyDetails.address}</li>
        <li>{data.companyDetails.phone}</li>
        <li>{data.companyDetails.city}, {data.companyDetails.country}</li>
        <li>{data.companyDetails.email}</li>
      </ul>
      <div>
        <h3 className="font-semibold">{t("hours.title")}</h3>
        <ul>
          <li>{t("hours.sunday_to_tuesday")}</li>
          <li>{t("hours.monday")}</li>
          <li>{t("hours.wednesday_and_thursday")}</li>
          <li>{t("hours.Friday_and_saturday")}</li>
        </ul>
        {t("content.")}
      </div>
    </footer>
  );
};

export default Footer;

const styes = {
  container: 'flex flex-row p-4 justify-around items-end items-baseline bg-primary text-white'
}