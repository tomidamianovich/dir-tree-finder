import React from 'react';
import { View } from 'react-native';
import { styles } from './DirTree.styles';
import { Directory } from '../../utils/types';

type Props = {
  dirList?: Directory[];
};

/*
  This component will be in charge of display the results of the directory
  finder search, it will show folders and files in a child component that
  is not implemented yet.
*/

const Form: React.FC<Props> = ({
  dirList = []
}) => {
  return (
    <View style={styles.directoryContainer}>
      
    </View>
  );
};

export default Form;
