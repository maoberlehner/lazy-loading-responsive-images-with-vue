const nodeSassMagicImporter = require(`node-sass-magic-importer`);
const path = require(`path`);
const PrerenderSpaPlugin = require(`prerender-spa-plugin`);

const productionPlugins = [
  new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, `dist`),
    routes: [`/`],
    postProcess(renderedRoute) {
      // eslint-disable-next-line no-param-reassign
      renderedRoute.html = renderedRoute.html
        .replace(/<script (.*?)>/g, `<script $1 defer>`)
        .replace(`id="app"`, `id="app" data-server-rendered="true"`);

      return renderedRoute;
    },
    renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
      renderAfterElementExists: `.App`,
    }),
  }),
];

module.exports = {
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === `production`) {
      config.plugins.push(...productionPlugins);
    }
  },
  css: {
    loaderOptions: {
      sass: {
        importer: nodeSassMagicImporter(),
      },
    },
  },
  lintOnSave: false,
};
