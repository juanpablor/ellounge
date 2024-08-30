import React, { ReactNode } from "react";
import Indexheader from "../components/indexHeader";
import Footer from "../components/footer";
import Navigation from "../components/nav";
import BackgroundImage from "../images/leaves_background.png";
import cocktail from "../images/cocktail_red.png";
import plate from "../images/plate.png";
import bellpepper from "../images/pimenton.png";
import planta_2 from "../images/planta_2.png";
import planta_6 from "../images/planta_6.png";
import maracuya from "../images/maracuya.png";
import cherries from "../images/cerezas.png";
import mango from "../images/mango.png";
import { useTranslation } from "gatsby-plugin-react-i18next";
import MainLogo from "../components/mainLogo";

interface indexLayoutProps {
  children: ReactNode;
  data?: any;
}

const indexLayout: React.FC<indexLayoutProps> = ({ children, data }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.containerWrapper}>
        <div className="relative bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: `url(${BackgroundImage})`,
          }}>
          <div className="absolute -mt-10 -ml-10 w-56">
            <img src={bellpepper} alt="" className="absolute -left-4 -top-4" />
            <img src={planta_2} alt="" className="absolute left-[8rem] top-[-2rem]" />
            <img src={planta_2} alt="" className="absolute left-[-3rem] top-[4rem]" />
            <img src={planta_6} alt="" className="absolute left-[-6rem] top-[10rem] rotate-45" />
          </div>
          <Indexheader data={data} />



          <div className="flex flex-row justify-center">
            <div className="">
              <img src={cocktail} alt="" className="h-80"  />
            </div>
            <div>
              <MainLogo fillColour="#fff"/>
              <img src={plate} alt="" className="h-56 -mt-10 -ml-10"  />
            </div>
          </div>



          <div className="flex justify-center mb-20">
            <Navigation data={data} />
          </div>

          <div className="absolute inline-block h-48 w-96 bottom-[-2rem]">
            <img src={maracuya} alt="" className="absolute -left-4 -top-4" />
            <img src={cherries} alt="" className="absolute -left-4 -top-4" />
          </div>

          <div className="absolute right-[-4rem] bottom-[8rem] w-[16rem] h-[4rem]">
            <img src={mango} alt="" className="absolute -left-4 -top-4" />
          </div>

        </div>

        <div className="w-full bg-secondary">
          <img src={maracuya} alt="" className="mx-auto h-24" />
          <p className="mx-auto w-1/2 text-center text-white">{t('content.intro_paragraph')}</p>
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
