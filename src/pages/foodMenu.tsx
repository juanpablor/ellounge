import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { graphql, navigate } from "gatsby";
import MenuLayout from "./foodLayout";
import { CompanyData, FoodMenu } from "../interfaces/interfaces";
import foodData from "../data/food.json";
import companyData from "../data/data.json";
import { useLocation } from "@reach/router";
import foodImages from "../images/food/index";
import { useTranslation } from "gatsby-plugin-react-i18next";
import MainLogo from "../components/mainLogo";
import { FaWindowClose } from "react-icons/fa";
import favicon from "../images/icon.png";

const FoodMenuPage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedFood, setSelectedFood] = useState<null | {
    name: string;
    image: string;
    price: string;
  }>(null);
  const [activeTab, setActiveTab] = useState<string>("entrees");
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [shouldShowCollapseButton, setShouldShowCollapseButton] =
    useState(false);
  const foodMenuRef = useRef<HTMLDivElement>(null);

  const companyInfo: CompanyData = companyData[0];
  const foodMenu: FoodMenu = foodData as FoodMenu;
  const location = useLocation();

  const handleOpenModal = (foodItem: {
    name: string;
    image: string;
    price: string;
  }) => {
    setSelectedFood(foodItem);
    navigate(`?food=${foodItem.image}`);
  };

  const handleCloseModal = () => {
    setSelectedFood(null);
    navigate(`?`);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const foodName = params.get("food");
    if (foodName) {
      const allDishes = [
        ...foodMenu.entrees,
        ...foodMenu.mainDishes,
        ...foodMenu.extras,
        ...foodMenu.sideDishes,
        ...foodMenu.desserts,
      ];
      const foodItem = allDishes.find((item) => item.image === foodName);
      if (foodItem) {
        handleOpenModal(foodItem);
      }
    }
  }, [location.search]);

  useEffect(() => {
    const checkHeight = () => {
      if (foodMenuRef.current) {
        setShouldShowCollapseButton(foodMenuRef.current.clientHeight > 500);
      }
    };
    checkHeight();
  }, [activeTab]);



  const getImageSrc = (imageName: string): string => {
    const imageKey = imageName as keyof typeof foodImages;
    const imageSrc = foodImages[imageKey];
    return imageSrc || foodImages["no_image"];
  };

  const renderFoodItems = (foodItems: (typeof foodMenu)["entrees"]) => {
    return foodItems.map((item, index) => (
      <div
        className={styles.productTile}
        key={index}
        onClick={() => handleOpenModal(item)}
      >
        <div>
          <img src={getImageSrc(item.image)} alt={item.name} />
        </div>
        <div className={styles.productTileInfoWrapper}>
          <h3 className={styles.productTileTitle}>{item.name}</h3>
        </div>
        <div className={styles.productTileShowMore}>
          <p className={styles.productTilePrice}>{item.price}</p>
          {t("general.see_more")}
        </div>
      </div>
    ));
  };

  return (
    <MenuLayout data={companyInfo}>

      <Helmet>
        <title>{t("productMenu.dishes_title")} - {companyInfo.name}</title>
        <link rel="icon" href={favicon} />
      </Helmet>

      <section>
        <div className={styles.tabsWrapper}>
          <button
            className={`${styles.tabButton} ${activeTab === "entrees" ? "text-terciary bg-secondary border-terciary border-[1px]" : ""}`}
            onClick={() => setActiveTab("entrees")}
          >
            {t("productMenu.entrees")}
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === "mainDishes" ? "text-terciary bg-secondary border-terciary border-[1px]" : ""}`}
            onClick={() => setActiveTab("mainDishes")}
          >
            {t("productMenu.mainDishes")}
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === "sideDishes" ? "text-terciary bg-secondary border-terciary border-[1px]" : ""}`}
            onClick={() => setActiveTab("sideDishes")}
          >
            {t("productMenu.sideDishes")}
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === "extras" ? "text-terciary bg-secondary border-terciary border-[1px]" : ""}`}
            onClick={() => setActiveTab("extras")}
          >
            {t("productMenu.extras")}
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === "desserts" ? "text-terciary bg-secondary border-terciary border-[1px]" : ""}`}
            onClick={() => setActiveTab("desserts")}
          >
            {t("productMenu.desserts")}
          </button>
        </div>

        <div
          ref={foodMenuRef}
          className={`food-menu flex flex-wrap gap-5 max-w-[1200px] mx-auto justify-center ${
            isCollapsed && shouldShowCollapseButton
              ? "max-h-[550px] overflow-hidden"
              : "min-h-[545px]"
          }`}
        >
          {activeTab === "entrees" && renderFoodItems(foodMenu.entrees)}
          {activeTab === "mainDishes" && renderFoodItems(foodMenu.mainDishes)}
          {activeTab === "sideDishes" && renderFoodItems(foodMenu.sideDishes)}
          {activeTab === "extras" && renderFoodItems(foodMenu.extras)}
          {activeTab === "desserts" && renderFoodItems(foodMenu.desserts)}
        </div>

        {shouldShowCollapseButton && (
          <div className="text-center my-4">
            <button
              className="text-terciary underline"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              {isCollapsed ? t("general.see_more") : t("general.see_less")}
            </button>
          </div>
        )}
      </section>

      {selectedFood && (
        <div
          className="modal w-full h-full fixed z-[80] top-0 bg-black/80 text-white overflow-y-auto"
          onClick={handleCloseModal}
        >
          <div className="modal-content w-[90%] sm:w-[80%] max-w-[75rem] mx-auto bg-secondary/75 mt-6 sm:mt-40 p-2 sm:p-12">
            <article className="flex flex-col sm:flex-row justify-between">
              <div className="flex items-start w-full sm:w-auto">
                <div
                  className="flex text-terciary w-8 cursor-pointer"
                  onClick={handleCloseModal}
                >
                  <FaWindowClose className="w-full h-full " />
                </div>
                <div className="ml-16 w-24 sm:w-36">
                  <MainLogo fillColour={"#fff"} />
                </div>
              </div>
              <div className="section w-full sm:w-auto">
                <div className="text-2xl font-thin text-center bg-terciary sm:bg-transparent max-w-max mx-auto px-8 py-1 rounded mt-4">
                  {t(`productMenu.${activeTab}`)}
                </div>
                <div className="text-terciary text-sm sm:text-6xl text-center hidden sm:flex">
                  {selectedFood.price}
                </div>
              </div>
            </article>

            <article className="flex flex-col sm:flex-row mt-4 sm:mt-0">
              <img
                className="w-full sm:w-[28rem]"
                src={getImageSrc(selectedFood.image)}
                alt={selectedFood.name}
              />

              <div className="flex flex-col self-center p-2 sm:p-8">
                <div className="w-full text-2xl sm:text-4xl font-bold uppercase flex justify-between">
                  {selectedFood.name}
                  <div className="text-terciary text-2xl sm:text-6xl flex sm:hidden self-center">
                    {selectedFood.price}
                  </div>

                </div>
                <p className="py-4">{t(`food.${selectedFood.image}`)}</p>
              </div>
            </article>
          </div>
        </div>
      )}
    </MenuLayout>
  );
};

