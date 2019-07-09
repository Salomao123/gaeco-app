import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    height: metrics.screenHeight,
    justifyContent: 'center',
    backgroundColor: colors.secundary,
    paddingHorizontal: metrics.basePadding,
    alignItems: 'stretch',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#fff',
    marginBottom: metrics.baseMargin,
    paddingHorizontal: metrics.basePadding,
    paddingVertical: metrics.basePadding - 10,
    borderRadius: metrics.baseRadius,
  },
  btnLogin: {
    alignItems: 'center',
    backgroundColor: colors.succes,
    paddingHorizontal: metrics.basePadding,
    paddingVertical: metrics.basePadding - 15,
    borderRadius: metrics.baseRadius,
  },
  textBtn: {
    fontSize: 16,
    color: colors.white,
    lineHeight: 25,
    alignSelf: 'center',
  },
  textDefault: {
    fontSize: 16,
    color: colors.white,
    lineHeight: 25,
    alignSelf: 'center',
    marginBottom: 10,
  },
});

export default styles;
