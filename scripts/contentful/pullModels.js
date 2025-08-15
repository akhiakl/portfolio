// createModels.js
const contentful = require("contentful-management");
const models = require("./models.json");
const { writeFileSync } = require("fs");
const path = require("path");
require("dotenv").config({ debug: true });

const ACCESS_TOKEN = process.env.CONTENTFUL_MANAGEMENT_TOKEN; // from Contentful's API keys
const SPACE = process.env.CONTENTFUL_SPACE;
const ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT || "master";

function camelize(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
}

(async () => {
  try {
    if (!ACCESS_TOKEN || !SPACE) {
      throw new Error(
        "Please set CONTENTFUL_MANAGEMENT_TOKEN and CONTENTFUL_SPACE in your environment variables."
      );
    }

    const client = contentful.createClient({
      accessToken: ACCESS_TOKEN,
    });

    const space = await client.getSpace(SPACE);
    const environment = await space.getEnvironment(ENVIRONMENT);

    const contentTypes = await environment.getContentTypes();

    writeFileSync(
      path.join(__dirname, "./models.json"),
      JSON.stringify(
        contentTypes?.items?.map((cType) => ({
          id: cType.sys.id,
          name: cType.name,
          displayField: cType.displayField,
          fields: cType.fields,
        })),
        null,
        2
      )
    );

    console.log("🎉 All content types created and published.");
  } catch (err) {
    console.error("❌ Error:", err);
  }
})();
