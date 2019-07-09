import { Platform, StyleSheet, StatusBar } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    height: 80,
    borderBottomColor: '#d1d1d1',
    borderBottomWidth: 0.5,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: metrics.basePadding,
  },
  userMenu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textDefault: {
    color: colors.darker,
    fontWeight: 'bold',
    fontSize: 16,
  },
  icon: {
    marginRight: metrics.baseMargin,
  },
  logout: {
    fontSize: 16,
    color: colors.danger,
  },
});

export default styles;
