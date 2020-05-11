const fs = require("fs");
const glob = require("glob");
const path = require("path");
const prettier = require("prettier");
const { kebabToPascal, getSvelte } = require("./helpers");

const rootDir = path.join(__dirname, "..");

const indexFile = path.join(rootDir, "src", "index.js");

glob(`${rootDir}/node_modules/flag-icon-css/flags/4x3/*.svg`, (_, icon4x3s) => {
  fs.writeFileSync(indexFile, "", "utf-8");
  for (icon4x3 of icon4x3s) {
    const { dir, base, name } = path.parse(icon4x3);

    // until fixed upstream
    // https://github.com/sveltejs/svelte/issues/4694
    if (name === "do") continue;

    const svg4x3 = fs.readFileSync(icon4x3, "utf-8");
    const icon1x1 = path.join(dir, "..", "1x1", base);
    const svg1x1 = fs.readFileSync(icon1x1, "utf-8");

    const pascalName = kebabToPascal(name);
    const svelte = getSvelte(svg1x1, svg4x3);

    fs.writeFileSync(
      path.join(rootDir, "src", "icons", `${pascalName}.svelte`),
      prettier.format(svelte, { parser: "html" }),
      "utf-8"
    );

    const exportString = `export { default as ${pascalName} } from "./icons/${pascalName}.svelte";\n`;
    fs.appendFileSync(indexFile, exportString, "utf-8");
  }
});
