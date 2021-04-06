/* 
  This file will have the shared and main types of the application
*/


export type File = {
  type: string,
  name: string
};

export type Directory = {
  type: string,
  name: string
  files: Directory[] | Directory
} | [];