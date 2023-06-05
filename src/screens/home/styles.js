import { StyleSheet } from 'react-native';
import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  simpleCard: {},
  doubleCardContainer: {},
  doubleCard: {},
  tripleCardContainer: {},
  tripleCard: {},
  cardsContainer: {
    flex: 1,
    margin: 20,
    height: 550,
    justifyContent: 'space-evenly',
  },
  button: {
    fontSize: 20,
    height: 30,
  },
  buttonStyle: {
    height: 80,
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
  },
  buttonStyleDisabled: {
    height: 80,
    justifyContent: 'center',
    backgroundColor: theme.colors.lightGrey,
    borderRadius: 10,
  },
  textStyle: {
    color: theme.colors.white,
    fontSize: 22,
    fontFamily: theme.fonts.bold,
  },
});
