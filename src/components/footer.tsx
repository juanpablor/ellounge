import React from "react";
import { Link } from "gatsby";
import MainLogo from "../components/mainLogo";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { CompanyData } from "../interfaces/interfaces"; // Asegúrate de que la ruta sea correcta

interface FooterProps {
  data?: CompanyData;
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <footer className={styles.container}>
      <Link to="/" className="max-w-32">
        <MainLogo fillColour="#fff" />
      </Link>
      <ul>
        {data && data.companyDetails ? (
          <>
            <li>{data.companyDetails.address}</li>
            <li>{data.companyDetails.phone}</li>
            <li>{data.companyDetails.city}, {data.companyDetails.country}</li>
            <li>{data.companyDetails.email}</li>
          </>
        ) : (
          <li>{t('loading')}</li>
        )}
      </ul>
      <div>
        <h3 className="font-semibold">{t("hours.title")}</h3>
        <ul>
          <li>{t("hours.sunday_to_tuesday")}</li>
          <li>{t("hours.monday")}</li>
          <li>{t("hours.wednesday_and_thursday")}</li>
          <li>{t("hours.friday_and_saturday")}</li>
        </ul>
        <p>{t("content.additional_info")}</p> {/* Reemplace `content.additional_info` con la clave correcta */}
      </div>
    </footer>
  );
};

export default Footer;

const styles = {
  container: 'flex flex-row p-4 justify-around items-end bg-primary text-white'
};
