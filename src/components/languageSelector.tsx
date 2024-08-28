import React from "react";
import {
  Link,
  useI18next,
  Trans,
  useTranslation,
} from "gatsby-plugin-react-i18next";

interface NavProps {
  data?: { menu: string[] };
}

const LanguageSelector: React.FC<NavProps> = ({ data }) => {
  const { languages, changeLanguage } = useI18next();
  const { t } = useTranslation();

  if (!data || !data.menu) {
    return null;
  }

  return (
    <div className={styles.container}>
      <ul className={styles.buttonsWrapper}>
        {languages.map((lng) => (
          <li
            key={lng}
            className={styles.buttons}
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
  buttonsWrapper: "flex flex-row justify-evenly",
  buttons:
    "flex w-10 h-10 shrink-0 grow-0 rounded-full justify-center bg-primary text-white hover:bg-secondary hover:border-primary hover:border-2 hover:text-white cursor-pointer mx-1",
  text: "self-center capitalize",
};
