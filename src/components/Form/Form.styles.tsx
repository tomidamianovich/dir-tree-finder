import { StyleSheet } from 'react-native';
import { theme } from '../../utils/constants';

export const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
  button: {
    backgroundColor: theme.color.primary,
    color: theme.color.light
  }
});
