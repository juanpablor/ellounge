import * as React from "react";
import Indexlayout from "./indexLayout";
import { graphql } from "gatsby";
import data from "../data/data.json";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import Head from "../components/head";

const info = data[0];
const pageTitle: string = "welcome";

interface dataLayout {
  data?: any;
}


const IndexPage: React.FC<dataLayout> = ({data}) => {
  const { t } = useTranslation();
  console.log(data)
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
