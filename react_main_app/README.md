This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


React Learn Docs
# What is JSX
It is an extension of Javascript. It looks like a template language. We use babel as a transpiler dependancy to convert JSX to Javascript for the browser to understand. It helps in writing minimal function calls code to display dynamic UI in the browser.

# How to return multi line code in JSX
The convention followed in the community is enclose all the code to be written in brackets 
return (<div><ul></ul></div>);

### Converting HTML to JSX
# About style tag code in JSX
Eg: 
In HTML <div style="background-color: red;"></div>
In JSX <div style={{backgroundColor: 'red'}}></div>

The outer curly brace indicated that we want to reference a JS variable
The inner curly brace is to indicate a JS Object. They keys refer to a property and value represents the value of the property.
While adding styles, we have to remove the dash after the first part of the property name, Eg: -color to color and capitalize the name after the dash, Eg: Color and add it back to the first name, Eg: background-color( These are called compund property style) to backgroundColor

# About quotes in JSX
NOTE: In JSX community, we have to use double quotes while using JSX code, Eg: <label for="name" class="label">Enter Name: </label> and single quotes where we use non-JSX code, Eg: <div style={{backgroundColor: 'red'}}></div>

# About className tag in JSX
In JSX, we have to use className instead of class for attributes in HTML components, Eg: <label for="name" className="label">Enter Name: </label> . This is to avoid name clashes with the class keyword of JavaScript, since we write the code in a JS file.

# Reference JS variables in JSX
In JSX, we can create a javascript variables E.g: const buttonText = 'Click me!". This can then be added in JSX by opening a set of curly braces {buttonText}.

# Values JSX cannot show
JSX cannot show object variables since "Objects are not valid React child", specifically where we would normally show text. We can use JS objects like "style={{backgroundColor: 'blue', color: 'white'}}" as long as we are not referencing them as text.
Eg: const buttonText = { text: 'Click me'}
<button style={{backgroundColor: 'blue', color: 'white'}}>
{buttonText} :- This will result in an error since it cannot be used to display text
</button>

# Finding forbidden property names
It is a good practice to keep the console of the browser open and look for errors from React. For eg, the error in <label for="name" class="label"> is as follows by React "Invalid DOM property `for`. Did you mean `htmlFor`?". This means that the keyword "for" is reserved for something else in react and it is suggesting us to change it to htmlFor.

# Three tenets of React Components