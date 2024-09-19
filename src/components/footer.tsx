import React from "react";
import { Link } from "gatsby";
import MainLogo from "../components/mainLogo";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { CompanyData } from "../interfaces/interfaces"; // Asegúrate de que la ruta sea correcta
import { RiInstagramLine } from "react-icons/ri";
import { BsFacebook } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import images from "../images";

interface FooterProps {
  data?: CompanyData;
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <footer className={styles.container}>
      <div className="flex flex-row w-full justify-around">
        <Link to="/" className="px-32">
          <MainLogo fillColour="#fff" />
        </Link>
        <ul className="px-16">
          {data && data.companyDetails ? (
            <>
              <li>{data.companyDetails.address}</li>
              <li>{data.companyDetails.phone}</li>
              <li>
                {data.companyDetails.city}, {data.companyDetails.country}
              </li>
              <li>{data.companyDetails.email}</li>
            </>
          ) : (
            <li>{t("loading")}</li>
          )}
        </ul>
        <div className="border-l-white border-l-2 border-r-white border-r-2 px-16">
          <h3 className="font-semibold">{t("hours.title")}</h3>
          <ul>
            <li>{t("hours.sunday_to_tuesday")}</li>
            <li>{t("hours.monday")}</li>
            <li>{t("hours.wednesday_and_thursday")}</li>
            <li>{t("hours.friday_and_saturday")}</li>
          </ul>
        </div>

        {data && data.companyDetails ? (
          <div className="flex flex-col mx-12 gap-4 self-center ">
            <a
              href={data.companyDetails.whatsApp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImWhatsapp className="text-white hover:text-latinFucsia" />
            </a>
            <a
              href={data.companyDetails.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiInstagramLine className="text-white hover:text-latinFucsia" />
            </a>
            <a
              href={data.companyDetails.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook className="text-white hover:text-latinFucsia" />
            </a>
          </div>
        ) : (
          <li>{t("loading")}</li>
        )}
      </div>

      <div className="text-center mt-8">
        <p>
          {new Date().getFullYear()} &copy; {t("content.copyright_footer")}
        </p>
      </div>

      <div className="absolute w-[18rem] h-[26rem]">
        <img
          className="absolute z-50 top-48 rotate-[-5deg] left-4"
          src={images.cocktail_4}
          alt=""
        />
      </div>
    </footer>
  );
};

export default Footer;

const styles = {
  container: "flex flex-col justify-around p-4 text-white py-8 relative overflow-hidden",
};
