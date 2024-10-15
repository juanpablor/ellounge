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
          <div className="absolute -inset-0 -mt-4 sm:-mt-10 -ml-16 sm:-ml-10 w-28 sm:w-56">
            <img
              src={images.bellpepper.src}
              alt={images.bellpepper.alt}
              className="absolute left-4 sm:-left-4 top-0 sm:-top-4"
            />
            <img
              src={images.planta_2.src}
              alt={images.planta_2.alt}
              className="absolute -left-4 sm:left-[8rem] top:0 sm:top-[-2rem]"
            />
            <img
              src={images.planta_2.src}
              alt={images.planta_2.alt}
              className="absolute -left-4 sm:left-[-3rem] top-0 sm:top-[4rem]"
            />
            <img
              src={images.planta_6.src}
              alt={images.planta_6.alt}
              className="absolute left-0 sm:left-[-6rem] top-0 sm:top-[10rem] rotate-45"
            />
          </div>
          <Indexheader data={data} />

          <div className="flex flex-row justify-center mt-20 sm:mt-0">
            <div className="">
              <img src={images.cocktail.src} alt={images.cocktail.alt} className="h-52 sm:h-80" />
            </div>
            <div className="h-36">
              <div className="z-20 relative -mt-4">
                <MainLogo fillColour="#fff" />
              </div>
              <img src={images.plate.src} alt={images.plate.alt} className="h-36 sm:h-56 mt-0 sm:-mt-4 -ml-10" />
            </div>
          </div>

          <div className="hidden sm:flex justify-center my-20">
            <Navigation data={data} />
          </div>

          <div className="relative sm:absolute inline-block h-48 w-32 sm:w-96 -bottom-36 sm:bottom-[-2rem]">
            <img
              src={images.maracuya.src}
              alt={images.maracuya.alt}
              className="absolute -left-4 -top-4"
            />
            <img
              src={images.cherries.src}
              alt={images.cherries.alt}
              className="absolute -left-4 -top-4"
            />
          </div>

          <div className="absolute -right-16 sm:right-[-4rem] bottom-4 sm:bottom-[8rem] w-32 sm:w-[16rem] h-[4rem]">
            <img
              src={images.mango.src}
              alt={images.mango.alt}
              className="absolute -left-4 -top-4"
            />
          </div>
        </div>

        <div className="relative w-full bg-primary py-10">
          <img src={images.maracuya.src} alt={images.maracuya.alt} className="mx-auto h-12 sm:h-24 absolute sm:relative -top-8 sm:top-0 left-[40%] sm:left-0" />
          <p className="mx-auto w-full sm:w-1/2 text-center text-white text-sm sm:text-base px-4 sm:px-0">
            {t("content.intro_paragraph")}
          </p>
          <div className="absolute h-24 sm:h-48 w-28 sm:w-56 bottom-0 left-[-2rem] overflow-hidden">
            <img
              src={images.planta_4.src}
              className="absolute w-32 left-[5rem] z-10 rotate-[180deg] bottom-[2rem]"
              alt={images.planta_4.alt}
            />
            <img
              src={images.limon_2.src}
              className="absolute w-48 z-20 bottom-[-4rem]"
              alt={images.limon_2.alt}
            />
          </div>
          <div className="absolute overflow-hidden h-64 w-24 sm:w-48 bottom-[-6rem] sm:bottom-[-3rem] right-0">
            <img
              src={images.limon_2.src}
              className="absolute w-48 z-10 right-[-7rem] bottom-[3rem]"
              alt={images.limon_2.alt}
            />
            <img
              src={images.planta_3.src}
              className="absolute w-32 right-[-2rem] z-20 bottom-1"
              alt={images.planta_3.alt}
            />
            <img
              src={images.limon_3.src}
              className="absolute w-36 z-40 right-[-2rem] bottom-[3rem]"
              alt={images.limon_3.alt}
            />
            <img
              src={images.planta_4.src}
              className="absolute w-32 right-[-4rem] bottom-[-1rem] z-30 rotate-[10deg]"
              alt={images.planta_4.alt}
            />
          </div>
        </div>

        <div className="relative bg-secondary py-10">
          <div className="absolute flex flex-col left-[-2rem] top-[-3rem] z-20">
            <img
              src={images.planta_1.src}
              className="w-24 sm:w-48 rotate-[180deg] -ml-4 mt-4"
              alt={images.planta_1.alt}
            />
            <img src={images.planta_5.src} className="w-12 sm:w-24 mt-4 sm:-mt-12" alt={images.planta_5.alt} />
            <img src={images.cocktail_3.src} className="w-24 mt-4" alt={images.cocktail_3.alt} />
          </div>

          <h4 className="text-center text-primary px-4 sm:px-0 mx-auto w-full sm:w-1/2 font-bold">
            {t("content.index_title_second_block")}
          </h4>
          <p className="text-center text-white px-4 sm:px-0 mx-auto text-sm sm:text-base w-full sm:w-1/2">
            {t("content.content_title_second_block")}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <img src={images.home_1.src} className="w-48 mx-auto" alt={images.home_1.alt} />
            <img src={images.home_2.src} className="w-48 mx-auto" alt={images.home_2.alt} />
            <img src={images.home_3.src} className="w-48 mx-auto" alt={images.home_3.alt} />
          </div>

          <div className="absolute w-28 h-96 sm:h-64 right-0 top-12 overflow-hidden">
            <img
              src={images.cocktail_2.src}
              className="relative w-32 -right-16 sw:right-[-2rem] top-60 sm:top-16"
              alt={images.cocktail_2.alt}
            />
          </div>
        </div>

        <div className="w-full relative overflow-hidden bg-primary ">
          <div className="absolute top-[-3rem] left-[30%]">
            <img src={images.peach.src} className="w-32" alt={images.peach.alt} />
          </div>
          <Footer data={data} />
          <div className="absolute min-w-[50rem] h-16 z-40 -mt-16">
            <img src={images.maracuya_2.src} alt={images.maracuya_2.alt} className="absolute right-0 w-36 " />
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
