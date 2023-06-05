import { StyleSheet } from 'react-native';
import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  headerContainer: {
    backgroundColor: theme.colors.lighterGrey,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.colors.black,
  },
  titleContainer: {
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: theme.colors.lightGrey,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.colors.black,
  },
  title: {
    color: theme.colors.primary,
    paddingBottom: 20,
    fontSize: 34,
    fontFamily: theme.fonts.bold,
  },
  textContainer: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  text: {
    marginHorizontal: 25,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: theme.fonts.light,
  },
  usersContainer: {
    margin: 20,
    height: 540,
    justifyContent: 'space-evenly',
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