export default FoodMenuPage;

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
  starringAreaWrapper: "flex mt-8 flex-row gap-6 justify-center text-white ",
  starringItem: "relative w-96 border-dashed border-white border text-center",
  srattingTitle:
    "bg-primary text-secondary text-lg flex justify-center p-3 font-bold",
  tabButton: "hover:text-terciary hover:underline py-2 sm:py-0 text-xl underline underline-offset-4 sm:underline-offset-8 bg-primary sm:bg-transparent my-1 px-6 max-w-max sm:max-w-none rounded mx-auto whitespace-nowrap",
  productTile: "flex flex-col w-[160px] h-[260px] bg-primary/35 box-shadow p-4 relative z-20",
  productTileInfoWrapper: "flex flex-row grow pt-4",
  productTileTitle:
    "text-white uppercase font-extrabold text-md leading-[1rem] h-[48px] text-ellipsis overflow-hidden",
  productTilePrice: "text-terciary self-end text-2xl font-extrabold flex justify-end leading-none",
  productTileShowMore: "text-white text-xs text-center font-extralight",
  mainTitle: "text-primary text-6xl text-center tracking-wide m-0 p-0",
  tabsWrapper: "text-white flex flex-col sm:flex-row justify-center px-6 max-w-[750px] mx-auto my-2 sm:my-8",
  after:
    "after:'' after:w-[2rem] after:h-[3.25rem] after:bg-primary after:block after:absolute after:right-[-1.8rem] after:top-[23.85rem] after:z-50",
};
