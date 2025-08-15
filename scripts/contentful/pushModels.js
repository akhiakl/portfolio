// createModels.js
const contentful = require("contentful-management");
const models = require("./models.json");
require("dotenv").config();

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

    for (const model of models) {
      console.log(`Creating content type: ${model.name}...`);
      const contentType = await environment.createContentTypeWithId(
        model.id ?? camelize(model.name), // id from name
        {
          name: model.name,
          description: model.description,
          displayField: model.displayField,
          fields: model.fields,
        }
      );

      await contentType.publish();
      console.log(`✅ Published: ${model.name}`);
    }

    console.log("🎉 All content types created and published.");
  } catch (err) {
    console.error("❌ Error:", err);
  }
})();
