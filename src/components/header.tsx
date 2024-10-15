import React from "react";
import { Link } from "gatsby";
import LanguageSelector from "./languageSelector";
import { CompanyData } from "../interfaces/interfaces";
import MainLogo from "../components/mainLogo";
import Navigation from "./nav";

interface HeaderProps {
  data?: CompanyData;
  logoPosition?: string;
}

const Header: React.FC<HeaderProps> = ({ data, logoPosition }) => {
  return (
    <header className={styles.container}>
      <Link to="/" className={`w-full ${logoPosition || ""}`}>
        <MainLogo fillColour="#fff" />
      </Link>
      <div className="relative sm:absolute top-2 sm:top-16 right-0 sm:right-32">
        <LanguageSelector clubLayout={false} data={data} />
        <div className="flex sm:hidden absolute right-4">
          <Navigation data={data} />
        </div>
      </div>
    </header>
  );
};

export default Header;

const styles = {
  container: "flex flex-row p-4 justify-between",
};
