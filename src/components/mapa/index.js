import React from 'react';
import MapView from 'react-native-maps';
import { View, Text, Image } from 'react-native';
import { metrics } from '../../styles';
import styles from './styles';

const live = require('../../assets/live.png');

const App = () => (
  <View>
    <View style={styles.container}>
      <View style={styles.titleOperacao}>
        <Text style={styles.textDefault}>Operação Caça Fantasma</Text>
        <Image source={live} style={styles.img} />
      </View>

      <Text style={styles.subtitle}>Visualização em tempo real no mapa</Text>
    </View> 

      <MapView 
        style={{width: metrics.screenWidth, height: metrics.screenWidth}}
        region={{
          latitude: -0.011435,
          longitude: -51.084696,
          latitudeDelta: 0.0143,
          longitudeDelta: 0.0134,
        }}
        showsUserLocation
      />
  </View>
);

export default App;
