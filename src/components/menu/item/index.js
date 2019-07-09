import React, { Fragment } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const Item = ({ titulo }) => (
  <Fragment>
    <TouchableOpacity style={styles.container}>
      <Text style={styles.textDefault}>{titulo}</Text>
    </TouchableOpacity>
  </Fragment>
);

export default Item;
