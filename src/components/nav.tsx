import React, { useState } from "react";
import { Link, useI18next, Trans, useTranslation } from "gatsby-plugin-react-i18next";
import { RiInstagramLine } from "react-icons/ri";
import { BsFacebook } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi"; // Iconos para el menú de burger

interface NavProps {
  data?: {
    menu: string[];
    companyDetails: { instagram: string; facebook: string };
  };
}

const Navigation: React.FC<NavProps> = ({ data }) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar la apertura del menú

  if (!data || !data.menu || !data.companyDetails) {
    return null;
  }

  const { instagram, facebook } = data.companyDetails;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna entre abrir y cerrar el menú
  };

  return (
    <nav className={styles.container}>
      {/* Botón de burger visible solo en pantallas pequeñas */}
      <button onClick={toggleMenu} className={styles.burgerButton}>
        {isMenuOpen ? <FiX className="text-white" size={24} /> : <FiMenu className="text-white" size={24} />}
      </button>

      {/* Menú responsive */}
      <ul className={`${styles.buttonsWrapper} ${isMenuOpen ? styles.menuOpen : styles.menuClosed}`}>
        <li>
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <RiInstagramLine className="text-white" />
          </a>
        </li>
        {data.menu.map((item: string, index: number) => {
          const linkTo = item === "El_Lounge" ? "/" : `/${item}`;

          return (
            <li key={index}>
              <Link
                to={linkTo}
                className={styles.buttons}
                activeClassName="text-secondary" placeholder={undefined}              >
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
  container: "flex flex-row justify-between items-center bg-primary px-4 py-2 rounded-full relative",
  burgerButton: "md:hidden block text-white focus:outline-none", // Visible solo en móvil
  buttonsWrapper: "flex flex-col md:flex-row justify-evenly items-center w-full md:w-auto", // Responsive
  buttons: "text-white px-8 py-2 hover:underline hover:text-secondary",
  menuOpen: "block md:flex", // Abierto en móviles o siempre en desktop
  menuClosed: "hidden md:flex", // Cerrado en móviles pero visible en desktop
};
