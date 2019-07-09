import React from 'react';

import { View, ScrollView } from 'react-native';

import styles from './styles';
import Item from './item';

const Menu = () => (
  <View style={styles.container}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Item titulo="Minhas Operações" />
      <Item titulo="Criar Operações" />
      <Item titulo="Membros Online" />
      <Item titulo="Alvos" />
    </ScrollView>
  </View>
);

export default Menu;
