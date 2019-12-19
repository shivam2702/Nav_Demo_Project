import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    margin: 12,
  },
  title: {
    color: 'black',
  },
  description: {
    color: 'grey',
  },
  sepeartor: {
    height: 4,
    width: '100%',
    backgroundColor: 'blue',
  },
  mainContainer: {
    height: '100%',
    flexDirection: 'column',
    alignContent: 'stretch',
  },
  listContainer: {
    flexGrow: 1,
  },
  addContainer: {
    flexGrow: 1,
    alignSelf: 'flex-end',
    height: 100,
    // width: 600,
  },
});
