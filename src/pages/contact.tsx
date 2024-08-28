import * as React from "react";
import Layout from "./indexLayout";
import { graphql } from "gatsby";
import data from "../data/data.json";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import Head from "../components/head";

const info = data[0];
const pageTitle: string = "contact";

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Layout data={info}>
      <Head title={pageTitle} />
      <Trans>{pageTitle}</Trans>
    </Layout>
  );
};

export default ContactPage;

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
