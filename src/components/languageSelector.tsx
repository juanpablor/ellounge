import React from "react";
import { Link, useI18next, Trans, useTranslation } from "gatsby-plugin-react-i18next";

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
    <nav className={styles.container}>
      {/* <ul className={styles.buttonsWrapper}>
        {data.menu.map((item: string, index: number) => {
          const linkTo = item === "El_Lounge" ? "/" : `/${item}`;

          return (
            <li key={index}>
              <Link
                to={linkTo}
                className={styles.buttons}
                activeClassName="bg-secondary" placeholder={undefined}              >
                <Trans i18nKey={`menu.${item}`}>
                  {t(`menu.${item}`)}
                </Trans>
              </Link>
            </li>
          );
        })}
      </ul> */}

      <ul className={styles.buttonsWrapper}>
        {languages.map((lng) => (
          <li key={lng}>
            <a
              className={styles.buttons}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                changeLanguage(lng);
              }}
            >
              {lng}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LanguageSelector;

const styles = {
  container: "flex flex-row justify-center",
  buttonsWrapper: "flex flex-row justify-evenly self-center mr-4",
  buttons: "border px-8 py-1 rounded hover:bg-hover hover:text-white",
};
