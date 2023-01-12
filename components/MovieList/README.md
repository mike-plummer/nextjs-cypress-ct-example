## Next.js Link

It is tempting to `cy.click()` a `Link` in a component test, but we recommend structuring your tests to avoid this. Navigation between parts of your application is inherently a non-component responsibility and is better tested in E2E tests that allow you to validate the before/after state of page changes. Within a component test it is appropriate to validate where a link points to, not necessarily to follow that link.
