# @curiouser/react-modal

## Demo site
https://curiouser-react-modal.netlify.app/

## Features
- choose between imperative API or Portal rendering
- observable, publishing events `modal.open` and `modal.close`

## Install
### NPM
```bash
npm install @curiouser/react-modal
```

### Yarn
```bash
yarn add @curiouser/react-modal
```

## Usage
- `.modal-container` selector must be available to mount to. Add it just above your body's closing tag `</body>`. [See it in our CRA example](./example/public/index.html#L36).
- (optionally) add `modal__wrapper` className to your modal root and `modal__title` and `modal__body` classNames for contents. See it in our [SimpleModal example](./example/src/components/SimpleModal.jsx).
- [observe modal open or close](./example/src/App.js#L14), ([implements @curiouser/pubsub](https://www.npmjs.com/package/@curiouser/pubsub))

### Example code
- [Render a simple modal imperatively](./example/src/components/SimpleModalDefault.jsx)
  - [connected to a redux store](./example/src/components/StoreConnectedModalDefault.jsx)
  - [overriding default to prevent dismissal](./example/src/components/SimpleModalNotDismissable.jsx)
  - [overriding default to be less vertically centered](./example/src/components/SimpleModalNotCentered.jsx)
- [Render a simple modal via portal](./example/src/components/SimpleModalPortal.jsx)

### Styles
You're responsible for importing or linking the stylesheet with `import '@curiouser/react-modal/dist/index.css';` or any other way you like, it's just a css file. The package styles don't try to do anything fancy for you, just provide baseline, functional styles that work out of the box. Class names try to follow the [BEM naming convention](http://getbem.com/naming/). We recommend adding your own styles for the following selectors:
- `.modal__wrapper`: add styles for `width` (and/or `min-width`, `max-width`) style to  global selector. [See our styles for the example app](./example/src/index.css#L21)
- you may override the styles for selector `.modal__close` and/or `.modal__close::after` to customize the close button (X in the top right of modal)
- [override any styles you like](./src/index.css) and/or [create a PR](https://github.com/curiousercreative/react-modal/compare) to make specific rules read CSS variables

## License
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>
