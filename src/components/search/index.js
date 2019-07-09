import React, { Component } from 'react';

import { View, TextInput } from 'react-native';
import { colors, metrics } from '../../styles';

import styles from './styles';

class Search extends Component {
  state = {
    busca: null,
  };

  render() {
    const { busca } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          value={busca}
          onChangeText={busca => this.setState({ busca })}
          style={styles.busca}
          placeholder="Procurar Operaçãos"
          placeholderTextColor={colors.regular}
        />
      </View>
    );
  }
}

export default Search;
