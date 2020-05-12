const fs = require("fs-extra");
const concat = require("concat");
(async function build() {
  const files = [
    "./dist/angular-team/runtime.js",
    "./dist/angular-team/polyfills.js",
    "./dist/angular-team/main.js",
  ];
  await fs.ensureDir("elements");
  await concat(files, "elements/food-item.js");
  await fs.copyFile("./dist/angular-team/styles.css", "elements/styles.css");
  await fs.copy("./dist/angular-team/assets/", "elements/assets/");
})();
