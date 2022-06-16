const ModuleScopePlugin = require("react-dev-utils/ModuleScopePlugin");
const path = require("path");

module.exports = function override(config) {
  config.resolve.plugins.forEach((plugin) => {
    if (plugin instanceof ModuleScopePlugin) {
      plugin.allowedFiles.add(path.resolve("./images/logo.svg"));
      plugin.allowedFiles.add(
        path.resolve("./images/illustration-working.svg")
      );
      plugin.allowedFiles.add(path.resolve("./images/icon-pinterest.svg"));
      plugin.allowedFiles.add(path.resolve("./images/icon-twitter.svg"));
      plugin.allowedFiles.add(path.resolve("./images/icon-instagram.svg"));
      plugin.allowedFiles.add(
        path.resolve("./images/icon-fully-customizable.svg")
      );
      plugin.allowedFiles.add(path.resolve("./images/icon-facebook.svg"));
      plugin.allowedFiles.add(
        path.resolve("./images/icon-detailed-records.svg")
      );
      plugin.allowedFiles.add(
        path.resolve("./images/icon-brand-recognition.svg")
      );
      plugin.allowedFiles.add(path.resolve("./images/bg-shorten-desktop.svg"));
      plugin.allowedFiles.add(path.resolve("./images/bg-shorten-mobile.svg"));
      plugin.allowedFiles.add(path.resolve("./images/bg-boost-mobile.svg"));
      plugin.allowedFiles.add(path.resolve("./images/bg-boost-desktop.svg"));
    }
  });

  return config;
};
