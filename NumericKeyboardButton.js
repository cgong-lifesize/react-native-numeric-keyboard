import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

import { keyboardStyles } from  './styles';

export default class NumericKeyboardButton extends Component {
  onPress = () => {
    console.log('1');
  }

  render() {
    return (
      <TouchableHighlight
        style={keyboardStyles.button}
        onPress={this.onPress}
        underlayColor='darkgrey'
        disabled={this.props.disabled}
      >
        <Text style={keyboardStyles.text}>
          {this.props.text}
        </Text>
      </TouchableHighlight>
    );
  }
}
