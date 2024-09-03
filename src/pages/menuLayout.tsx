import React, { ReactNode } from "react";
import Header from "../components/header";
import Navigation from "../components/nav";
import { CompanyData } from "../interfaces/interfaces";
import images from "../images/index";

interface MenuLayoutProps {
  children: ReactNode;
  data?: CompanyData;
}

const MenuLayout: React.FC<MenuLayoutProps> = ({ children, data }) => {
  return (
    <>
      <div className={styles.containerWrapper}>
        <div
          className="relative bg-contain bg-center overflow-hidden"
          style={{
            backgroundImage: `url(${images.BackgroundImage})`,
          }}
        >
          <Header logoPosition={styles.logoPosition} data={data} />

          <div className="flex justify-center mb-20">
            <Navigation data={data} />
          </div>

          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default MenuLayout;

const styles = {
  containerWrapper: "flex flex-col w-full bg-secondary",
  logoPosition: "mx-auto",
};
