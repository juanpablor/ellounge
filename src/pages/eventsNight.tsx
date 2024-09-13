import React from "react";
import { graphql } from "gatsby";
import ClubNavigation from "../components/clubNav";
import data from "../data/data.json";
import { CompanyData } from "../interfaces/interfaces";

const info: CompanyData = data[0];

const EventsNight: React.FC = () => {
  return (
    <div>
      
    <div className="flex justify-center my-12 bg-latinClub">
    <ClubNavigation data={info} />
  </div>
    </div>
  );
};

export default EventsNight;

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
