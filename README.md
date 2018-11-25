# React course project
## Without Webpack
### Install NodeJS -> [Installer](https://nodejs.org/)
Check with:
```
$ node -v 
$ npm -v
```
### Install Yarn (globally)
```
$ npm install -g yarn
```
Check with:
```
$ yarn --version
```
### Create a project folder
```
$ mkdir -p ~/react-course-projects/indecision-app
```
### Install live-server (globally)
```
$ yarn global add live-server
```
Check with:
```
$ live-server -v
```
### Create a public folder and index.html
```
$ cd ~/react-course-projects/indecision-app
$ mkdir -p ~/react-course-projects/indecision-app/public
$ touch ~/react-course-projects/indecision-app/public/index.html
```
### Launch live-server from project home
```
$ live-server public/
```

Include script tags in index.html for React and ReactDOM:
"https://unpkg.com/react@16.0.0/umd/react.development.js"
"https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js" 

Create a script folder under public:
'$ cd ~/react-course-projects/indecision-app/public'
'$ mkdir -p scripts'

Create a single app.js file in the scripts folder, this is the main script for the app

Install Babel (globally), with 2 presets env and react - local dependencies
'$ yarn global add babel-cli'
Check with:
'$ babel --version'
Navigate to the home project directory:
'$ cd ~/react-course-projects/indecision-app'
Init the project:
'$ yarn init'
Add the presets to project dependencies:
'$ yarn add babel-preset-react babel-preset-env'
Check package.json
Create a new src folder under the project root. Create a new app.js under that folder.
This app.js is the original (not compiled) source script.
Make babel watch file changes and compile to scripts/app.js (the one included in index.html)
'$ babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch' 



