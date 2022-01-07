module.exports = {
  preset: "jest-preset-angular",
  roots: [
    "src"
  ],
  coverageDirectory: '<rootDir>/dist/test-results/',
  collectCoverageFrom: [
    "src/app/**/*.ts",
    "!src/app/**/*.spec.ts",
    "!src/app/**/*.module.ts",
    "!src/app/shared/api/**/*.ts",
    "!src/app/features/**/*.model.ts"
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  },
  transform: {
    "^.+\\.(ts|js|html)$": "jest-preset-angular"
  },
  setupFilesAfterEnv: [
    "<rootDir>/src/test/setup-jest.ts"
  ],
  moduleNameMapper: {
    "app/(.*)": "<rootDir>/src/app/$1",
    "@app/(.*)": "<rootDir>/src/app/$1",
    "@assets/(.*)": "<rootDir>/src/assets/$1",
    "@core/(.*)": "<rootDir>/src/app/core/$1",
    "@env": "<rootDir>/src/environments/environment",
    "@src/(.*)": "<rootDir>/src/src/$1",
    "@state/(.*)": "<rootDir>/src/app/state/$1"
  },
  reporters: [
    'default',
    [
      "./node_modules/jest-html-reporter",
      {
        "pageTitle": "Faircost front unit tests report",
        "outputPath": "dist/test-results/html/tests-report.html",
        "includeFailureMsg": false,
        "includeConsoleLog": false
      }
    ]
  ],
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.spec.json",
      stringifyContentPathRegex: "\\.html$"
    }
  },
  cacheDirectory: "<rootDir>/.jest-cache",
  rootDir: '../../'
};
