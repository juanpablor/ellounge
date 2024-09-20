import React, { ReactNode, useEffect, useState } from "react";
import Header from "../components/header";
import Navigation from "../components/nav";
import { CompanyData } from "../interfaces/interfaces";
import images from "../images/index";
import { HiArrowLongRight } from "react-icons/hi2";
import { useTranslation } from "react-i18next";


interface FoodLayoutProps {
  children: ReactNode;
  data?: CompanyData;
}

const FoodLayout: React.FC<FoodLayoutProps> = ({ children, data }) => {
  const [href, setHref] = useState("/drinksMenu/");
  const { t } = useTranslation();

  useEffect(() => {
    const currentPath = window.location.pathname;
    const lang = currentPath.split("/")[1];
    if (lang === "fr" || lang === "es" || lang === "en") {
      setHref(`/${lang}/drinksMenu/`);
    }
  }, []);
  return (
    <>
        <a href={href}>
          <div className="fixed top-[50%] z-50 right-0 w-24 h-16 bg-latinFucsia rounded-l-full flex justify-start">
            <div className="w-16 h-16 text-white rounded-full text-center relative flex items-center justify-center">
              <svg className="absolute w-full h-full" viewBox="0 0 100 100">
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                  />
                </defs>
                <text fontSize="8" fill="white">
                  <textPath xlinkHref="#circlePath" startOffset="0">
                    El Lounge &bull; El Lounge &bull; El Lounge &bull; El Lounge
                    &bull; El Lounge &bull;
                  </textPath>
                </text>
              </svg>

              <div className="absolute flex flex-col items-center justify-center">
                <HiArrowLongRight className="mx-auto" />
                <span className="text-xs">{t("general.drinks")}</span>
              </div>
            </div>
          </div>
        </a>    
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
          <div className="w-[20rem] mx-auto">

            <Header logoPosition={styles.logoPosition} data={data} />
          </div>

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

export default FoodLayout;

const styles = {
  containerWrapper: "flex flex-col w-full bg-secondary",
  logoPosition: "mx-auto",
};
