import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: metrics.baseMargin * 2,
  },
  textDefault: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.darker,
  },
  subtitle: {
    lineHeight: 25,
    fontSize: 14,
    fontWeight: '300',
    color: colors.darker,
  },
  titleOperacao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  img: {
    width: 60,
    height: 30,
    resizeMode: 'contain',
  },
});

export default styles;
