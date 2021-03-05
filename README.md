# Getting Started with the Report Editor Frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 
[Ckeditor5](https://ckeditor.com/docs/ckeditor5/latest/index.html) has been
used as the base editor for the application. The base editor is configured with a small demonstration of its plugin 
system.

Redux has been integrated as the state management solution. However, some component level state will be maintained
for the editor application.

A custom plugin has been developed and integrated to add dynamic fields to the text editor. This only supports text
values as of now. To test, click any attribute value on the JSON panel on the left.

Demo of the application can be found at: http://text-editor-demo.s3-website-us-east-1.amazonaws.com/

## Project Structure
* components - Contains the views and containers to connect to the redux store.
* data - temporary folder to hold sample data
* logic - Stateless manager functions for application logic
* plugins - Plugins to extend the editor functionality
* state - redux code with state, reducer, and actions

Note: The project structure may be broken down into a modular structure as the repository grows to keep things more
organized.

## Available Scripts

In the project directory, you can run:

### `npm install` and `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test coverage for the application. As of now, tests are only written for functional logic.
