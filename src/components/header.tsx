import React from "react";
import { Link } from "gatsby";
import LanguageSelector from "./languageSelector";
import { CompanyData } from "../interfaces/interfaces";

import MainLogo from "../components/mainLogo";

interface HeaderProps {
  data?: CompanyData;
  logoPosition?: string;
}

const Header: React.FC<HeaderProps> = ({ data, logoPosition }) => {
  return (
    <header className={styles.container}>
      <Link to="/" className={`max-w-36 ${logoPosition || ""}`}>
      <MainLogo fillColour="#fff" />
      </Link>
      <LanguageSelector data={data} />
    </header>
  );
};

export default Header;

const styles = {
  container: "flex flex-row p-4 justify-between",
};
