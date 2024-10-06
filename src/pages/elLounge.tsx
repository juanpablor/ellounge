import * as React from "react";
import Indexlayout from "./indexLayout";
import { graphql } from "gatsby";
import data from "../data/data.json";
import { Trans } from "gatsby-plugin-react-i18next";
import Head from "../components/head";
import { CompanyData, DataLayout } from "../interfaces/interfaces";


const info: CompanyData = data[0];
const pageTitle: string = "welcome";

const IndexPage: React.FC<DataLayout> = () => {
  return (
    <Indexlayout data={info}>
      <Head title={pageTitle} />
      <Trans>{pageTitle}</Trans>
    </Indexlayout>
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
