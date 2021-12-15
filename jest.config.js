module.exports = {
  preset: "ts-jest",
  testMatch: ["**/*.test.(ts|tsx)"],
  roots: ["src"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|scss)$": "identity-obj-proxy",
  },
  moduleDirectories: ["node_modules", "src"],
  setupFilesAfterEnv: ["./jest.setup.ts"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!<rootDir>/node_modules/",
    "!src/**/index.{ts,tsx}",
    "!src/**/*.stories.{ts,tsx}",
    "!src/**/*.styles.{ts,tsx}",
    "!src/**/*.argTypes.{ts,tsx}",
    "!src/**/*.mock.{ts,tsx}",
  ],
};
