const isTest = String(process.env.NODE_ENV) === "test";

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: isTest ? "commonjs" : false
      }
    ],
    "@babel/preset-react",
    "@emotion/babel-preset-css-prop"
  ],
  plugins: [
    [
      "@babel/plugin-proposal-decorators",
      {
        decoratorsBeforeExport: true
      }
    ],
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-bigint"
  ]
};
