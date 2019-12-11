module.exports = {
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|scss|sass|less)$": "identity-obj-proxy",
    "^Actions(.*)$": "<rootDir>/src/actions$1",
    "^Components(.*)$": "<rootDir>/src/components$1",
    "^Contexts(.*)$": "<rootDir>/src/contexts$1",
    "^Hooks(.*)$": "<rootDir>/src/hooks$1",
    "^Views(.*)$": "<rootDir>/src/views$1",
    "^Reducers(.*)$": "<rootDir>/src/reducers$1",
    "^Routes(.*)$": "<rootDir>/src/routes$1",
    "^Utils(.*)$": "<rootDir>/src/utils$1"
  },
  snapshotSerializers: ["jest-emotion"]
};
