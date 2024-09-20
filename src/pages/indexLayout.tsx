import React, { useState, useEffect } from "react";
import Indexheader from "../components/indexHeader";
import Footer from "../components/footer";
import Navigation from "../components/nav";
import images from "../images/index";
import { useTranslation } from "gatsby-plugin-react-i18next";
import MainLogo from "../components/mainLogo";
import { IndexLayoutProps } from "../interfaces/interfaces";
import { HiArrowLongRight } from "react-icons/hi2";

const indexLayout: React.FC<IndexLayoutProps> = ({ data }) => {
  const { t } = useTranslation();
  const [href, setHref] = useState("/drinksMenu/");
  useEffect(() => {
    const currentPath = window.location.pathname;
    const lang = currentPath.split("/")[1];
    if (lang === "fr" || lang === "es" || lang === "en") {
      setHref(`/${lang}/drinksMenu/`);
    }
  }, []);
  return (
    <>
      <div className={styles.containerWrapper}>
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
        <div
          className="relative bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: `url(${images.BackgroundImage})`,
          }}
        >
          <div className="absolute -mt-10 -ml-10 w-56">
            <img
              src={images.bellpepper}
              alt=""
              className="absolute -left-4 -top-4"
            />
            <img
              src={images.planta_2}
              alt=""
              className="absolute left-[8rem] top-[-2rem]"
            />
            <img
              src={images.planta_2}
              alt=""
              className="absolute left-[-3rem] top-[4rem]"
            />
            <img
              src={images.planta_6}
              alt=""
              className="absolute left-[-6rem] top-[10rem] rotate-45"
            />
          </div>
          <Indexheader data={data} />

          <div className="flex flex-row justify-center">
            <div className="">
              <img src={images.cocktail} alt="" className="h-80" />
            </div>
            <div className="h-36">
              <MainLogo fillColour="#fff" />
              <img src={images.plate} alt="" className="h-56 -mt-10 -ml-10" />
            </div>
          </div>

          <div className="flex justify-center my-20">
            <Navigation data={data} />
          </div>

          <div className="absolute inline-block h-48 w-96 bottom-[-2rem]">
            <img
              src={images.maracuya}
              alt=""
              className="absolute -left-4 -top-4"
            />
            <img
              src={images.cherries}
              alt=""
              className="absolute -left-4 -top-4"
            />
          </div>

          <div className="absolute right-[-4rem] bottom-[8rem] w-[16rem] h-[4rem]">
            <img
              src={images.mango}
              alt=""
              className="absolute -left-4 -top-4"
            />
          </div>
        </div>

        <div className="relative w-full bg-primary py-10">
          <img src={images.maracuya} alt="" className="mx-auto h-24" />
          <p className="mx-auto w-1/2 text-center text-white">
            {t("content.intro_paragraph")}
          </p>
          <div className="absolute h-48 w-56 bottom-0 left-[-2rem] overflow-hidden">
            <img
              src={images.planta_4}
              className="absolute w-32 left-[5rem] z-10 rotate-[180deg] bottom-[2rem]"
              alt=""
            />
            <img
              src={images.limon_2}
              className="absolute w-48 z-20 bottom-[-4rem]"
              alt=""
            />
          </div>
          <div className="absolute overflow-hidden h-64 w-48 bottom-[-3rem] right-0">
            <img
              src={images.limon_2}
              className="absolute w-48 z-10 right-[-7rem] bottom-[3rem]"
              alt=""
            />
            <img
              src={images.planta_3}
              className="absolute w-32 right-[-2rem] z-20 bottom-1"
              alt=""
            />
            <img
              src={images.limon_3}
              className="absolute w-36 z-40 right-[-2rem] bottom-[3rem]"
              alt=""
            />
            <img
              src={images.planta_4}
              className="absolute w-32 right-[-4rem] bottom-[-1rem] z-30 rotate-[10deg]"
              alt=""
            />
          </div>
        </div>

        <div className="relative bg-secondary py-10">
          <div className="absolute flex flex-col left-[-2rem] top-[-3rem] z-20">
            <img
              src={images.planta_1}
              className="w-48 rotate-[180deg] -ml-4 mt-4"
              alt=""
            />
            <img src={images.planta_5} className="w-24 -mt-12" alt="" />
            <img src={images.cocktail_3} className="w-24 mt-4" alt="" />
          </div>

          <h4 className="text-center text-primary mx-auto w-1/2 font-bold">
            {t("content.index_title_second_block")}
          </h4>
          <p className="text-center text-white mx-auto w-1/2">
            {t("content.content_title_second_block")}
          </p>

          <div className="flex flex-row justify-center gap-5">
            <img src={images.home_1} className="w-48" alt="" />
            <img src={images.home_2} className="w-48" alt="" />
            <img src={images.home_3} className="w-48" alt="" />
          </div>

          <div className="absolute w-28 h-64 right-0 top-12 overflow-hidden">
            <img
              src={images.cocktail_2}
              className="relative w-32 right-[-2rem] top-16"
              alt=""
            />
          </div>
        </div>

        <div className="w-full relative overflow-hidden bg-primary ">
          <div className="absolute top-[-3rem] left-[30%]">
            <img src={images.peach} className="w-32" alt="" />
          </div>
          <Footer data={data} />
          <div className="absolute min-w-[50rem] h-16 z-40 -mt-16">
            <img src={images.cocktail_4} alt="" className="absolute w-28" />
            <img src={images.maracuya_2} alt="" className="absolute right-0 w-36 " />
          </div>
        </div>
      </div>
    </>
  );
};

export default indexLayout;

const styles = {
  containerWrapper: "flex flex-col w-full bg-secondary",
  container: "bg-fixed",
};
