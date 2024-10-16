import React, { useState } from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import { FiMenu, FiX } from "react-icons/fi";

interface ClubNavProps {
  data?: {
    clubMenu: string[];
    companyDetails: { instagram: string; facebook: string };
  };
}

const ClubNavigation: React.FC<ClubNavProps> = ({ data }) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!data?.clubMenu || !data?.companyDetails) return null;

  const currentPath = pathname.replace(/^\/(es|en|fr)\//, "/").replace(/\/$/, "");

  return (
    <nav className={styles.container}>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={styles.burgerButton}>
        {isMenuOpen ? <FiX className="text-white fixed right-4 z-[70] top-4" size={24} /> : <FiMenu className="text-white" size={24} />}
      </button>

      <ul className={`${styles.buttonsWrapper} ${isMenuOpen ? styles.menuOpen : styles.menuClosed}`}>
        {data.clubMenu.map((item, index) => {
          const itemPath = item === "home" ? "/" : `/${item}`.replace(/\/$/, "");
          const isActive = currentPath === itemPath;

          return (
            <li key={index} className={styles.buttonsContainer}>
              <Link to={itemPath} className={`${styles.buttons} ${isActive ? "text-shadow-fucsia !text-latinFucsia" : ""}`}>
                <Trans i18nKey={`menuDrink.${item}`}>
                  {t(`menuDrink.${item}`)}
                </Trans>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default ClubNavigation;

const styles = {
  container: "inline-block justify-between items-center px-4 py-2 rounded-full relative",
  burgerButton: "md:hidden block text-white focus:outline-none",
  buttonsWrapper: "flex flex-col md:flex-row justify-evenly items-center w-full md:w-auto fixed sm:relative left-0 bg-latinClub top-0 py-8 sm:py-0 z-30",
  buttonsContainer: "my-4 sm:my-0",
  buttons: "text-white px-8 py-2 hover:underline",
  menuOpen: "block md:flex",
  menuClosed: "hidden md:flex",
};
