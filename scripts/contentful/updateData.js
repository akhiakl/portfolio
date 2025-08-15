const contentful = require("contentful-management");
require("dotenv").config();

const ACCESS_TOKEN = process.env.CONTENTFUL_MANAGEMENT_TOKEN;
const SPACE = process.env.CONTENTFUL_SPACE;
const ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT || "master";

const client = contentful.createClient({
  accessToken: ACCESS_TOKEN,
});

// Data to be uploaded
const profileData = {
  name: "Akhil K",
  title: "FULL STACK DEVELOPER",
  bio: {
    nodeType: "document",
    data: {},
    content: [
      {
        nodeType: "paragraph",
        data: {},
        content: [
          {
            nodeType: "text",
            value:
              "👋 Hi I'm Akhil K\nAn accomplished Senior Full stack Javascript developer with a solid proficiency in React, Node.js, and Next.js, complemented by extensive experience in frontend technologies. Skilled in developing dynamic web applications, refining CSS/HTML for optimal performance, and architecting efficient database designs (MySQL, MongoDB). Specialized in eCommerce platforms such as Contentful, Magento, Algolia, and Fabric, dedicated to delivering innovative, top-tier solutions. I am also an artish who like to create traditional portraits & 3d models. I am a gamer myself and interested in buiding games using Unreal or Unity",
            marks: [],
            data: {},
          },
        ],
      },
    ],
  },
  location: "Malappuram, Kerala, India",
};

const services = [
  { name: "Web - Front End", category: "service" },
  { name: "Back End", category: "service" },
  { name: "Mobile App", category: "service" },
  { name: "Database", category: "service" },
];

const projects = [
  {
    title: "THE COMMON CLOSETS",
    slug: "the-common-closets",
    description: {
      nodeType: "document",
      data: {},
      content: [
        {
          nodeType: "paragraph",
          data: {},
          content: [
            {
              nodeType: "text",
              value:
                "The common closets (now Gemme collective) is a cloth/apparel rental platform based in sweden",
              marks: [],
              data: {},
            },
          ],
        },
      ],
    },
    thumbnail: "commonclosets.webp",
    sortOrder: 1,
  },
  {
    title: "BADAN",
    slug: "badan",
    description: {
      nodeType: "document",
      data: {},
      content: [
        {
          nodeType: "paragraph",
          data: {},
          content: [
            {
              nodeType: "text",
              value:
                "Badan is a full service landscape architectural design specialist and construction firm",
              marks: [],
              data: {},
            },
          ],
        },
      ],
    },
    thumbnail: "badan.webp",
    sortOrder: 2,
  },
  {
    title: "BEAUDESK",
    slug: "beaudesk",
    description: {
      nodeType: "document",
      data: {},
      content: [
        {
          nodeType: "paragraph",
          data: {},
          content: [
            {
              nodeType: "text",
              value:
                "Beaudesk is a Fully Integrated System to transform your Appointment system.",
              marks: [],
              data: {},
            },
          ],
        },
      ],
    },
    thumbnail: "beaudesk.webp",
    sortOrder: 3,
  },
  {
    title: "UMR",
    slug: "umr",
    description: {
      nodeType: "document",
      data: {},
      content: [
        {
          nodeType: "paragraph",
          data: {},
          content: [
            {
              nodeType: "text",
              value:
                "United Machinery Resources Co. (UMR Company), serve the requirement of manufacturer of spare parts of all types of heavy equipment.",
              marks: [],
              data: {},
            },
          ],
        },
      ],
    },
    thumbnail: "umr.webp",
    sortOrder: 4,
  },
];

const contactInfo = {
  email: "akhilk4k@gmail.com",
  location: "Malappuram, Kerala, India",
};

async function createAsset(env, fileName, title) {
  try {
    const fs = require("fs");
    const path = require("path");

    const filePath = path.join(process.cwd(), "img", fileName);
    const fileBuffer = fs.readFileSync(filePath);
    const asset = await env.createAssetFromFiles({
      fields: {
        title: {
          en: title,
        },
        file: {
          en: {
            contentType: "image/webp",
            fileName: fileName,
            file: fileBuffer,
          },
        },
      },
    });

    const processedAsset = await asset.processForAllLocales();
    const publishedAsset = await processedAsset.publish();
    return publishedAsset;
  } catch (error) {
    console.error(`Error creating asset ${fileName}:`, error);
    throw error;
  }
}

async function createEntry(env, contentTypeId, fields) {
  try {
    // Convert assets to proper link format
    const processedFields = Object.entries(fields).reduce(
      (acc, [key, value]) => {
        if (value && typeof value === "object" && value.sys) {
          // If the value is an asset or entry reference
          return {
            ...acc,
            [key]: { en: value },
          };
        } else if (key === "thumbnail" && typeof value === "string") {
          // Skip thumbnail field if it's a string, it will be handled later
          return acc;
        } else {
          return {
            ...acc,
            [key]: { en: value },
          };
        }
      },
      {}
    );

    // Create the entry
    const entry = await env.createEntry(contentTypeId, {
      fields: processedFields,
    });

    // If there's a thumbnail field that's a string, create the asset and update the entry
    if (fields.thumbnail && typeof fields.thumbnail === "string") {
      const asset = await createAsset(env, fields.thumbnail, fields.title);
      entry.fields.thumbnail = { en: asset };
      await entry.update();
    }

    return await entry.publish();
  } catch (error) {
    console.error(`Error creating entry of type ${contentTypeId}:`, error);
    throw error;
  }
}

async function run() {
  try {
    const space = await client.getSpace(SPACE);
    const env = await space.getEnvironment(ENVIRONMENT);

    // Create Profile
    console.log("Creating profile...");
    const profileEntry = await createEntry(env, "profile", profileData);

    // Create Skills/Services
    console.log("Creating services...");
    for (const service of services) {
      await createEntry(env, "skill", service);
    }

    // Create Projects
    console.log("Creating projects...");
    for (const project of projects) {
      await createEntry(env, "project", project);
    }

    // Create Contact Info
    console.log("Creating contact info...");
    await createEntry(env, "contactInfo", contactInfo);

    console.log("Content migration completed successfully!");
  } catch (error) {
    console.error("Error during content migration:", error);
  }
}

run().catch(console.error);
