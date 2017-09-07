# React Redux Typescript Project Template #

This project is aimed at providing a spring board for developing applications using react, redux, and typescript. This project contains some popular dependencies that are required for most project's using these technologies.

This isn't meant for large projects as it stands, but rather a template that could be used for rapid prototyping and experimenting with these technologies.

### What's in the box?###

 - Jest testing framework
 - Type definations for react redux
 - Axios XHR library
 - redux-promise-middleware
 - Configuration for use with redux dev tools
 - Visual Studio code launch configurations
 - A webpack config
 - Some boilerplate

### Getting started ###
Just run `npm run start`

For tests `npm run test`

For a testing workflow I typically run `npm run test:watch` and use the visual studio code plugin to run tests with debugger statements to debug. Tests ran with visual studio code should be debuggable in the typescript source.

### About the boilerplate###

The boilerplate provides a connected component with some tests. The boilerplate has both a presentational and container component. It also follows the redux ducks convention. This is mainly aimed at providing a quick starting point for copying and pasting folders to quickly scaffold out components.