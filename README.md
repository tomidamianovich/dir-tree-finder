# Dir Tree Finder APP Readme File
# Sections of the application

The application has the following sections pages:
  - Search Page: From where you can search for an url that responses with an directory
  tree that will be showed in the UI. 
# Stack of technologies used in this project

This project was developed with [React Native](https://reactnative.dev/) among the following tools and libraries:
  - [Expo](https://expo.io/): An open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.
  - [TypeScript](https://www.typescriptlang.org/)
  - [Font Awesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react-native): To manage icons in the application.
  - [ESlint](https://eslint.org/): JavaScript linter
  - [React Native Final Tree View Library](https://www.npmjs.com/package/react-native-final-tree-view): In order to get in a tested way a tree of children that will
  be handled with react components later, it is a lightweight recursive solution that save us
  hours of development.

# Explanation of the structure of the proyect

Although the structure of the project is not a single answer question and that the structure will probably depend on the project itself, the methodology we are currently using and the number of members that are part of the dev team among other important things that will determine the structure of the project we could say that there are some common guidelines so i used that one to this proyect structure.

- Components: Main features or big components that are will be the kickoff of the child components(generic/shared ones) that the proyect will have. Are the basic building block of the application, the idea of this one is that they could be used all over the application for a specific reason but with differents props. 

  - Note: Components will have the following structure:
    * Component: The React component itself.
    * Styles: where the styles are exported.
    * Tests: React Testing library/Jest tests. // To be implemented in the future
  
- Utils: Extra utils folder where you could find:
  - Constants: Constants used to avoid hardcoded strings that are shared among the components and also if in the future the string changes we will need just to uploaded in a single line MR.
  - Types: Typescript types and interfaces used all over the application to check that we are using the correct types.

# Requirements to run the application

  - [Git](https://git-scm.com/)
  - [Node Js](https://nodejs.org/en/)
  - [Npm](https://www.npmjs.com/) || [Yarn](https://yarnpkg.com/)

# How to Run the application

1. Open a new terminal in your repositories folder

1. Clone the repository in your local machine:
  run "git clone https://github.com/tomasdreddy/dir-tree-finder"

2. run "cd dir-tree-finder"

3. run "git checkout main"

4. run "yarn install"

5. run "yarn start"

  The application will start you can use:
   1. Expo app in your mobile phone
   2. Press 'w' to open a web page with the app

# How to run linter
  1. Open a new terminal in your repositories folder
  2. run "npm lint"

# How to run all the test (To be Implemented)
  1. Open a new terminal in your repositories folder
  2. run "npm run test"

# How to run an specific test (To be Implemented)
  1. Open a new terminal in your repositories folder
  2. run "npm run test <ComponentName>"
  Example npm run test Header
