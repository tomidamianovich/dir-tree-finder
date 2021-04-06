import { StyleSheet } from 'react-native';
import { theme } from './src/utils/constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.light,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  spinner: {
    margin: 20
  },
  scrollableContainer: {
    flex: 1,
    width: '100%',
    padding: 20,
    backgroundColor: theme.color.secondary,
  },
  header: {
    justifyContent: 'center',
    backgroundColor: theme.color.primary,
    borderBottomColor: theme.color.primary,
    borderBottomWidth: 1,
    width: '100%',
    height: '10%',
    alignItems: 'flex-end'
  },
  headerTitle: {
    color: theme.color.light,
    fontSize: 30
  }
});
