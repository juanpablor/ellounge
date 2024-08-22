import * as React from "react";
import Layout from "./layout";
import { graphql } from "gatsby";
import data from "../data/data.json";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import Head from "../components/head";
// import Navigation from "../components/nav";

const info = data[0];
const pageTitle: string = "welcome";

// interface NavProps {
//   data?: {
//     menu: string[];
//     companyDetails: { instagram: string; facebook: string };
//   };
// }


const IndexPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
    <Layout data={info}>
      <Head title={pageTitle} />
      <Trans>{pageTitle}</Trans>
    </Layout>
      <p>hola</p>
    </>
  );
};

export default IndexPage;

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
