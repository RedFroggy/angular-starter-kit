# Angular starter kit

<div align="center">
  <a name="logo" href="https://www.redfroggy.fr"><img src=".github/logo.png" alt="RedFroggy"></a>
  <h4 align="center">A RedFroggy project</h4>
</div>
<br/>

<div align="center">
  <a href="https://forthebadge.com"><img src="https://forthebadge.com/images/badges/fuck-it-ship-it.svg"/></a>
  <a href="https://forthebadge.com"><img src="https://forthebadge.com/images/badges/built-with-love.svg"/></a>
  <a href="https://forthebadge.com"><img src="https://forthebadge.com/images/badges/made-with-javascript.svg"/></a>
</div>
<div align="center">
  <a href="https://circleci.com/gh/RedFroggy/angular-starter-kit"><img src="https://circleci.com/gh/RedFroggy/angular-starter-kit.svg?style=svg"/></a>
  <a href="https://codecov.io/gh/RedFroggy/angular-starter-kit"><img src="https://codecov.io/gh/RedFroggy/angular-starter-kit/branch/master/graph/badge.svg?token=XM9R6ZV9SJ"/></a>
  <a href="https://github.com/semantic-release/semantic-release"><img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg"/></a>
</div>

### Prerequisites

- Install NodeJS
- Install jdk (openjdk 11)

## Getting started

- `npm install` to get node dependencies
- `npm run start` to run locally
- `npm run build` to build the application

## Tests

### Unit tests

- `npm run test` to start Jest tests.
- `npm run test:ci` to run with coverage:
- HTML and coverage reports are generated under the `dist/test-results/html` and `dist/test-results/lcov-report` folders.

### End to End tests

- `npm run e2e:open` to execute the end-to-end tests in gui mode.
- `npm run e2e:ci` to execute the end-to-end tests in headless mode (for CI env).

## Code quality

`npm run lint`. It will both check angular code and file naming conventions.

### Framework / Librairies

- [Angular](https://angular.io/)
- [Angular ng bootstrap](https://ng-bootstrap.github.io) for UI
- [rxjs](https://rxjs-dev.firebaseapp.com/)
- [lodash](https://lodash.com/)
- [ngx-translate](https://github.com/ngx-translate/core) for i18n

### Tests

- [Jest](https://jestjs.io/) for unit tests
- [Jasmine](https://jasmine.github.io/) for assertions
- [ng-spectator](https://github.com/ngneat/spectator) to easily writes angular unit tests
- [ng-mocks](https://github.com/ike18t/ng-mocks) to mock components and sub components

### Code quality

- [es-lint](https://eslint.org)
- [ls-lint](https://github.com/loeffel-io/ls-lint) for checking file name conventions
- [angular-eslint/eslint-plugin](https://www.npmjs.com/package/@angular-eslint/eslint-plugin) for Angular [best practices](https://angular.io/guide/styleguide) linter
- [prettier](https://prettier.io/) as a code formatter

### Rest API tools

- [openapi-generator](https://openapi-generator.tech) to generate Angular models and services based on swagger rest api doc.

### Release management

- [husky](https://github.com/typicode/husky) to add git hook locally
- [commitlint](https://github.com/conventional-changelog/commitlint) to check developer's commit messages
- [semantic-release](https://github.com/semantic-release/semantic-release) to release a new version of the application

### Dependency management

- [renovate](https://github.com/renovatebot/renovate) to keep up to date the project dependencies

### Build process

- [angular-cli](https://cli.angular.io/)
- [webpack](https://webpack.js.org/) (used by angular-cli)

### Analysis / Monitoring tool / Debug tool

- [webpack bundler analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) to monitor/check bundle sizes
- Angular debug tools to analyze [change time detection](https://github.com/angular/angular/blob/master/docs/TOOLS.md#enabling-debug-tools)
