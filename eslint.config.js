import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import eslintConfigPrettier from "eslint-config-prettier";
import { languageOptions } from "eslint-plugin-react/configs/all";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  eslintConfigPrettier,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
  {
    files: ["migrations/**", "src/server/**"],
    languageOptions: { globals: globals.node },
  },
];
