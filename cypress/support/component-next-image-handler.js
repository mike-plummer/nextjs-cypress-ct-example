import * as ImageComponent from 'next/image'

// Grab unaltered Image component from Next
const WrappedImageComponent = ImageComponent.default

// Change the default export of `Image` so that our Component Tests use this version
// This allows us to change the behavior within component testing without altering
// our actual component logic
Object.defineProperty(ImageComponent, 'default', {
  configurable: true,
  // Anytime a component tries to render an `Image` we output it with the provided props
  // but also tack on the special `unoptimized` prop to bypass Next's image optimization
  value: props => {
    return <WrappedImageComponent {...props} unoptimized={true} />
  },
});

export {}