import React, { Component } from 'react';

import styles from './styles';

import { View, Text, TextInput, TouchableOpacity } from 'react-native';

class Login extends Component {

  state = {
    login: null,
    password: null
  };

  render() {

    const { login, password } = this.state;

    return (
        <View style={styles.container}>
            <Text style={styles.textDefault}>GAECO</Text>
            
            <TextInput 
              style={styles.input} 
              value={login}
              onChangeText={login => this.setState({ login })} 
              placeholder="login"/>

            <TextInput 
              style={styles.input} 
              value={password}
              onChangeText={password => this.setState({ password })} 
              placeholder="senha"/>

            <TouchableOpacity style={styles.btnLogin} 
                onPress={() => this.props.navigation.navigate('Dashboard')}>
                <Text style={styles.textBtn}>Fazer Login</Text>
            </TouchableOpacity>
        </View>
    );
  }
}

export default Login;
