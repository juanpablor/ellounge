import React from "react";
import { graphql } from "gatsby";

const EventsNight: React.FC = () => {
  return (
    <div>Events Night Page</div>
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
