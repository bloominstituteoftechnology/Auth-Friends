const path = require("path");

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:json/recommended",
    "plugin:prettier/recommended",
    "prettier/react"
  ],
  rules: {
    "prettier/prettier": "warn",
    "import/imports-first": "warn",
    "import/no-unresolved": "off",
    "import/newline-after-import": "warn",
    "newline-after-var": "warn",
    "no-console": "warn",
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  parser: "babel-eslint",
  plugins: ["react", "import", "jsx-a11y", "react-hooks", "prettier"],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    jest: true,
    browser: true,
    node: true
  },
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      webpack: {
        config: {
          resolve: {
            extensions: [".js", ".jsx"],
            alias: {
              Actions: path.join(__dirname, "src/actions"),
              Components: path.join(__dirname, "src/components"),
              Contexts: path.join(__dirname, "src/contexts"),
              Hooks: path.join(__dirname, "src/hooks"),
              Views: path.join(__dirname, "src/views"),
              Reducers: path.join(__dirname, "src/reducers"),
              Routes: path.join(__dirname, "src/routes"),
              Utils: path.join(__dirname, "src/utils")
            }
          }
        }
      }
    }
  }
};
