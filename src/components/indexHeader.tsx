import React from "react";
import LanguageSelector from "./languageSelector";
import { CompanyData } from "../interfaces/interfaces";

interface HeaderProps {
  data?: CompanyData;
}

const Header: React.FC<HeaderProps> = ({data}) => {
  return (
    <header className={styes.container}>
      <LanguageSelector  clubLayout={false} data={data} />
    </header>
  );
};

export default Header;

const styes = {
  container: 'flex flex-row p-4 justify-end'
}