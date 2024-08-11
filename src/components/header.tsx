import React from "react";
import { Link } from "gatsby";
import Navigation from "./nav";
import logo from "../images/logo.png";

interface HeaderProps {
  data?: any;
}

const Header: React.FC<HeaderProps> = ({data}) => {
  return (
    <header className={styes.container}>
      <Link to="/" className="max-w-36">
        <img src={logo} />
      </Link>
      <Navigation data={data} />
    </header>
  );
};

export default Header;

const styes = {
  container: 'flex flex-row p-4 justify-between'
}