# graphql-server


1. to start the project:
 one time setup:
  run below commands from project root directory:
  1. `npm install`  this will install all required dependencies
  2. `npm start`  this will start the project on `http://localhost:8000/graphql`
  
  If some how npm install fails follow below process:
  
  1. delete package.js, package-lock.json and node_modules folder
  2. run command `npm init`
  3. run command `npm install apollo-server apollo-server-express cors dotenv express graphql uuid --save`
  4. run command `npm install @babel/core @babel/node @babel/preset-env nodemon --save-dev`
  5. add `"start": "nodemon --exec babel-node src/index.js",` this under script property in newly created package.json file
  6. run `npm start`  this will start the project on `http://localhost:8000/graphql`
