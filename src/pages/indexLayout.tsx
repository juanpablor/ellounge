import React, { ReactNode } from "react";
import Indexheader from "../components/indexHeader";
import Footer from "../components/footer";
import Navigation from "../components/nav";
import BackgroundImage from "../images/leaves_background.png";
import logo from "../images/logo_blanco.png"
import cocktail from "../images/cocktail_red.png"
import plate from "../images/plate.png"

interface indexLayoutProps {
  children: ReactNode;
  data?: any;
}

const indexLayout: React.FC<indexLayoutProps> = ({ children, data }) => {
  return (
    <>
      <div className={styles.containerWrapper}>
        <div className="bg-cover bg-center h-screen"
          style={{
            backgroundImage: `url(${BackgroundImage})`,
          }}>
          <Indexheader data={data} />



          <div className="flex flex-row justify-center">
            <div className="">
              <img src={cocktail} alt="" className="h-80"  />
            </div>
            <div>
              <img src={logo} alt="" className="h-48" />
            {/* </div>
            <div> */}
              <img src={plate} alt="" className="h-56 -mt-10 -ml-10"  />
            </div>
          </div>



          <div className="flex justify-center">
            <Navigation data={data} />
          </div>
        </div>
        <Footer data={data} />
      </div>
    </>
  );
};

export default indexLayout;

const styles = {
  containerWrapper: "flex flex-col w-full h-screen bg-secondary",
  container: "bg-fixed"
}
