import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    marginTop: metrics.baseMargin,
    paddingHorizontal: metrics.basePadding,
  },
  busca: {
    borderWidth: 0.5,
    borderColor: colors.dark,
    paddingHorizontal: metrics.basePadding,
    paddingVertical: metrics.basePadding - 15,
  },
});

export default styles;
