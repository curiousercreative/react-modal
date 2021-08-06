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

## Prerequisites
- `.modal-container` selector must be available to mount to. Add it just above your body's closing tag `</body>`
- add styles for `width` (and/or `min-width`, `max-width`) style to `.modal__wrapper` global selector
    ```css
    .modal__wrapper {
      max-width: 800px;
      min-width: 320px;
    }
    ```
- you may like to override the styles for selector `.modal__close` and/or `.modal__close::after`

## Usage
- [Render a simple modal imperatively](./example/src/components/SimpleModalDefault.jsx)
  - [connected to a redux store](./example/src/components/StoreConnectedModalDefault.jsx)
  - [overriding default to prevent dismissal](./example/src/components/SimpleModalNotDismissable.jsx)
  - [overriding default to be less vertically centered](./example/src/components/SimpleModalNotCentered.jsx)
- [Render a simple modal via portal](./example/src/components/SimpleModalPortal.jsx)

### Styles
You're responsible for importing or linking the stylesheet with `import '@curiouser/react-modal/dist/index.css';` or any other way you like, it's just a css file. The package styles don't try to do anything pretty for you, just provide functional styles. Class names try to follow the [BEM naming convention](http://getbem.com/naming/).

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
