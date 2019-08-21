[![CircleCI](https://circleci.com/gh/qmixi/react-full-height.svg?style=svg)](https://circleci.com/gh/qmixi/react-full-height) [![Issues][issues-shield]][issues-url] [![npm](https://badgen.net/npm/dt/react-full-height)](https://www.npmjs.com/package/react-full-height) [![npm](https://badgen.net/npm/dm/react-full-height)](https://www.npmjs.com/package/react-full-height) [![MIT License][license-shield]][license-url]



<br />
<br />
<br />
<p align="center">
  <a href="https://github.com/qmixi/react-full-height">
    <img src="static/icon.png" alt="Logo" width="100" height="100">
  </a>

  <h3 align="center">React Full Height</h3>

  <p align="center">
    Customizable component helping you make perfect full view port sections
    <br />
    <br />
    <a href="https://qmixi.github.io/react-full-height/demo/">View Demo</a>
    ·
    <a href="https://github.com/qmixi/react-full-height/issues">Report Bug</a>
    ·
    <a href="https://github.com/qmixi/react-full-height/issues">Request Feature</a>
  </p>
</p>
<br />


<!-- GETTING STARTED -->
## Getting Started

This component has been built to help you create responsive and customizable full-height sections. You can always have a full-height section or you can adjust `ReactFullHeight` component easily to achieve full-height effect only in mobile, desktop or in some specific resolution range.

### Installation

With `npm`
```sh
npm install --save react-full-height
```
Or with `yarn`
```sh
yarn add react-full-height
```

<!-- USAGE EXAMPLES -->
## Usage

### Basic usage

The very basic usage is to just wrap your content in `FullHeight`.

```jsx
import React from "react";
import FullHeight from "react-full-height";

const MySection = () => <FullHeight>My section content</FullHeight>;
```

### Passing className and section default props
`<FullHeight />` renders a `section`, and it will accept any usual `div` props, including `className`.

```jsx
import React from "react";
import FullHeight from "react-full-height";

const MyCustomSection = () => (
  <FullHeight className="section-styles">
    <h2>My section title</h2>
    <p>Full-height section content</p>
  </FullHeight>
);
```

### Make your full-height section responsive
> You can decide about breakpoint by your own

```jsx
import React from "react";
import FullHeight from "react-full-height";

/*
 * Make full-height section only in the mobile resolution screens (up to 768px)
*/
const MobileFullHeightSection = () => (
  <FullHeight endWidth={768}>My mobile only full-height section</FullHeight>
);

/*
 * Make full-height section only in the desktop resolution screens (from 1024px)
*/
const DesktopFullHeightSection = () => (
  <FullHeight startWidth={1024}>My desktop only full-height section</FullHeight>
);

/*
 * Make full-height section only in the tablet resolution screens (from to 768px to 1024px)
*/
const TabletFullHeightSection = () => (
  <FullHeight endWidth={768} startWidth={1024}>My tablet only full-height section</FullHeight>
);
```


## This component takes following props

| Prop name  | Type | Required | Description  |
| --------- | ---- | -------- | ------------ |
| className | string | false | The class name provided to the component. It takes CSS modules as well. |
startWidth | number | false | RWD Breakpoint representing `(min-width)` - By setting it you're telling component from which resolution it should be full-height section. |
| endWidth | number | false | RWD Breakpoint representing `(max-width`) - Decide at which screen resolution your section should no longer be a full-heigh. 


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.


<!-- CONTACT -->
## Contact
Author: [@qmixi](https://github.com/qmixi)
<br/>
Project Link: [https://github.com/qmixi/react-full-height](https://github.com/qmixi/react-full-height)


[forks-shield]: https://img.shields.io/github/forks/qmixi/react-full-height.svg?style=flat-square
[forks-url]: https://github.com/qmixi/react-full-height/network/members
[issues-shield]: https://img.shields.io/github/issues/qmixi/react-full-height.svg?style=flat-square
[issues-url]: https://github.com/qmixi/react-full-height/issues
[license-shield]: https://img.shields.io/github/license/qmixi/react-full-height.svg?style=flat-square
[license-url]: https://github.com/qmixi/react-full-height/blob/master/LICENSE.txt