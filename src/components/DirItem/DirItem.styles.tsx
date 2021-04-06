import { StyleSheet } from 'react-native';
import { theme } from '../../utils/constants';

export const styles = StyleSheet.create({
  dirItemContainer: {
    padding: 0
  },
  emptyContainer: {
    padding: 2
  },
  dirItemName: {
    fontSize: 16
  },
  empty: {
    fontSize: 11,
    color: theme.color.gray
  }
});
