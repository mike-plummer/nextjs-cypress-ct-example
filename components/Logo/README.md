## Next.js Images

One of the cool parts about Next is that it provides build-time and runtime optimization of images so your UI is loading an optimally sized & formatted image. This is made possible by the `Image` component from `next/image` which makes it incredibly easy to use within your components. Unfortunately, this relies on a server-side endpoint which is only available when running your Next application for E2E tests.

There are several workarounds to enable images to work in your component tests, each with varying tradeoffs:

## I want to put all of my images in `/public` and reference them using `string` paths

This option gives us the most flexibility and allows for a catch-all implementation that should work for the vast majority of component tests. By setting the special `unoptimized` prop on the `Image` component we bypass the optimizer and simply load the image directly. We can modify the `Image` component to add this special prop automatically within component tests. Note: This only works for images within `/public` and referenced using a string `src` path.

See the `mock image with component override` test case in `Logo.cy.js` for an example of modifying the Image component to add `unoptimized`.

## I want to put my images outside of `/public` and/or reference them using `import`s

Any `import`-ed images are run through Next's image optimizer/cache and are named in a way that makes it difficult to identify exactly what filesystem resource is being referenced, so there isn't an ideal catch-all implementation that will work for this. What can be done is to utilize existing Cypress APIs to mock out the image optimization endpoint since you can identify what image(s) are needed for a given component test you're writing.

See the `'mock image with 'cy.intercept''` test case in `Logo.cy.js` for an example of mocking out the image optimization endpoint.