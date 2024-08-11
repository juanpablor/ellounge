import React from "react";
import { Link, useI18next, Trans, useTranslation } from "gatsby-plugin-react-i18next";

interface NavProps {
  data?: { menu: string[] };
}

const Navigation: React.FC<NavProps> = ({ data }) => {
  const { languages, changeLanguage } = useI18next();
  if (!data || !data.menu) {
    return null;
  }
  console.log(data.menu, ' data.menu')
  return (
    <nav className={styles.container}>
      <ul className={styles.buttonsWrapper}>
        {data.menu.map((item: any, index: any) => (
          <li key={index}>
            <Link
              to={`/${item}`}
              className={styles.buttons}
              activeClassName="bg-secondary"
              placeholder={item}
            >
              <Trans>{item}</Trans>
            </Link>
          </li>
        ))}
      </ul>

      <ul className={styles.buttonsWrapper}>
        {languages.map((lng) => (
          <li key={lng} >
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

export default Navigation;

const styles = {
  container: "flex flex-row justify-center ",
  buttonsWrapper: "flex flex-row justify-evenly self-center mr-4",
  buttons: "border px-8 py-1 rounded hover:bg-hover hover:text-white",
};
