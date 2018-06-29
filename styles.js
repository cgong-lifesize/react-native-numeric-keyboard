import { StyleSheet } from 'react-native';

export const viewStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  arbitrary: {
    flex: 0.6
  }
});

export const keyboardStyles = StyleSheet.create({
  container: {
    flex: 0.4,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'lightgrey',
    borderWidth: 0.5
  },
  column: {
    flex: 1/3,
    flexDirection: 'column',
    backgroundColor: 'lightgrey'
  },
  button: {
    flex: 1/4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 0.5
  },
  text: {
    fontSize: 28
  }
});
