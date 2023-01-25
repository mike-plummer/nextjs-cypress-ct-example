# Cypress.io Component Testing with Next.js

Example of using [Cypress](https://www.cypress.io/) with a [Next.js](https://nextjs.org/) application. This emphasizes Component Testing, but does show some examples of E2E tests to show capabilities that are not ideally tested by component tests (image optimization, routing, etc).

## Concepts

### Components

As much application structure is extracted into pure React components - these can be tested using Cypress Component Tests. Component tests are simpler to bootstrap (no server requirement) and help encourage good practices with component design.

### Next Helper Components

#### Image

[`<Image /> example`](./components/Logo/README.md)

#### Head

[`<Head /> example`](./pages/index.cy.js)

#### Script

[`<Script />` example](./components/StateScript/README.md)

#### Router & Link

* [`useRouter` example](./components/BackButton/README.md)
* [Discussion of how to handle `<Link />`](./components/MovieList/README.md)

### Pages

Pages are the primary integration point between Next and React and strap metadata, path conventions, and data hooks. These items fall outside the React component itself so they are covered by E2E tests that validate the deployed version of the page.

### Styles

Styling is integrated into Next several different ways: global CSS, imported CSS modules, and styled components. These can be tested by either CT or E2E tests.

### APIs

Next api paths depend on the path being deployed and accessible. To test the actual api path an E2E test must be used. However, that doesn't mean that component tests can't be used - by extracting as much logic as possible from your API implementation into a utility function you can validate that using a fast component test and rely on a slower E2E test to simply validate the API is properly pathed and accessible.

### Data Hooks

Page components have four distinct data hooks and can be tested the following way:

* `getStaticPaths`
Pre-builds an instance of a page component for each path returned by this function. Validate using an E2E test that hits each expected path. If testing a live Next server it may build a fallback for unresolved paths - work around this using the `fallback` prop returned by this function.
* `getStaticProps`
Pre-fetches shared props for all instances of a page component. Validate using an E2E test that hits the page path and searches for output dependent on the static prop value(s).
* `getInitialProps`
Initializes a page component with placeholder data that will be replaced by data fetched client-side. Validate using an E2E test that hits the page path and searches for output dependent on the placeholder values prop value(s). Note that it may be necessary to intercept and prevent the client-side fetch that would replace these prop values, use `cy.intercept` if necessary.
* `getServerSideProps`
Initializes a page component with data. Validate using an E2E test that hits the page path and searches for output dependent on the placeholder values prop value(s).

## Coverage

Next runs code client-side (in the browser) *and* server-side (in the Next node server). To get comprehensive code coverage we need to collect from both places.

The `swc-plugin-coverage-instrument` dependency adds Istanbul instrumentation to the SWC compiler (see `next.config.js`). This, combined with using `nyc` to run the server process, allows us to collect and merge coverage from both locations after tests are complete using the `@cypress/code-coverage` plugin.

1. Launch Next server: `npm run dev`
2. Launch Cypress: `npx cypress open`
3. Run tests
4. Open coverage report at `coverage/lcov-report/index.html`

## Troubleshooting & Known Issues

* Code Coverage with `/app` directory

Next.js v13 introduced a beta version of the new `/app` directory structure. Unforunately, there is a known issue with the SWC code instrumentation plugin this project is using in combination with the `/app` directory. If you want to experiment with the new directory structure you can simply comment out the `swc-plugin-coverage-instrument` plugin inside `next.config.js`.

## Acknowledgements

* Example data retrieved from [OMDb](https://www.omdbapi.com/)
* API tests use the awesome [cypress-plugin-api](https://github.com/filiphric/cypress-plugin-api) by Filip Hric
* Code coverage info from [here](https://glebbahmutov.com/blog/code-coverage-for-nextjs-app/)

## License

See [LICENSE](./LICENSE)
