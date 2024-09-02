import React, {ReactNode} from "react";
import Header from "../components/header";
import Navigation from "../components/nav";
import { CompanyData } from "../interfaces/interfaces";

interface MenuLayoutProps {
  children: ReactNode;
  data?: CompanyData;
}

const MenuLayout: React.FC<MenuLayoutProps> = ({ children, data }) => {
  return (
    <>
    <div className="flex flex-col w-full h-screen bg-secondary">
      <Header data={data} />
      <main>{children}</main>
      <div className="flex justify-center">

        <Navigation data={data} />
      </div>
    </div>
    </>
  );
};

export default MenuLayout;
