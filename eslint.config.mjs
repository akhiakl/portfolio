import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "next/typescript",
      "next/core-web-vitals",
    ],
    rules: {
      "react-hooks/exhaustive-deps": [
        "warn",
        { additionalHooks: "^(use(?!Fragment)[A-Z0-9].*)$" },
      ],
    },
  }),
];

export default eslintConfig;
