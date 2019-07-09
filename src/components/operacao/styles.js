import { StyleSheet } from 'react-native';

import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  boxContainer: {
    width: metrics.screenWidth / 2,
    marginVertical: metrics.baseMargin,
    marginRight: metrics.baseMargin,
    borderWidth: 0.25,
    borderColor: colors.dark,
    borderRadius: metrics.baseRadius,
  },
  boxContent: {
    paddingVertical: metrics.basePadding / 2,
  },
  img: {
    width: metrics.screenWidth / 2,
    height: 100,
    resizeMode: 'cover',
  },
  operacoes: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textDefault: {
    paddingHorizontal: metrics.baseMargin,
    lineHeight: 20,
    fontSize: 14,
    color: colors.dark,
  },
});

export default styles;
