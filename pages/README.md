## Next.js Head

The `Head` component adds content to the HTML `head` element of a page - all component usages of `Head` are collected by Next and collated when building a given page for delivery to the client. Since this updates global state (there's only one `head` element and it lives outside all Next components you're likely testing) this needs to be handled using custom logic in component tests.

1. Mock the `Head` component

By modifying the `Head` component it is possible to spy on calls to it and assert that given child content was passed to it on mount. See the `mocking out Head component` test case in `/page-tests/index.cy.js`.

2. Supply a mocked context for `Head` content

Next uses a React Context to collect and manage `Head` usage. A custom `mount` command can be used that provides a mocked out Context that can be inspected. See the `with custom HeadManager in mount` test case in `/page-tests/index.cy.js`.


**Note:** Unfortunately, any JS file under the `pages` directory is interpreted as a page to be compiled by Next.js, which means we can't put our Cypress component tests within this directory. Tests for pages need to be extracted to another location so they are not included in the `build` process (in this project, we use `/page-tests`).