import React from "react";
import { Link } from "gatsby";
import logo from "../images/logo.svg";

interface FooterProps {
  data?: any;
}

const Footer: React.FC<FooterProps> = ({data}) => {
  return (
    <footer className={styes.container}>
      <Link to="/" className="max-w-32">
        <img src={logo} />
      </Link>
      <ul>
        <li>{data.companyName}</li>
        <li>{data.companyDetails.address}</li>
        <li>{data.companyDetails.city}</li>
        <li>{data.companyDetails.country}</li>
        <li>{data.companyDetails.phone}</li>
        <li>{data.companyDetails.email}</li>
      </ul>
    </footer>
  );
};

export default Footer;

const styes = {
  container: 'flex flex-row p-4 justify-around items-end items-baseline'
}