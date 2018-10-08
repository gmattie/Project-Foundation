<div align="center">
    <h1><strong>PROJECT FOUNDATION</strong></h1>
    <h3>A bootstrap repository containing an infrastructure of files, folders, dependencies and tasks for the development of JavaScript, SASS, and HTML based projects.</h3>
    <h1></h1>
</div>

## **1 – Install Node.js**
An installation of Node.js is required:  [**Download Here**](https://nodejs.org/en/)

## **2 – Download or Clone Repository**
Download the [**Project Foundation zip file**](https://github.com/gmattie/Project-Foundation/archive/master.zip) or clone the repository by entering the following CLI command at the desired project location:
```
git clone https://github.com/gmattie/Project-Foundation.git
```

## **3 – Install Development Dependencies**
Installation of development dependencies ( *Node Modules* ) are required.  Install them by entering the following CLI command at the project root folder:

```
npm install
```

## **4 – Build Scripts**
The following build scripts can be executed by entering their CLI commands at the project root folder:

#### **Development**
```
npm run dev
```
- Transpiles JavaScript code and bundles modules to a single JavaScript file in the */build/js/* directory using [**Babel**](http://babeljs.io/) and [**Webpack**](https://webpack.js.org/). 
- Transpiles Sass code, adds required polyfills and vendor prefixes and bundles modules to a single CSS file in the */build/css/* directory using [**Node Sass**](https://www.npmjs.com/package/node-sass), [**PostCSS**](https://www.npmjs.com/package/postcss) and [**Webpack**](https://webpack.js.org/).
- Generates inline sourcemaps for JavaScript and CSS files using [**Webpack**](https://webpack.js.org/).
- Opens the project in the default web browser, creates a local server and facilitates live reloading using [**Browsersync**](https://browsersync.io/).

#### **Production**
```
npm run prod
```
- Transpiles JavaScript code and bundles modules to a single, minified JavaScript file in the */build/js/* directory using [**Babel**](http://babeljs.io/), [**Webpack**](https://webpack.js.org/) and [**UgfifyJS Webpack Plugin**](https://github.com/webpack-contrib/uglifyjs-webpack-plugin).
-  Transpiles Sass code, adds required polyfills and vendor prefixes and bundles modules to a single, minified CSS file in the */build/css/* directory using [**Node Sass**](https://www.npmjs.com/package/node-sass), [**PostCSS**](https://www.npmjs.com/package/postcss) and the [**Optimize CSS Assets Webpack Plugin**](https://github.com/NMFR/optimize-css-assets-webpack-plugin). 

#### **Development & Production**
```
npm run dev-prod
```
- Transpiles JavaScript code and bundles modules to a single, minified JavaScript file in the */build/js/* directory using [**Babel**](http://babeljs.io/), [**Webpack**](https://webpack.js.org/) and [**UgfifyJS Webpack Plugin**](https://github.com/webpack-contrib/uglifyjs-webpack-plugin).
- Transpiles Sass code, adds required polyfills and vendor prefixes and bundles modules to a single, minified CSS file in the */build/css/* directory using [**Node Sass**](https://www.npmjs.com/package/node-sass), [**PostCSS**](https://www.npmjs.com/package/postcss) and the [**Optimize CSS Assets Webpack Plugin**](https://github.com/NMFR/optimize-css-assets-webpack-plugin).
- Generates inline sourcemaps for JavaScript and CSS files using [**Webpack**](https://webpack.js.org/).
- Opens the project in the default web browser, creates a local server and facilitates live reloading using [**Browsersync**](https://browsersync.io/).

*NOTE:  Build processes can be terminated by pressing `Ctrl+C` on the CLI of the project root folder.*

---