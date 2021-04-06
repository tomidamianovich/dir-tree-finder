import { StyleSheet } from 'react-native';
import { theme } from '../../utils/constants';

const msgBox = {
  padding: 25,
  margin: 10,
  color: 'white'
};

export const styles = StyleSheet.create({
  directoryContainer: {
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    padding: 20
  },
  noDataMsg: {
    ...msgBox,
    backgroundColor: theme.color.info
  },
  erroMsg: {
    ...msgBox,
    backgroundColor: theme.color.warning
  }
});
