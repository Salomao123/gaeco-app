import { StyleSheet } from 'react-native';

import { colors, metrics } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: metrics.basePadding - 10,
    paddingVertical: metrics.basePadding - 15,
    borderColor: colors.regular,
    borderWidth: 1,
    marginRight: metrics.baseMargin,
    borderRadius: metrics.base,
  },

  textDefault: {
    fontSize: 13,
  },
});

export default styles;
