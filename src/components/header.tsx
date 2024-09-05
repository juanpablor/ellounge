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
      <Link to="/" className={`w-full ${logoPosition || ""}`}>
      <MainLogo fillColour="#fff" />
      </Link>
      <div className="absolute top-16 right-32">
        <LanguageSelector data={data} />
      </div>
    </header>
  );
};

export default Header;

const styles = {
  container: "flex flex-row p-4 justify-between",
};
