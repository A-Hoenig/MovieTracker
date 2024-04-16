import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReactConfig,
];

"rules": {
  "no-multiple-empty-lines": ["error", { "max": 5, "maxEOF": 1, "maxBOF": 0 }]
}