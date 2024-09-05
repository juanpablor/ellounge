import React, { ReactNode } from "react";
import { CompanyData } from "../interfaces/interfaces";
import images from "../images/index";
import LanguageSelector from "../components/languageSelector";
import MainLogo from "../components/mainLogo";
import { RiInstagramLine } from "react-icons/ri";
import { BsFacebook } from "react-icons/bs";

interface LatinClubLayoutProps {
  children: ReactNode;
  data?: CompanyData;
}

const LatinClubLayout: React.FC<LatinClubLayoutProps> = ({
  children,
  data,
}) => {
  return (
    <>
      <div className={styles.containerWrapper} style={{
            backgroundImage: `url(${images.BackgroundClubImage})`,
          }}>
        <div
          className="bg-no-repeat bg-center"
          
        >
          <div className="flex justify-between">
            <div>
              <a href={""} target="_blank" rel="noopener noreferrer">
                <RiInstagramLine className="text-white" />
              </a>
              <a href={""} target="_blank" rel="noopener noreferrer">
                <BsFacebook className="text-white" />
              </a>
            </div>

            <div className="w-[10rem]">
              <MainLogo fillColour={"#fff"} />
            </div>
            <div className="flex justify-end">
              <LanguageSelector clubLayout={true} data={data} />
            </div>
          </div>

          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default LatinClubLayout;

const styles = {
  containerWrapper: "flex flex-col w-full bg-latinClub",
  logoPosition: "mx-auto",
};
