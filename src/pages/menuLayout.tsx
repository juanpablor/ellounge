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
          <div className="absolute right-[-6rem] top-[-2rem]">
            <img src={images.planta_3} className="w-56" alt="" />
            <img src={images.planta_4} className="absolute w-32 right-[3rem] top-[12rem] z-30 rotate-[10deg]" alt="" />
          </div>
          <Header logoPosition={styles.logoPosition} data={data} />

          <div className="flex justify-center my-10">
            <Navigation data={data} />
          </div>

          <main>{children}</main>
          <div className="absolute w-48 h-56 bottom-0 overflow-hidden">
            <img className="absolute -bottom-8 w-36 rotate-[60deg]" src={images.planta_5} alt="" />
            <img className="absolute -bottom-4 w-36 -left-10" src={images.cocktail_3} alt="" />
          </div>
          <div className="absolute w-48 h-56 bottom-0 right-0 overflow-hidden">
            <img className="absolute -bottom-12 w-44 -right-12" src={images.limon_3} alt="" />
            <img className="absolute -bottom-12 w-44 -right-20" src={images.cocktail_2} alt="" />
          </div>
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
