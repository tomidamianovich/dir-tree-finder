import { StyleSheet } from 'react-native';
import { theme } from '../../utils/constants';

export const styles = StyleSheet.create({
  inputContainer: {
    width: '85%'
  },
  label: {
    fontSize: 16
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: theme.color.gray,
    borderRadius: 5,
    padding: 10
  },
  search: {
    padding: 5,
    marginTop: 15,
    width: '100%'
  }
});
