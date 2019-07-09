import { StyleSheet } from 'react-native';

import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    marginTop: metrics.baseMargin,
    width: metrics.screenWidth,
    alignItems: 'center',
  },
  textDefault: {
    fontSize: 16,
    color: colors.darker,
    lineHeight: 26,
  },
});

export default styles;
