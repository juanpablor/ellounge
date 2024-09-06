import React, { useState } from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import { Link } from "gatsby"
import { FiMenu, FiX } from "react-icons/fi";

interface ClubNavProps {
  data?: {
    clubMenu: string[];
    companyDetails: { instagram: string; facebook: string };
  };
}

const ClubNavigation: React.FC<ClubNavProps> = ({ data }) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!data || !data.clubMenu || !data.companyDetails) {
    return null;
  }


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.container}>
      <button onClick={toggleMenu} className={styles.burgerButton}>
        {isMenuOpen ? <FiX className="text-white" size={24} /> : <FiMenu className="text-white" size={24} />}
      </button>

      <ul className={`${styles.buttonsWrapper} ${isMenuOpen ? styles.menuOpen : styles.menuClosed}`}>
        {data.clubMenu.map((item: string, index: number) => {
          return (
            <li key={index}>
              <Link
                to={`/${item}`}
                className={styles.buttons}
                activeClassName="text-secondary">
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
  container: "inline-block justify-between items-center  px-4 py-2 rounded-full relative",
  burgerButton: "md:hidden block text-white focus:outline-none",
  buttonsWrapper: "flex flex-col md:flex-row justify-evenly items-center w-full md:w-auto",
  buttons: "text-white px-8 py-2 hover:underline hover:text-secondary",
  menuOpen: "block md:flex",
  menuClosed: "hidden md:flex",
};
