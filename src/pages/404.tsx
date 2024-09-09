import React from "react";
// import Layout from "./Indexlayout";
import { graphql } from "gatsby";
// import { CompanyData } from "../interfaces/interfaces";
// import { Trans } from "gatsby-plugin-react-i18next";
// import Head from "../components/head";
// import data from "../data/data.json";

// const info: CompanyData = data[0];
// const pageTitle: string = "Food Menu";

const NoFoundPage: React.FC = () => {
  return (
    // <Layout data={info}>
    //   <Head title={pageTitle} />
    //   <Trans>{pageTitle}</Trans>
    // </Layout>
    <div>ERROR PAGE 404</div>
  );
};

export default NoFoundPage;

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
