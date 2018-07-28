const nodeSassMagicImporter = require(`node-sass-magic-importer`);

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        importer: nodeSassMagicImporter(),
      },
    },
  },
};
