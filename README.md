# Remove Protractor Angular Schematic

[![npm (scoped)](https://img.shields.io/npm/v/remove-protractor-schematic.svg)](https://www.npmjs.com/package/@nerdbeheard/remove-protractor-schematic)

Remove Protractor from an Angular CLI project

This schematic will:

- prompt for removal of Protractor files and configuration

## Usage 🚀

Install globally

```shell
npm install -g @nerdbeheard/remove-protractor-schematic
```

Then in an Angular CLI project run

```shell
ng g @nerdbeheard/remove-protractor-schematic:add
```

Optionally run as one command in an Angular CLI app directory. Note this will add the schematic as a dependency to your project.

```shell
ng add @nerdbeheard/remove-protractor-schematic
```

## Issues

Issues with this schematic can be filed [here](https://github.com/digitaldrummerj/remove-protractor-schematic/issues/new/choose).

## Thank You 🙏

Thanks to [BrieBug](https://medium.com/briebug-blog) for creating the [Cypress Angular Schematic](https://www.npmjs.com/package/@briebug/cypress-schematic) which inspired this schematic.

## Development 🛠

### Getting started

⚙ [Node](https://nodejs.org) is required for the scripts. Make sure it's installed on your machine.

⬇ **Install** the dependencies for the schematic and the sandbox application

```bash
npm install && cd sandbox && npm install && cd ..
```

🖇 **Link** the schematic in the sandbox to run locally

```bash
npm run link:schematic
```

🏃 **Run** the schematic

```bash
npm run build:clean:launch
```

## E2E testing

Execute the schematic against the sandbox. Then run linting, unit & e2e tests and a prod build in the sandbox.

```bash
npm run test
```

## Unit Testing

Run the unit tests using Jasmine as a runner and test framework.

```bash
npm run test:unit
```

## Reset the sandbox

Running the schematic locally makes file system changes. The sandbox is version controlled so that viewing a diff of the changes is trivial. After the schematic has run locally, reset the sandbox with the following.

```bash
npm run clean
```

_Note: if you're using the `schematics` CLI mentioned below, you can execute the schematic in a dry run mode._

## Change the Schematic name

1. do a global search and replace for `schematic-starter` and `schematicStarter` with the new name.
2. change the folder name from `./src/schematic-starter/...` to `./src/NEW_NAME/...`
3. run `npm run link:schematic` to set up local package linking for the sandbox

## Optional - Testing with the Schematics CLI

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI but also has a debug mode.

Check the documentation with

```bash
schematics --help
```

## Publishing

To publish, simply do:

```bash
npm run build
npm publish
```
