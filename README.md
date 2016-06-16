# obj-by-path
Get the value of a nested object via its path

[![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)][stability]
[![circleci](https://circleci.com/gh/orangemug/obj-by-path.png?style=shield)][circleci]
[![Dependency Status](https://david-dm.org/orangemug/obj-by-path.svg)][dm-prod]
[![Dev Dependency Status](https://david-dm.org/orangemug/obj-by-path/dev-status.svg)][dm-dev]

[stability]: https://github.com/orangemug/stability-badges#stable 
[circleci]:  https://circleci.com/gh/orangemug/obj-by-path
[dm-prod]:   https://david-dm.org/orangemug/obj-by-path
[dm-dev]:    https://david-dm.org/orangemug/obj-by-path#info=devDependencies


## Install
To install

    npm install orangemug/obj-by-path --save


## Usage
To use

    var objByPath = require("obj-by-path");

    var value = objByPath({one: {two: "hello"}}, ["one", "two"]);
    assert.equal(value, "hello");


## License
[MIT](LICENSE)
