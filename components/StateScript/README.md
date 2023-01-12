# Next.js Script

The `Script` component from `next/script` is designed to allow for optimized loading of external javascript dependencies.

## Script Loading

Loading javascript files from inside your application (`/public/*`) or outside should work without issue. Since scripts are loaded asynchronously by default you will need to account for that in Cypress commands that assert against side-effects of those script(s).

There may be times where a component loads an external script that is undesired during component testing - pulling in scripts can introduce undesirable side-effects and/or introduce unwanted external dependencies. This can be resolved by using `cy.intercept` to override the script loading; see `mocks internal script` test case in `StateScript.cy.js` for an example of this.
