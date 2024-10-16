import React from "react";
import { useI18next } from "gatsby-plugin-react-i18next";
import { CompanyData } from "../interfaces/interfaces"; 

interface NavProps {
  data?: CompanyData;
  clubLayout?: boolean;
}

const LanguageSelector: React.FC<NavProps> = ({ data, clubLayout }) => {
  const { languages, changeLanguage, language: currentLanguage } = useI18next();

  if (!data?.menu) {
    return null;
  }

  return (
    <div className={styles.container}>
      <ul className={styles.buttonsWrapper}>
        {languages.map((lng) => (
          <li
            key={lng}
            className={`${styles.buttons} ${
              clubLayout ? "tab-button hover:underline" : styles.hover
            }
            ${lng === currentLanguage ? clubLayout ? "text-shadow-fucsia !text-latinFucsia" : "bg-none border-none" : clubLayout ? "bg-none border-none" : "bg-secondary"}`}
            onClick={(e) => {
              e.preventDefault();
              changeLanguage(lng);
            }}
          >
            <div className={styles.text}>{lng}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSelector;

const styles = {
  container: "flex flex-row justify-center self-center",
  buttonsWrapper: "flex justify-evenly flex-row",
  buttons: "flex w-10 h-10 shrink-0 grow-0 rounded-full justify-center text-white cursor-pointer mx-1",
  text: "self-center capitalize",
  hover: "bg-primary hover:bg-secondary hover:border-primary hover:border-2 hover:text-white",
};
