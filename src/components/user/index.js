import React from 'react';

import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../styles';

import styles from './styles';

const User = () => (
  <View style={styles.container}>
    <Icon name="user" size={40} color={colors.darker} />
    <Text style={styles.textDefault}>Salomão Batista</Text>
    <Text style={styles.textDefault}>035.947.152-80</Text>
  </View>
);

export default User;
