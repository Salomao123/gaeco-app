import React, { Fragment } from 'react';

import { View, ScrollView, Text } from 'react-native';

import { Header, Search, Menu, Operacao, Mapa } from '../../components'

import styles from './styles';

const Dasboard = () => (
  <ScrollView>
    <Header />
    <Search />
    <Menu />

    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Salomão, acompanhe algumas operações em tempo real.</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Operacao />
        </ScrollView>
      </View>
    </View>

    <Mapa />

  </ScrollView>
);

export default Dasboard;
