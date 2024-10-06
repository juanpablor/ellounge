import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `El Lounge Latin Club`,
    siteUrl: `https://pointbarlounge.ca/`,
  },
  pathPrefix: "",
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`
      }
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`fr`, `es`, `en`],
        defaultLanguage: `fr`,
        siteUrl: `https://example.com`,
        trailingSlash: 'always',
        i18nextOptions: {
          interpolation: {
            escapeValue: false
          },
          nsSeparator: false
        },
        pages: [
          {
            matchPath: '/:lang?/blog/:uid',
            getLanguageFromPath: true,
            excludeLanguages: ['es']
          },
          {
            matchPath: '/preview',
            languages: ['fr']
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-klaro",
      options: {
        includeInDevelopment: true,
        klaroVersion: "v0.7.11",
        config: {
          lang: "en",
          privacyPolicy: "../src/images",
          services: [
            {
              trackingId: "G-PRK6NZKMMW",
              name: "google-analytics",
              default: true,
              title: "Google Analytics and others",
              purposes: ["statistics"],
              cookies: [/^ga/i],
            },
          ],
        },
      },
    }
  ],
};

export default config;
