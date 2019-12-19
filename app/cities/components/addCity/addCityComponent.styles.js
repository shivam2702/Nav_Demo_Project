import {StyleSheet} from 'react-native';

export default Styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    alignContent: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#0000FF',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
    color: 'white',
  },
  textInput: {
    marginTop: 20,
    width: '100%',
    borderRadius: 4,
    backgroundColor: 'white',
    padding: 20,
  },
  buttom: {
    marginTop: 20,
    backgroundColor: 'grey',
  },
});
