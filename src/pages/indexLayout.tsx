import React from "react";
import Indexheader from "../components/indexHeader";
import Footer from "../components/footer";
import Navigation from "../components/nav";
import images from "../images/index";
import { useTranslation } from "gatsby-plugin-react-i18next";
import MainLogo from "../components/mainLogo";
import { IndexLayoutProps } from "../interfaces/interfaces";

const indexLayout: React.FC<IndexLayoutProps> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.containerWrapper}>
        <div className="relative bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: `url(${images.BackgroundImage})`,
          }}>
          <div className="absolute -mt-10 -ml-10 w-56">
            <img src={images.bellpepper} alt="" className="absolute -left-4 -top-4" />
            <img src={images.planta_2} alt="" className="absolute left-[8rem] top-[-2rem]" />
            <img src={images.planta_2} alt="" className="absolute left-[-3rem] top-[4rem]" />
            <img src={images.planta_6} alt="" className="absolute left-[-6rem] top-[10rem] rotate-45" />
          </div>
          <Indexheader data={data} />

          <div className="flex flex-row justify-center">
            <div className="">
              <img src={images.cocktail} alt="" className="h-80"  />
            </div>
            <div>
              <MainLogo fillColour="#fff"/>
              <img src={images.plate} alt="" className="h-56 -mt-10 -ml-10"  />
            </div>
          </div>



          <div className="flex justify-center mb-20">
            <Navigation data={data} />
          </div>

          <div className="absolute inline-block h-48 w-96 bottom-[-2rem]">
            <img src={images.maracuya} alt="" className="absolute -left-4 -top-4" />
            <img src={images.cherries} alt="" className="absolute -left-4 -top-4" />
          </div>

          <div className="absolute right-[-4rem] bottom-[8rem] w-[16rem] h-[4rem]">
            <img src={images.mango} alt="" className="absolute -left-4 -top-4" />
          </div>

        </div>

        <div className="relative w-full bg-secondary py-10">
          <img src={images.maracuya} alt="" className="mx-auto h-24" />
          <p className="mx-auto w-1/2 text-center text-white">{t('content.intro_paragraph')}</p>
          <div className="absolute h-48 w-56 bottom-0 left-[-2rem] overflow-hidden">
            <img src={images.planta_4} className="absolute w-32 left-[5rem] z-10 rotate-[180deg] bottom-[2rem]" alt="" />
            <img src={images.limon_2} className="absolute w-48 z-20 bottom-[-4rem]" alt="" />
          </div>
          <div className="absolute h-48 w-48 bottom-[-3rem] right-0">
            <img src={images.limon_2} className="absolute w-48 z-10 right-[-7rem] bottom-[2rem]" alt="" />
            <img src={images.planta_3} className="absolute w-32 right-[-2rem] z-20" alt="" />
            <img src={images.limon_3} className="absolute w-36 z-40 right-[-2rem] bottom-[2rem]" alt="" />
            <img src={images.planta_4} className="absolute w-32 right-[-4rem] bottom-[-2rem] z-30 rotate-[10deg]" alt="" />
          </div>
        </div>

        <Footer data={data} />
      </div>
    </>
  );
};

export default indexLayout;

const styles = {
  containerWrapper: "flex flex-col w-full bg-secondary",
  container: "bg-fixed"
}
