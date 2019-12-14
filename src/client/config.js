import entries from "./entries";

export const config = resolvePath => ({
  modify(webpackConfig, { target }) {
    console.log("TCL: modify -> webpackConfig", webpackConfig);
    if (target === "web") {
      const baseEntry = [webpackConfig.entry.client[0]];
      webpackConfig.entry = entries(baseEntry, resolvePath);

      webpackConfig.output.filename = "static/js/[name].js";
    }

    return webpackConfig;
  }
});
