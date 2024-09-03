import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import MenuLayout from "./menuLayout";
import { CompanyData, FoodMenu } from "../interfaces/interfaces";
import { Trans } from "gatsby-plugin-react-i18next";
import foodData from "../data/food.json"; 
import companyData from "../data/data.json"; 
import { useLocation } from "@reach/router";
import foodImages from "../images/food/index";
import { useTranslation } from "gatsby-plugin-react-i18next";

const FoodMenuPage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedFood, setSelectedFood] = useState<null | { name: string; en_desc: string; image: string }>(null);
  const [activeTab, setActiveTab] = useState<string>("entrees");
  const pageTitle: string = "Food Menu";

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
      <Trans>{pageTitle}</Trans>

      <div className="tabs">
        <button onClick={() => setActiveTab("entrees")}>Entrees</button>
        <button onClick={() => setActiveTab("mainDishes")}>Main Dishes</button>
        <button onClick={() => setActiveTab("sideDishes")}>Side Dishes</button>
        <button onClick={() => setActiveTab("desserts")}>Desserts</button>
      </div>

      <div className="food-menu flex flex-wrap gap-5 max-w-[950px] mx-auto justify-center">
        {activeTab === "entrees" && renderFoodItems(foodMenu.entrees)}
        {activeTab === "mainDishes" && renderFoodItems(foodMenu.mainDishes)}
        {activeTab === "sideDishes" && renderFoodItems(foodMenu.sideDishes)}
        {activeTab === "desserts" && renderFoodItems(foodMenu.desserts)}
      </div>

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
