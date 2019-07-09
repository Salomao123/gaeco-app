import { StyleSheet } from 'react-native';

import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: metrics.baseMargin * 2,
    marginVertical: metrics.baseMargin,
  },
  content: {
    marginVertical: metrics.baseMargin * 3,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.darker,
  },
});

export default styles;
