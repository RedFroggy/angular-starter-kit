# Angular starter kit

<div align="center">
  <a name="logo" href="https://www.redfroggy.fr"><img src=".gitlab/logo.png" alt="RedFroggy"></a>
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

## Getting started

- `npm install` to get node dependencies
- `npm run serve` to run locally
- `npm run build` to build the application

## Tests

### Unit tests

- `npm run test` to start Jest tests.
- `npm run test:ci` to run with coverage:
- HTML and coverage reports are generated under the `dist/test-results/html` and `dist/test-results/lcov-report` folders.

### End to End tests

- `ng e2e:open` to execute the end-to-end tests in gui mode.
- `ng e2e:ci` to execute the end-to-end tests in headless mode (for CI env).

## Code quality

`npm run lint`. It will both check angular code and file naming conventions.

## Aws deployment

The aws architecture is created via cloudformation and relies on [aws cdk scripts](deploy/index.ts)

### Architecture

- S3 bucket: `angular.redfroggy.io`
- A cloudfront distribution which is the entry point.

### Aws stack

- `ǹpm run aws-synth` to check that the `cloudformation` stack is valid.
- `ǹpm run aws-deploy`. Will create, deploy and run aws `cloudformation` scripts written in the [deploy folder](deploy).

## CI/CD workflow

### Branch workflow

![alt text](.gitlab/gitlab_branch_workflow.png 'Gilab branch workflow')

| Job         | Description                                                    |
| ----------- | -------------------------------------------------------------- |
| test-and-qa | Angular unit tests, e2e (cypress) tests and lint verifications |

### Master workflow

![alt text](.gitlab/gitlab_master_workflow.png 'Gilab master workflow')

| Job         | Description                                                                                  |
| ----------- | -------------------------------------------------------------------------------------------- |
| test-and-qa | Angular unit tests, e2e (cypress) tests and lint verifications                               |
| build       | Build the Angular application                                                                |
| release     | Manual job. Run `semantic-release` and perform a new release (changelog generation, git tag) |
| cloudfront  | Deploy the Angular stack in AWS using `AWS CDK``                                             |

## Perform a release

`npm run release`. Will check commit messages, generate changelog, create a git tag.

## Generate swagger definition files

`npm run swagger` : Wil generate the swagger files based on the [swagger-config.json](swagger-config.json) file.

## Perform a webpack bundle analysis

`npm run analyze`

## Environment variables

| Key              | Value                                                                    |
| ---------------- | ------------------------------------------------------------------------ |
| CERTTIFICATE_ARN | `AWS CDK` role arn. Used to perform action on aws cloudformation stack   |
| DOMAIN_DEV       | `AWS CDK` domain. Application domain used in cldoufront, route53, etc    |
| SUBDOMAIN_DEV    | `AWS CDK` subdomain. Application domain used in cldoufront, route53, etc |

### Framework

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
- [angular-tslint-rules](https://www.npmjs.com/package/angular-tslint-rules) for Angular [best practices](https://angular.io/guide/styleguide) linter
- [prettier](https://prettier.io/) as a code formatter

### Rest API tools

- [ng-swagger-gen](https://github.com/cyclosproject/ng-swagger-gen#readme) to generate Angular models and services based on swagger rest api doc.
- [class-transformer](https://github.com/typestack/class-transformer) to use deep class objet instances for rest api data instead of plain objects

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
