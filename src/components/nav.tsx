import React, { useState } from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import { Link } from "gatsby"
import { RiInstagramLine } from "react-icons/ri";
import { BsFacebook } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";
import { useLocation } from "@reach/router";

interface NavProps {
  data?: {
    menu: string[];
    companyDetails: { instagram: string; facebook: string };
  };
}

const Navigation: React.FC<NavProps> = ({ data }) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!data || !data.menu || !data.companyDetails) {
    return null;
  }

  const currentPath = pathname.replace(/^\/(es|en|fr)\//, "/").replace(/\/$/, "");

  const { instagram, facebook } = data.companyDetails;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.container}>
      <button onClick={toggleMenu} className={styles.burgerButton}>
        {isMenuOpen ? <FiX className="text-white fixed right-4 z-[70] top-4" size={24} /> : <FiMenu className="text-white" size={24} />}
      </button>

      <ul className={`${styles.buttonsWrapper} ${isMenuOpen ? styles.menuOpen : styles.menuClosed}`}>
        <li>
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <RiInstagramLine className="text-white" />
          </a>
        </li>
        {data.menu.map((item: string, index: number) => {
          const linkTo = item === "home" ? "/" : `/${item}`.replace(/\/$/, "");
          const isActive = currentPath === linkTo;

          return (
            <li key={index} className={styles.buttonsContainer}>
              <Link
                to={linkTo}
                className={`${styles.buttons} ${isActive ? "font-extrabold !text-secondary" : ""}`}
                activeClassName="text-secondary">
                <Trans i18nKey={`menu.${item}`}>
                  {t(`menu.${item}`)}
                </Trans>
              </Link>
            </li>
          );
        })}
        <li>
          <a href={facebook} target="_blank" rel="noopener noreferrer">
            <BsFacebook className="text-white" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

const styles = {
  container: "inline-block justify-between items-center bg-primary px-4 py-2 rounded-none sm:rounded-full relative left-0 sm:left-auto z-50 w-full sm:w-auto",
  burgerButton: "md:hidden block text-white focus:outline-none",
  buttonsWrapper: "flex flex-col md:flex-row justify-evenly items-center w-full md:w-auto fixed sm:relative left-0 bg-primary top-0 py-8 sm:py-0",
  buttonsContainer: "my-4 sm:my-0",
  buttons: "text-white px-8 py-2  hover:underline hover:text-secondary",
  menuOpen: "block md:flex",
  menuClosed: "hidden md:flex"
};

