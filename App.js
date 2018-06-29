import React, { Component } from 'react';
import { View } from 'react-native';

import NumericKeyboard from './NumericKeyboard';
import { viewStyles } from  './styles';

export default class App extends Component {
  render() {
    return (
      <View style={viewStyles.container}>
        <View style={viewStyles.arbitrary}/>
        <NumericKeyboard />
      </View>
    );
  }
}
