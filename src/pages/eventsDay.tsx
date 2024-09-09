import React from "react";
import { graphql } from "gatsby";

const EventsDay: React.FC = () => {
  return (
    <div>Events Day Page</div>
  );
};

export default EventsDay;

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
