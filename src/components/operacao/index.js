import React, { Fragment } from 'react';

import {
  View, Text, TouchableOpacity, Image
} from 'react-native';

import styles from './styles';

const imagem1 = require('../../assets/imagem1.jpeg');
const imagem2 = require('../../assets/imagem2.jpeg');

const Operacao = () => (
    <Fragment>
      <TouchableOpacity style={styles.boxContainer}>
        <Image style={styles.img} source={imagem1} />
        <View style={styles.boxContent}>
          <Text style={styles.textDefault}>Operação Lavajato</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.boxContainer}>
        <Image style={styles.img} source={imagem2} />
        <View style={styles.boxContent}>
          <Text style={styles.textDefault}>Operação sangria</Text>
        </View>
      </TouchableOpacity>
    </Fragment>
    
);

export default Operacao;
