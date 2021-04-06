// Imports
import { Dimensions } from "react-native";

/* 
  This file has the contraints used all over the application and also
  colours and data that is shared.
*/

// Data
export const companyName = "Nubi";
export const appName = `${companyName} Dir Tree Finder`;

// Theme Colours
export const theme = {
  color: {
    primary: '#1928aa',
    secondary: '#e8e8e8',
    light: '#ffffff',
    dark: '#151c34'
  }
}

// Dimensions and screens
export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;


export const formConst = {
  inputLabel: 'Introduce the url that you want to find the tree',
  searchButtonText: 'Search',
  refreshButtonText: 'Refresh',
  loadingText: 'Loading',
  placeholderUrl: 'https://run.mocky.io/v3/...'
}