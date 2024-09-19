import React, { ReactNode, useState, useEffect } from "react";
// import { useMediaQuery } from "react-responsive";
import { CompanyData } from "../interfaces/interfaces";
import LanguageSelector from "../components/languageSelector";
import MainLogo from "../components/mainLogo";
import { RiInstagramLine } from "react-icons/ri";
import { BsFacebook } from "react-icons/bs";
import ClubNavigation from "../components/clubNav";
import data from "../data/data.json";
// import { breakpoints } from "../constants";
import { HiArrowLongLeft } from "react-icons/hi2";

interface LatinClubLayoutProps {
  children: ReactNode;
  data?: CompanyData;
  eventPage?: boolean;
}

const info: CompanyData = data[0];

const LatinClubLayout: React.FC<LatinClubLayoutProps> = ({
  children,
  eventPage = false,
}) => {
  // const isMobile = useMediaQuery({ query: breakpoints.mobile });
  const [href, setHref] = useState("/foodMenu/");

  useEffect(() => {
    const currentPath = window.location.pathname;
    const lang = currentPath.split("/")[1];
    if (lang === "fr" || lang === "es" || lang === "en") {
      setHref(`/${lang}/foodMenu/`);
    }
  }, []);
  return (
    <>
      <div className={styles.containerWrapper}>
        <a href={href}>
          <div className="fixed top-[50%] w-24 h-16 bg-primary rounded-r-full flex justify-end z-20">
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
                <HiArrowLongLeft className="mx-auto" />
                <span className="text-xs">Food</span>
              </div>
            </div>
          </div>
        </a>

        <div className="bg-no-repeat bg-center">
          <div className="flex justify-between">
            <div className="flex flex-row mx-12 gap-4 self-center">
              <a
                href={info.companyDetails.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiInstagramLine className="text-white hover:text-latinFucsia" />
              </a>
              <a
                href={info.companyDetails.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFacebook className="text-white hover:text-latinFucsia" />
              </a>
            </div>

            {eventPage && (
                <div className="flex justify-center my-12">
                  <ClubNavigation data={info} />
                </div>
               )}

            {!eventPage && (
              <div className="w-[10rem]">
                <MainLogo fillColour={"#fff"} />
              </div>
            )}
            <div className="flex justify-end mr-12">
              <LanguageSelector clubLayout={true} data={info} />
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
  containerWrapper: "flex flex-col w-full bg-latinClub/[0.9] pt-8",
  logoPosition: "mx-auto",
};
