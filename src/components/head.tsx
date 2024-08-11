import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from 'gatsby-plugin-react-i18next';

type HeadProps = {
    title: string;
}

const Head: React.FC<HeadProps> = ({title}) => {
  const { t } = useTranslation();
  return (
    <Helmet>
      <title>{t(title)}</title>
    </Helmet>
  );
};

export default Head;
