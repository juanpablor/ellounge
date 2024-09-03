import React, { useState, useEffect, useRef } from "react";
import { graphql } from "gatsby";
import MenuLayout from "./menuLayout";
import { CompanyData, FoodMenu } from "../interfaces/interfaces";
import foodData from "../data/food.json"; 
import companyData from "../data/data.json"; 
import { useLocation } from "@reach/router";
import foodImages from "../images/food/index";
import { useTranslation } from "gatsby-plugin-react-i18next";

const FoodMenuPage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedFood, setSelectedFood] = useState<null | { name: string; en_desc: string; image: string }>(null);
  const [activeTab, setActiveTab] = useState<string>("entrees");
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [shouldShowCollapseButton, setShouldShowCollapseButton] = useState(false);
  const foodMenuRef = useRef<HTMLDivElement>(null); // Ref para el contenedor
  
  const companyInfo: CompanyData = companyData[0];
  const foodMenu: FoodMenu = foodData as FoodMenu;
  const location = useLocation();

  const handleOpenModal = (foodItem: { name: string; en_desc: string; image: string }) => {
    setSelectedFood(foodItem);
  };

  const handleCloseModal = () => {
    setSelectedFood(null);
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
      const foodItem = allDishes.find((item) => item.name === foodName);
      if (foodItem) {
        handleOpenModal(foodItem);
      }
    }
  }, [location.search]);

  useEffect(() => {
    // Verifica la altura del contenedor al cargar o cambiar el tab
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

  const renderFoodItems = (foodItems: typeof foodMenu["entrees"]) => {
    return foodItems.map((item, index) => (
      <div className="flex flex-col w-[160px] h-[260px] bg-primary/35 box-shadow p-4" key={index} onClick={() => handleOpenModal(item)}>
        <div>
          <img src={getImageSrc(item.image)} alt={item.name} />
        </div>
        <div className="flex flex-row grow pt-4">
          <h3 className="text-white uppercase font-extrabold text-md leading-[1rem]">{item.name}</h3>
          <p className="text-terciary self-end text-2xl font-extrabold">{item.price}</p>
        </div>
        <div className="text-white text-xs text-center font-extralight">{t("general.see_more")}</div>
      </div>
    ));
  };

  return (
    <MenuLayout data={companyInfo}>
      <div className="tabs text-white flex justify-around max-w-[750px] mx-auto my-8">
        <button
          className={`hover:text-terciary hover:underline ${activeTab === "entrees" ? "text-terciary" : ""}`}
          onClick={() => setActiveTab("entrees")}
        >
          {t("productMenu.entrees")}
        </button>
        <button
          className={`hover:text-terciary hover:underline ${activeTab === "mainDishes" ? "text-terciary" : ""}`}
          onClick={() => setActiveTab("mainDishes")}
        >
          {t("productMenu.mainDishes")}
        </button>
        <button
          className={`hover:text-terciary hover:underline ${activeTab === "sideDishes" ? "text-terciary" : ""}`}
          onClick={() => setActiveTab("sideDishes")}
        >
          {t("productMenu.sideDishes")}
        </button>
        <button
          className={`hover:text-terciary hover:underline ${activeTab === "extras" ? "text-terciary" : ""}`}
          onClick={() => setActiveTab("extras")}
        >
          {t("productMenu.extras")}
        </button>
        <button
          className={`hover:text-terciary hover:underline ${activeTab === "desserts" ? "text-terciary" : ""}`}
          onClick={() => setActiveTab("desserts")}
        >
          {t("productMenu.desserts")}
        </button>
      </div>

      <div
        ref={foodMenuRef}
        className={`food-menu flex flex-wrap gap-5 max-w-[950px] mx-auto justify-center ${
          isCollapsed && shouldShowCollapseButton ? "max-h-[550px] overflow-hidden" : "min-h-[545px]"
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

      {selectedFood && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>{selectedFood.name}</h2>
            <p>{selectedFood.en_desc}</p>
            <img src={getImageSrc(selectedFood.image)} alt={selectedFood.name} />
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
