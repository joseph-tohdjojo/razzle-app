require("@babel/register")({
  presets: ["@babel/preset-env"]
});

const fs = require("fs");
const path = require("path");

const appDirectory = fs.realpathSync(process.cwd());
const resolvePath = relativePath => path.resolve(appDirectory, relativePath);

module.exports = require("./src/client/config").config(resolvePath);
