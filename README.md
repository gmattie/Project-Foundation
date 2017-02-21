# **Project Foundation**
Infrastructure of files, folders, dependencies and tasks for the development of JavaScript, SASS, and HTML based projects.

## **Install Node.js**
Installation of Node.js is required:  [**Download Here**](https://nodejs.org/en/)

## **Install Development Dependencies**
Installation of development dependencies (*Node Modules*) are required.  Enter the following CLI command at the project root folder to install:

```
npm install
```

## **Build**
The following build scripts can be executed by entering their CLI commands at the project root folder:

#### **Development**
```
npm run dev
```
- Transpiles JavaScript code and bundles modules to a single JavaScript file in the *./build* directory using [**Babel**](http://babeljs.io/) and [**Webpack**](https://webpack.js.org/). 
- Transpiles SASS code, adds vendor prefixes and bundles modules to a single CSS file in the *./build* directory using [**Gulp Sass**](https://github.com/dlmanning/gulp-sass) and [**Autoprefixer**](https://github.com/postcss/autoprefixer).
- Generates inline sourcemaps for JavaScript and SASS files using [**Gulp Sourcemaps**](https://github.com/floridoo/gulp-sourcemaps) and [**UgfifyJS Webpack Plugin**](https://webpack.js.org/plugins/uglifyjs-webpack-plugin/).
- Opens the project in the default web browser, creates a local server and facilitates live reloading using [**Browsersync**](https://browsersync.io/).

#### **Production**
```
npm run prod
```
- Transpiles JavaScript code and bundles modules to a single JavaScript file in the *./build* directory using [**Babel**](http://babeljs.io/) and [**Webpack**](https://webpack.js.org/). 
- Transpiles SASS code, adds vendor prefixes and bundles modules to a single CSS file in the *./build* directory using [**Gulp Sass**](https://github.com/dlmanning/gulp-sass) and [**Autoprefixer**](https://github.com/postcss/autoprefixer).
- Minimizes JavaScript and CSS build files and creates a new minified HTML index file by removing all whitespace, comments, and inline sourcemaps using [**UgfifyJS Webpack Plugin**](https://webpack.js.org/plugins/uglifyjs-webpack-plugin/), [**Gulp Clean CSS**](https://github.com/scniro/gulp-clean-css) and [**Gulp HTML Min**](https://github.com/jonschlinkert/gulp-htmlmin).    

#### **Development & Production**
```
npm run dev-prod
```
- Transpiles JavaScript code and bundles modules to a single JavaScript file in the *./build* directory using [**Babel**](http://babeljs.io/) and [**Webpack**](https://webpack.js.org/). 
- Transpiles SASS code, adds vendor prefixes and bundles modules to a single CSS file in the *./build* directory using [**Gulp Sass**](https://github.com/dlmanning/gulp-sass) and [**Autoprefixer**](https://github.com/postcss/autoprefixer).
- Generates inline sourcemaps for JavaScript and SASS files using [**Gulp Sourcemaps**](https://github.com/floridoo/gulp-sourcemaps) and [**UgfifyJS Webpack Plugin**](https://webpack.js.org/plugins/uglifyjs-webpack-plugin/).
- Opens the project in the default web browser, creates a local server and facilitates live reloading using [**Browsersync**](https://browsersync.io/).
- Minimizes JavaScript and CSS build files and creates a new minified HTML index file by removing all whitespace and comments using [**UgfifyJS Webpack Plugin**](https://webpack.js.org/plugins/uglifyjs-webpack-plugin/), [**Gulp Clean CSS**](https://github.com/scniro/gulp-clean-css) and [**Gulp HTML Min**](https://github.com/jonschlinkert/gulp-htmlmin).    

---
Build processes can be terminated by pressing `Ctrl+C` on the CLI of the project root folder.