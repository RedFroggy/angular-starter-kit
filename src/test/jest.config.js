module.exports = {
  preset: "jest-preset-angular",
  roots: [
    "src"
  ],
  coverageDirectory: '<rootDir>/dist/test-results/',
  collectCoverageFrom: [
    "src/app/**/*.ts",
    "!src/app/api/**/*.ts"
  ],
  transform: {
    "^.+\\.(ts|js|html)$": "ts-jest"
  },
  setupFilesAfterEnv: [
    "<rootDir>/src/test/setup-jest.ts"
  ],
  moduleNameMapper: {
    "@app/(.*)": "<rootDir>/src/app/$1",
    "@assets/(.*)": "<rootDir>/src/assets/$1",
    "@core/(.*)": "<rootDir>/src/app/core/$1",
    "@env": "<rootDir>/src/environments/environment",
    "@src/(.*)": "<rootDir>/src/src/$1",
    "@state/(.*)": "<rootDir>/src/app/state/$1"
  },
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.spec.json",
      stringifyContentPathRegex: "\\.html$",
      astTransformers: [
        "jest-preset-angular/build/InlineFilesTransformer",
        "jest-preset-angular/build/StripStylesTransformer"
      ]
    }
  },
  rootDir: '../../'
};
