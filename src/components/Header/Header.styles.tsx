import { StyleSheet } from 'react-native';
import { theme } from '../../utils/constants';

export const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    backgroundColor: theme.color.primary,
    borderBottomColor: theme.color.primary,
    borderBottomWidth: 1,
    width: '100%',
    height: '10%',
    alignItems: 'flex-end',
    paddingRight: 10
  },
  headerTitle: {
    color: theme.color.light,
    fontSize: 30
  }
});
