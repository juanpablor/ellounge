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
  const logo = (HiddenClass: string) => {
    return (
    <Link to="/" className={`w-full ${HiddenClass} ${logoPosition || ""}`}>
      <MainLogo fillColour="#fff" />
    </Link>
    )
  }
  return (
    <>
    <header className={styles.container}>
      {logo("hidden sm:flex")}
      <div className="">
        <LanguageSelector clubLayout={false} data={data} />
        <div className="flex sm:hidden absolute right-4 top-4">
          <Navigation data={data} />
        </div>
      </div>
    </header>
      {logo("flex sm:hidden max-w-40")}
    </>
  );
};

export default Header;

const styles = {
  container: "flex flex-row p-4 justify-center sm:justify-end",
};
