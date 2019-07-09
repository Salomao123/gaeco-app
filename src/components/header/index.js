import React, { Fragment } from 'react';

import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../styles';

import styles from './styles';

const Header = () => (
  <Fragment>
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.userMenu}>
          <Icon name="user" size={20} color={colors.darker} style={styles.icon} />
          <Text style={styles.textDefault}>Salomão Batista</Text>
        </View>

        <TouchableOpacity>
            <Icon name="power-off" size={20} color={colors.danger} />
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  </Fragment>
);

export default Header;
