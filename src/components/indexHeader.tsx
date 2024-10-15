import React from "react";
import LanguageSelector from "./languageSelector";
import { CompanyData } from "../interfaces/interfaces";
import Navigation from "./nav";

interface HeaderProps {
  data?: CompanyData;
}

const Header: React.FC<HeaderProps> = ({data}) => {
  return (
    <header className={styes.container}>
      <LanguageSelector  clubLayout={false} data={data} />
      <div className="flex sm:hidden absolute right-4">
        <Navigation data={data} />
      </div>
    </header>
  );
};

export default Header;

const styes = {
  container: 'flex flex-row p-4 justify-center sm:justify-end'
}