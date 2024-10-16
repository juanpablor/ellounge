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
      const drinkCategories: Array<keyof DrinksMenu> = [
        "cocktailsSignature",
        "houseCocktails",
        "classicCocktails",
        "shots",
        "glass",
        "houseShots",
        "bottles",
        "wineBeer",
        "mocktails",
        "non_alcoholic",
      ];

      const allDrinks = drinkCategories.flatMap(
        (category) => drinksMenu[category]
      );
      const drinkItem = allDrinks.find((item) => item.image === drinkName);

      if (drinkItem) {
        handleOpenModal(drinkItem);
      }
    }
  }, [location.search, drinksMenu]);

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
          </div>
          <div className={styles.productTileShowMore}>
            <p className={styles.productTilePrice}>{item.price}</p>
            {t("general.see_more")}
          </div>
        </div>
      </div>
    ));
  };
  const renderDrinkList = (
    drinkItems: (typeof drinksMenu)["shots"],
    classWidth?: string
  ) => {
    return drinkItems.map((item, index) => (
      <div className="w-full" key={index}>
        <div
          className={`${classWidth ? classWidth : "w-2/5"} flex flex-row text-white mx-auto mt-1`}
        >
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
        <div
          className={`${classWidth ? classWidth : "w-2/5"} " mx-auto h-[1px] bg-latinBlue opacity-25"`}
        ></div>
      </div>
    ));
  };

  const tabs = [
    { key: "cocktailsSignature", label: t("productMenu.cocktailsSignature") },
    { key: "houseCocktails", label: t("productMenu.houseCocktails") },
    { key: "classicCocktails", label: t("productMenu.classicCocktails") },
    { key: "shots", label: t("productMenu.shots") },
    { key: "houseShots", label: t("productMenu.houseShots") },
    { key: "bottles", label: t("productMenu.bottles") },
    { key: "wineBeer", label: t("productMenu.wineBeer") },
    { key: "mocktails", label: t("productMenu.mocktails") },
    { key: "non_alcoholic", label: t("productMenu.non_alcoholic") },
  ];
  return (
    <div
      className="flex flex-col w-full"
      style={{
        backgroundImage: `url(${images.BackgroundClubImage})`,
        minHeight: "100vh",
        backgroundSize: "cover",
      }}
    >
      <LatinClubLayout data={companyInfo}>
        <Helmet>
          <title>
            {t("productMenu.dishes_title")} - {companyInfo.name}
          </title>
          <link rel="icon" href={favicon} />
        </Helmet>

        <section className={selectedDrink ? "relative overflow-y-hidden" : ""}>
          <div className={styles.tabsWrapper}>
            {tabs.map((tab) => (
              <button
                key={tab.key}
                className={`${styles.tabButton} ${activeTab === tab.key ? "font-bold underline text-shadow-blue py-2" : ""}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
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
            {activeTab === "classicCocktails" && (
                <div className="bg-latinFucsia/[0.15] w-full flex flex-col overflow-hidden">
                <div className="relative w-full h-1 bg-latinBlue opacity-25">
                  <img
                    className="absolute w-24 mt-[20%] left-6"
                    src={images.shot.src}
                    alt={images.shot.alt}
                  />
                  <img
                    className="absolute opacity-75 w-36 right-2"
                    src={images.cocktail_5.src}
                    alt={images.cocktail_5.alt}
                  />
                </div>
                <div className="flex justify-center">
                  <div className="block mx-12">
                    <h2 className="text-white text-2xl text-center my-8">
                      {t("productMenu.shots")}
                    </h2>
                    {renderDrinkList(drinksMenu.classicCocktails, "w-full")}
                  </div>
                </div>
              </div>
              )}

            {activeTab === "shots" && (
              <div className="bg-latinFucsia/[0.15] w-full flex flex-col overflow-hidden">
                <div className="relative w-full h-1 bg-latinBlue opacity-25">
                  <img
                    className="absolute w-24 mt-[20%] left-6"
                    src={images.shot.src}
                    alt={images.shot.alt}
                  />
                  <img
                    className="absolute opacity-75 w-36 right-2"
                    src={images.cocktail_5.src}
                    alt={images.cocktail_5.alt}
                  />
                </div>
                <div className="flex flex-col sm:flex-row justify-center">
                  <div className="block mx-12">
                    <h2 className="text-white text-2xl text-center my-8">
                      {t("productMenu.shots")}
                    </h2>
                    {renderDrinkList(drinksMenu.shots, "w-full")}
                  </div>
                  <div className="block mx-12">
                    <h2 className="text-white text-2xl text-center my-8">
                      {t("productMenu.glass")}
                    </h2>
                    {renderDrinkList(drinksMenu.glass, "w-full")}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "houseShots" && (
              <div className="bg-latinBlue/[0.25] w-full flex flex-col overflow-hidden">
                <div className="relative w-full h-1 bg-latinFucsia opacity-25">
                  <img
                    className="absolute w-48 rotate-[30deg] -left-12"
                    src={images.cocktail_4.src}
                    alt={images.cocktail_4.alt}
                  />
                  <img
                    className="absolute w-48 rotate-[-10deg] -right-12"
                    src={images.planta_2.src}
                    alt={images.planta_2.alt}
                  />
                  <img
                    className="absolute w-36 top-8 -right-12"
                    src={images.mango.src}
                    alt={images.mango.alt}
                  />
                </div>
                <div className="mx-12">
                  {renderDrinkList(drinksMenu.houseShots, "w-full")}
                </div>
              </div>
            )}

            {activeTab === "bottles" && (
              <div className="bg-latinBrown/[0.45] w-full flex flex-col overflow-hidden">
                <div className="relative w-full h-1 bg-latinGreen opacity-25">
                  <img
                    className="absolute w-48 rotate-[30deg] -left-12"
                    src={images.bottles.src}
                    alt={images.bottles.alt}
                  />
                  <img
                    className="absolute w-32 rotate-[-10deg] -right-12"
                    src={images.planta_4.src}
                    alt={images.planta_4.alt}
                  />
                  <img
                    className="absolute w-64 -top-6 -right-12"
                    src={images.maracuya_2.src}
                    alt={images.maracuya_2.alt}
                  />
                </div>
                <div className="mx-12">
                  {renderDrinkList(drinksMenu.bottles, "w-full")}
                </div>
              </div>
            )}

            {activeTab === "wineBeer" && (
              <div className="bg-latinGreen/[0.15] w-full flex flex-col overflow-hidden">
                <div className="relative w-full h-1 bg-latinBlue opacity-25">
                  <img
                    className="absolute w-48 -left-12"
                    src={images.wine.src}
                    alt={images.wine.alt}
                  />
                  <img
                    className="absolute w-64 -right-12"
                    src={images.beer.src}
                    alt={images.beer.alt}
                  />
                </div>
                <div className="mx-12">
                  {renderDrinkList(drinksMenu.wineBeer, "w-full")}
                </div>
              </div>
            )}

            {activeTab === "mocktails" && (
              <div className="bg-latinClub/[0.45] w-full flex flex-col overflow-hidden">
                <div className="relative w-full h-1 bg-latinFucsia opacity-25">
                  <img
                    className="absolute w-48 rotate-[30deg] -left-12"
                    src={images.flower_1.src}
                    alt={images.flower_1.alt}
                  />
                  <img
                    className="absolute w-48 right-4"
                    src={images.lemonade.src}
                    alt={images.lemonade.alt}
                  />
                </div>
                <h2 className="text-white mx-auto font-bold text-lg">
                  {t("general.drinksMenuPage.mocktailsTitle")}
                </h2>
                <ul
                  className="lex flex-row text-white mx-12 mt-1 list-disc my-4"
                  dangerouslySetInnerHTML={{
                    __html: t("general.drinksMenuPage.mocktailsNote") || "",
                  }}
                ></ul>
                <div className="mx-12">
                  {renderDrinkList(drinksMenu.mocktails, "w-full")}
                </div>
              </div>
            )}

            {activeTab === "non_alcoholic" && (
              <div className="bg-latinFucsia/[0.15] w-full flex flex-col overflow-hidden">
                <div className="relative w-full h-1 bg-latinGreen opacity-25">
                  <img
                    className="absolute w-48 -left-12"
                    src={images.coffee.src}
                    alt={images.coffee.alt}
                  />
                  <img
                    className="absolute w-64 -right-12"
                    src={images.juice.src}
                    alt={images.juice.alt}
                  />
                </div>
                <div className="mx-12">
                  {renderDrinkList(drinksMenu.non_alcoholic, "w-full")}
                </div>
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

          {
            <div className="hidden sm:flex justify-center my-12">
              <ClubNavigation data={info} />
            </div>
          }
        </section>

        {selectedDrink && (
          <div
            className="modal w-full h-full fixed z-50 top-0 bg-black/90 text-white overflow-y-auto"
            onClick={handleCloseModal}
          >
            <div className="modal-content w-[90%] sm:w-[80%] max-w-[75rem] mx-auto bg-latinFucsia/[.5] my-4 sm:mt-20  p-2 sm:p-12">
              <article className="flex flex-col sm:flex-row justify-between">
                <div className="flex items-start">
                  <div
                    className="flex text-latinFucsia w-8 cursor-pointer"
                    onClick={handleCloseModal}
                  >
                    <FaWindowClose className="w-full h-full " />
                  </div>
                  <div className="ml-16 w-24 sm:w-36">
                    <MainLogo fillColour={"#fff"} />
                  </div>
                </div>
                <div className="section w-full sm:w-auto">
                  <div className="text-2xl font-thin text-center bg-latinFucsia sm:bg-transparent max-w-max mx-auto px-8 py-1 rounded mt-4">
                    {t(`productMenu.${activeTab}`)}
                  </div>
                  <div className="text-latinBlue text-sm sm:text-6xl text-center hidden sm:flex">
                    {selectedDrink.price}
                  </div>
                </div>
              </article>

              <article className="flex flex-col sm:flex-row mt-4 sm:mt-0">
                <img
                  className="w-full sm:w-[28rem]"
                  src={getImageSrc(selectedDrink.image)}
                  alt={selectedDrink.name}
                />
                <div className="flex flex-col self-center p-8">
                  <div className="w-full text-2xl sm:text-4xl font-bold uppercase flex justify-between">
                    {selectedDrink.name}
                    <div className="text-latinBlue text-2xl sm:text-6xl text-center flex sm:hidden">
                      {selectedDrink.price}
                    </div>
                  </div>
                  <p
                    className="pt-4 text-sm"
                    dangerouslySetInnerHTML={{
                      __html: t(`drinks.${selectedDrink.image}`) || "",
                    }}
                  />
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
    "text-latinBlue self-end text-2xl font-extrabold flex justify-end leading-none mr-4",
  productTileShowMore:
    "text-white text-xs text-center font-extralight w-full absolute bottom-2 left-0",
  mainTitle: "text-primary text-6xl text-center tracking-wide m-0 p-0",
  tabsWrapper:
    "tabs text-white flex justify-around max-w-[1200px] mx-auto my-8 flex-col sm:flex-row",
  after:
    "after:'' after:w-[2rem] after:h-[3.25rem] after:bg-primary after:block after:absolute after:right-[-1.8rem] after:top-[23.85rem] after:z-50",
};
