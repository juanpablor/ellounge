const data = require('./src/data/data.json');
const urls = data[0].menu;

const urlUndefined = (validPath) => {
  return !urls.includes(validPath);
};

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  urls.forEach(url => {
    createPage({
      path: `/${url}`,
      component: require.resolve(`./src/pages/${url}.tsx`),
    });
  });

  createPage({
    path: '/*',
    matchPath: '/:slug',
    component: require.resolve('./src/pages/404.tsx'),
    context: {
      invalidPath: urlUndefined,
    },
  });
};
