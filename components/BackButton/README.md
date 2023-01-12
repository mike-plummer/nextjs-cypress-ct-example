## Next.js useRouter

As a Single Page Application (SPA) one of the primary features is the Next Router (`next/router`) which allows for integration between the navigation system (typically the browser's History API) and your application code to allow URL changes to control what component(s) are rendered.

### Mock out `useRouter`

The `useRouter` hook is a primary mechanism to integrate programmatic control of the Router into your components. It is relatively easy to mock out the hook function to return inspectable stub functions.

See `stubbing out 'useRouter' hook` in `BackButton.cy.js`

### Mock out `Router`

`useRouter` simply searches up the React stack to find a router provider - by building our own with a mocked router implementation we can inspect functions on the router itself for test assertions.

See `use mock router implementation` in `BackButton.cy.js` and the custom `mountWithRouter` command in `/cypress/support/component.js`