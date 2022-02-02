# react-state

## Getting started

This application requires NodeJS 12+ for development. Run `npm start`. The app is available on `http://localhost:3000`

## Environment variables

Use `.example.env` to create `.env` file

## Build

```
npm run build
```

To serve the production build on localhost, run `npm run start:pro`.

. Since the single page app takes care of routing at the client side, any 404 error except for static assets are
to be resolved back to index.html for the client-side router to handle. To aid this, an edge lambda is deployed
in us-east-1 and associated with the cloudfront distribution. The edge lambda only triggers when cloudfront fetches
from origin, therefore the costs should be negligible.

## Test

Jest provides the test runner, assertion functions and coverage. Tests can be placed
inside `src` (side-by-side) or `test` directories and must have the extension
`.test.ts` or `.test.tsx`.

Run the tests with,

`npm run test` (short `npm t`)

`npm run test:ci` is meant for CI/CD environment, generates junit.xml report for Jenkins.

Options can be passed to jest by appending `--` to `npm test`.
Example: `npm test -- Header` to run all tests matching the `Header` pattern

## e2e test

Playwright Test was created specifically to accommodate the needs of the end-to-end testing.

Start app first

`npm start`

Run the tests with

`npm run test:e2e`

Run with verbose API logs

`npm run test:e2e:verbose`

Run in Debug Mode

`npm run test:e2e:debug`

To use playwright CLI to generate JavaScript code for the user interactions

`npm run test:e2e:gen`


## ESLint

ESLint will be executed with the test command.

```
npm test
```

You can run only eslint with the following script:

```
npm run lint
```

## Storybook

Storybook allows quick prototyping and component showcase.

`npm run start:storybook` starts the storybook app
`npm run build:storybook` as a standalone app

`*.stories.tsx` can be placed anywhere inside the `src` directory or inside a top-level
`stories` directory.

## Logging

The default template provides a logger and an error boundary react component
configured to utilize the logger. The logger's log level can be set during
build with `LOG_LEVEL` environment variable with levels, `trace`, `debug`, `info` (default), `warn` or `error`.
The logger internally is dependent on `@js-boot/logger` (refer usage at https://github.com/Scout24/js-boot).

### Error boundary with logger

Any component can be wrapped with a `withErrorBoundary()` wrapper and it will automatically
use the logger to log errors. You can also provide a fallback UI in case of error, this is
illustrated in `ErrorPage.tsx`.
