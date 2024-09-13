import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { graphql, navigate } from "gatsby";
import LatinClubLayout from "./latinClubLayout";
import { CompanyData, DrinksMenu } from "../interfaces/interfaces";
import drinksData from "../data/drinks.json";
import companyData from "../data/data.json";
import { useLocation } from "@reach/router";
import drinkImages from "../images/drinks/index";
import { useTranslation } from "gatsby-plugin-react-i18next";
import MainLogo from "../components/mainLogo";
import { FaWindowClose } from "react-icons/fa";
import favicon from "../images/icon.png";
import images from "../images";
import ClubNavigation from "../components/clubNav";
import data from "../data/data.json";

const info: CompanyData = data[0];

const DrinkMenuPage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedDrink, setSelectedDrink] = useState<null | {
    name: string;
    image: string;
    price: string;
    subtitle?: string;
  }>(null);
  const [activeTab, setActiveTab] = useState<string>("cocktailsSignature");
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [shouldShowCollapseButton, setShouldShowCollapseButton] =
    useState(false);
  const drinkMenuRef = useRef<HTMLDivElement>(null);

  const companyInfo: CompanyData = companyData[0];
  const drinksMenu: DrinksMenu = drinksData as unknown as DrinksMenu;
  const location = useLocation();

  const handleOpenModal = (drinkItem: {
    name: string;
    image: string;
    price: string;
    subtitle?: string;
  }) => {
    setSelectedDrink(drinkItem);
    navigate(`?drinks=${drinkItem.image}`);
  };

  const handleCloseModal = () => {
    setSelectedDrink(null);
    navigate(`?`);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const drinkName = params.get("drinks");
    if (drinkName) {
      const allDishes = [
        ...drinksMenu.cocktailsSignature,
        ...drinksMenu.houseCocktails,
        ...drinksMenu.classicCocktails,
        ...drinksMenu.shots,
        ...drinksMenu.houseShots,
        ...drinksMenu.bottles,
        ...drinksMenu.wineBeer,
        ...drinksMenu.mocktails,
        ...drinksMenu.non_alcoholic,
      ];
      const drinkItem = allDishes.find((item) => item.image === drinkName);
      if (drinkItem) {
        handleOpenModal(drinkItem);
      }
    }
  }, [location.search]);

  useEffect(() => {
    const checkHeight = () => {
      if (drinkMenuRef.current) {
        setShouldShowCollapseButton(drinkMenuRef.current.clientHeight > 550);
      }
    };
    checkHeight();
  }, [activeTab]);

  const getImageSrc = (imageName: string): string => {
    const imageKey = imageName as keyof typeof drinkImages;
    const imageSrc = drinkImages[imageKey];
    return imageSrc || drinkImages["no_image"];
  };

  const renderDrinkItems = (
    drinkItems: (typeof drinksMenu)["cocktailsSignature"]
  ) => {
    return drinkItems.map((item, index) => (
      <div className="relative" key={index}>
        <div className="absolute bottom-[2px] z-10 left-0 last: w-[160px] h-[260px] block box-shadow-latinClub"></div>
        <div
          className={`${styles.productTile} relative z-20`}
          onClick={() => handleOpenModal(item)}
        >
          <div>
            <img src={getImageSrc(item.image)} alt={item.name} />
          </div>
          <div className={styles.productTileInfoWrapper}>
            <h3 className={styles.productTileTitle}>{item.name}</h3>
            {item.subtitle && (
              <span className="text-white text-xs leading-3">
                {t(`drinks.subtitle.${item.image}`)}
              </span>
            )}
            <p className={styles.productTilePrice}>{item.price}</p>
          </div>
          <div className={styles.productTileShowMore}>
            {t("general.see_more")}
          </div>
        </div>
      </div>
    ));
  };
  const renderDrinkList = (drinkItems: (typeof drinksMenu)["shots"]) => {
    return drinkItems.map((item, index) => (
      <div className="w-full" key={index}>
        <div className="flex flex-row w-2/5 text-white mx-auto mt-1">
          <div className="flex flex-col justify-between w-full">
            <div className="flex font-bold">{item.name}</div>
            <p
              className="flex"
              dangerouslySetInnerHTML={{
                __html: t(`drinks.${item.image}`) || "",
              }}
            />
          </div>
          <p className="flex self-center w-16 justify-end text-latinBlue font-bold">
            {item.price}
          </p>
        </div>
        <div className="mx-auto w-2/5 h-[1px] bg-latinBlue opacity-25"></div>
      </div>
    ));
  };
  return (
    <div
      className="flex flex-col w-full"
      style={{
        backgroundImage: `url(${images.BackgroundClubImage})`,
        minHeight: "100vh",
        backgroundSize: "cover"
      }}
    >
      <LatinClubLayout data={companyInfo}>
        <Helmet>
          <title>
            {t("productMenu.dishes_title")} - {companyInfo.name}
          </title>
          <link rel="icon" href={favicon} />
        </Helmet>

        <section>
          <div className={styles.tabsWrapper}>
            <button
              className={`${styles.tabButton} ${activeTab === "cocktailsSignature" ? "font-bold underline text-shadow-club" : ""}`}
              onClick={() => setActiveTab("cocktailsSignature")}
            >
              {t("productMenu.cocktailsSignature")}
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === "houseCocktails" ? "font-bold underline text-shadow-club" : ""}`}
              onClick={() => setActiveTab("houseCocktails")}
            >
              {t("productMenu.houseCocktails")}
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === "classicCocktails" ? "font-bold underline text-shadow-club" : ""}`}
              onClick={() => setActiveTab("classicCocktails")}
            >
              {t("productMenu.classicCocktails")}
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === "shots" ? "font-bold underline text-shadow-club" : ""}`}
              onClick={() => setActiveTab("shots")}
            >
              {t("productMenu.shots")}
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === "houseShots" ? "font-bold underline text-shadow-club" : ""}`}
              onClick={() => setActiveTab("houseShots")}
            >
              {t("productMenu.houseShots")}
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === "bottles" ? "font-bold underline text-shadow-club" : ""}`}
              onClick={() => setActiveTab("bottles")}
            >
              {t("productMenu.bottles")}
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === "wineBeer" ? "font-bold underline text-shadow-club" : ""}`}
              onClick={() => setActiveTab("wineBeer")}
            >
              {t("productMenu.wineBeer")}
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === "mocktails" ? "font-bold underline text-shadow-club" : ""}`}
              onClick={() => setActiveTab("mocktails")}
            >
              {t("productMenu.mocktails")}
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === "non_alcoholic" ? "font-bold underline text-shadow-club" : ""}`}
              onClick={() => setActiveTab("non_alcoholic")}
            >
              {t("productMenu.non_alcoholic")}
            </button>
          </div>

          <div
            ref={drinkMenuRef}
            className={`drinks-menu flex flex-wrap gap-10 max-w-[1200px] mx-auto justify-center ${
              isCollapsed && shouldShowCollapseButton
                ? "max-h-[550px] overflow-hidden"
                : "min-h-[545px]"
            }`}
          >
            {activeTab === "cocktailsSignature" &&
              renderDrinkItems(drinksMenu.cocktailsSignature)}
            {activeTab === "houseCocktails" &&
              renderDrinkItems(drinksMenu.houseCocktails)}
            {activeTab === "classicCocktails" &&
              renderDrinkItems(drinksMenu.classicCocktails)}
            {activeTab === "shots" && (
              <div className="bg-latinFucsia/[0.15] w-full flex flex-col overflow-hidden">
                <div className="relative w-full h-1 bg-latinBlue opacity-25">
                  <img
                    className="absolute w-48 rotate-[30deg] -left-12"
                    src={images.cocktail_5}
                    alt=""
                  />
                  <img
                    className="absolute w-48 rotate-[-10deg] -right-12"
                    src={images.planta_3}
                    alt=""
                  />
                  <img
                    className="absolute opacity-75 w-36 -right-12"
                    src={images.limon_2}
                    alt=""
                  />
                </div>
                {renderDrinkList(drinksMenu.shots)}
              </div>
            )}

            {activeTab === "houseShots" && (
              <div className="bg-latinBlue/[0.25] w-full flex flex-col overflow-hidden">
                <div className="relative w-full h-1 bg-latinFucsia opacity-25">
                  <img
                    className="absolute w-48 rotate-[30deg] -left-12"
                    src={images.cocktail_4}
                    alt=""
                  />
                  <img
                    className="absolute w-48 rotate-[-10deg] -right-12"
                    src={images.planta_2}
                    alt=""
                  />
                  <img
                    className="absolute w-36 top-8 -right-12"
                    src={images.mango}
                    alt=""
                  />
                </div>
                {renderDrinkList(drinksMenu.houseShots)}
              </div>
            )}

            {activeTab === "bottles" && (
              <div className="bg-latinBrown/[0.45] w-full flex flex-col overflow-hidden">
                <div className="relative w-full h-1 bg-latinGreen opacity-25">
                  <img
                    className="absolute w-48 rotate-[30deg] -left-12"
                    src={images.bottles}
                    alt=""
                  />
                  <img
                    className="absolute w-32 rotate-[-10deg] -right-12"
                    src={images.planta_4}
                    alt=""
                  />
                  <img
                    className="absolute w-64 -top-6 -right-12"
                    src={images.maracuya_2}
                    alt=""
                  />
                </div>
                {renderDrinkList(drinksMenu.bottles)}
              </div>
            )}

            {activeTab === "wineBeer" && (
              <div className="bg-latinGreen/[0.15] w-full flex flex-col overflow-hidden">
                <div className="relative w-full h-1 bg-latinBlue opacity-25">
                  <img
                    className="absolute w-48 -left-12"
                    src={images.wine}
                    alt=""
                  />
                  <img
                    className="absolute w-64 -right-12"
                    src={images.beer}
                    alt=""
                  />
                </div>
                {renderDrinkList(drinksMenu.wineBeer)}
              </div>
            )}

            {activeTab === "mocktails" && (
              <div className="bg-latinClub/[0.45] w-full flex flex-col overflow-hidden">
                <div className="relative w-full h-1 bg-latinFucsia opacity-25">
                  <img
                    className="absolute w-48 rotate-[30deg] -left-12"
                    src={images.flower_1}
                    alt=""
                  />
                  <img
                    className="absolute w-48 right-4"
                    src={images.lemonade}
                    alt=""
                  />
                </div>
                <ul className="lex flex-row w-2/5 text-white mx-auto mt-1 list-disc my-4">
                  <h2 className="font-bold text-lg">Lemonade Selection</h2>
                  <li>
                    <b>Classic Lemonade:</b> Timeless and zesty.
                  </li>
                  <li>
                    <b>Cucumber Lemonade:</b> Crisp with a cool cucumber twist.
                  </li>
                  <li>
                    <b>Coco Lemonade:</b> Tropical fusion of coconut and lemon.
                  </li>
                  <li>
                    <b>Berry Lemonade:</b> Bursting with mixed berry flavors.
                  </li>
                  <li>
                    <b>Mango Lemonade:</b> Sweet, ripe mango in every sip.
                  </li>
                  <li>
                    <b>Passion Fruit Lemonade:</b> An exotic and tangy delight.
                  </li>
                  <li>
                    <b>Strawberry Lemonade:</b> Sweet strawberries meet zesty
                    lemon.
                  </li>
                </ul>

                {renderDrinkList(drinksMenu.mocktails)}
              </div>
            )}

            {activeTab === "non_alcoholic" && (
              <div className="bg-latinFucsia/[0.15] w-full flex flex-col overflow-hidden">
                <div className="relative w-full h-1 bg-latinGreen opacity-25">
                  <img
                    className="absolute w-48 -left-12"
                    src={images.coffee}
                    alt=""
                  />
                  <img
                    className="absolute w-64 -right-12"
                    src={images.juice}
                    alt=""
                  />
                </div>
                {renderDrinkList(drinksMenu.non_alcoholic)}
              </div>
            )}
          </div>

          {shouldShowCollapseButton && (
            <div className="text-center my-4">
              <button
                className="text-latinFucsia underline"
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                {isCollapsed ? t("general.see_more") : t("general.see_less")}
              </button>
            </div>
          )}

          <div className="flex justify-center my-12">
            <ClubNavigation data={info} />
          </div>
        </section>

        {selectedDrink && (
          <div
            className="modal w-full h-full fixed z-50 top-0 bg-black/80 text-white"
            onClick={handleCloseModal}
          >
            <div className="modal-content w-[80%] max-w-[75rem] mx-auto bg-latinFucsia/[.15] mt-40 p-12">
              <article className="flex justify-between">
                <div className="flex items-start">
                  <div
                    className="flex text-latinFucsia w-8 cursor-pointer"
                    onClick={handleCloseModal}
                  >
                    <FaWindowClose className="w-full h-full " />
                  </div>
                  <div className="ml-16 w-36">
                    <MainLogo fillColour={"#fff"} />
                  </div>
                </div>
                <div className="section">
                  <div className="text-2xl font-thin">
                    {t(`productMenu.${activeTab}`)}
                  </div>
                  <div className="text-latinBlue text-6xl text-center">
                    {selectedDrink.price}
                  </div>
                </div>
              </article>

              <article className="flex flex-row">
                <img
                  className="w-[28rem]"
                  src={getImageSrc(selectedDrink.image)}
                  alt={selectedDrink.name}
                />
                <div className="flex flex-col self-center p-8">
                  <div className="w-full text-4xl font-bold uppercase">
                    {selectedDrink.name}
                  </div>
                  <p
                    className="py-4"
                    dangerouslySetInnerHTML={{
                      __html: t(`drinks.${selectedDrink.image}`) || "",
                    }}
                  />
                  {}
                </div>
              </article>
            </div>
          </div>
        )}
      </LatinClubLayout>
    </div>
  );
};

export default DrinkMenuPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

const styles = {
  tabButton: "tab-button hover:underline",
  productTile: "flex flex-col w-[160px] h-[260px] bg-latinFucsia/[.15] p-4",
  productTileInfoWrapper: "flex flex-col grow pt-4",
  productTileTitle: "text-white font-extrabold text-md leading-[1rem]",
  productTilePrice:
    "text-latinBlue self-end text-2xl font-extrabold absolute bottom-6",
  productTileShowMore:
    "text-latinFucsia text-xs text-center font-extralight w-full absolute bottom-2 left-0",
  mainTitle: "text-primary text-6xl text-center tracking-wide m-0 p-0",
  tabsWrapper:
    "tabs text-white flex justify-around max-w-[1200px] mx-auto my-8 flex-col sm:flex-row",
  after:
    "after:'' after:w-[2rem] after:h-[3.25rem] after:bg-primary after:block after:absolute after:right-[-1.8rem] after:top-[23.85rem] after:z-50",
};

