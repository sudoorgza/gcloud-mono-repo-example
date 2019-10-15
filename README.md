# Google Cloud Mono Repo Typescript References example

**Note:** This is my own personal hack, ideally the deployments should be handled by webpack so please be careful if your deployment breaks.

Example repo on how to use yarn workspaces together with the gcloud deploys. Utilizes [Typescript references](https://blogs.msdn.microsoft.com/typescript/2018/07/30/announcing-typescript-3-0/#project-references).

This example repo is heavily based off of the work by [Tom Medema](https://github.com/tommedema) in [tommedema/serverless-mono-example](https://github.com/tommedema/serverless-mono-example).

## Stack

- Typescript (with references)
- Lerna
- Yarn Workspaces

## How it works

The deployments roughly follow the following process:

1. copy all the `@0local` packages into the app's `dist` folder under `dist/packages`
1. run the built in [script](./script) to update all javascript file references from `@0local` to `./packages`
1. replace the `package.json` with a `package.deploy.json` file which doesn't have any references to `@0local`
1. run the `deploy:cmd` script
1. replace the `package.json` with `package.dev.json` 

**Note:** every time you run `yarn install` (or `yarn add`) in a deployment app a copy is made of the `package.json` file (to `package.dev.json`) and a new `package.deploy.json` file is generated.

## Structure

This repo is divided into common packages and deployment modules. Each deployment module is split into apps which are individually deployable.

### Adding a deployment module

From the root run 

`yarn add:module <module-path>`

(where `<module-path>` is the path for your new module, e.g. `./deploy-module1`)

### Adding an app to deploy

From the root run

`yarn add:app <app-path>`

(where `<app-path>` is the path for your new app, e.g. `./deploy-module1/app0`)

### Adding a new common package

From the root run 

`yarn add:package <package-path>`

(where `<package-path>` is the path for your new app, e.g. `./packages/new-package`)

### Running tests

To run all tests run `yarn test` from the root folder.

To run tests in a specific package, run `yarn test` from the package's folder.

### Building

To build all packages run `yarn build` from the root folder

To build a specific package including the packages it references to, run `yarn build` from the package folder.

### Deploying

To deploy a specific app, run `yarn deploy` from the package folder. To deploy all apps run the same command from the root folder.

## Open issues (PRs welcome)

- Automatically update the deployment module config to add references for newly added apps
- Automatically update the the base config for newly added deployment modules
