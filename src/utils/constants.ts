/* 
  This file has the contraints used all over the application and also
  colours and data that is shared.
*/

// Data
export const companyName = "Nubi";
export const defaultAppName = `${companyName} App`;
export const appName = `${companyName} Dir Tree Finder`;

// Theme Colours
export const theme = {
  color: {
    primary: '#1928aa',
    secondary: '#e8e8e8',
    light: '#ffffff',
    dark: '#151c34',
    gray: '#808080',
    info: '#17a2b8',
    warning: '#dc3545'
  }
}


export const formConst = {
  inputLabel: 'Introduce the url that you want to find the tree',
  searchButtonText: 'Search',
  refreshButtonText: 'Refresh',
  loadingText: 'Loading',
  placeholderUrl: 'https://run.mocky.io/v3/...',
  errors: {
    invalidUrl: 'Please enter a valid url.',
    request: 'An error was found trying to retrieve de directory folder ' +
    'tree, please ensure that the url given returns a directory or ' +
    'try again later.'
  },
  info: {
    dirEmpty: 'The directory was found but it is currenty empty.'
  }
}

export const dirItems = {
  types: {
    file: 'file',
    dir: 'directory'
  },
  states: {
    empty: '(Empty)'
  }
}