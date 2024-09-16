import React, { ReactNode } from "react";
import { graphql } from "gatsby";
import { CompanyData } from "../interfaces/interfaces";
import LatinClubLayout from "./latinClubLayout";

interface EventsNightProps  {
  children: ReactNode;
  data?: CompanyData;
  eventPage?: boolean
}


const EventsNight: React.FC<EventsNightProps> = ({children, data}) => {
  const companyInfo: CompanyData | undefined = data || undefined;

  return (
    <LatinClubLayout data={companyInfo} eventPage>
      <main>{children}</main>
    </LatinClubLayout>
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
