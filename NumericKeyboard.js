import React, { Component } from 'react';
import { View } from 'react-native';

import NumericKeyboardButton from './NumericKeyboardButton';
import { keyboardStyles } from  './styles';

export default class NumericKeyboard extends Component {
  numericButtonTexts = {
    zero: '0',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9'
  };

  render() {
    return (
      <View style={keyboardStyles.container}>
        <View style={keyboardStyles.column}>
          <NumericKeyboardButton text={this.numericButtonTexts.one} />
          <NumericKeyboardButton text={this.numericButtonTexts.four} />
          <NumericKeyboardButton text={this.numericButtonTexts.seven} />
          <NumericKeyboardButton disabled={true}/>
        </View>
        <View style={keyboardStyles.column}>
          <NumericKeyboardButton text={this.numericButtonTexts.two} />
          <NumericKeyboardButton text={this.numericButtonTexts.five} />
          <NumericKeyboardButton text={this.numericButtonTexts.eight} />
          <NumericKeyboardButton text={this.numericButtonTexts.zero} />
        </View>
        <View style={keyboardStyles.column}>
          <NumericKeyboardButton text={this.numericButtonTexts.three} />
          <NumericKeyboardButton text={this.numericButtonTexts.six} />
          <NumericKeyboardButton text={this.numericButtonTexts.nine} />
          <NumericKeyboardButton disabled={true}/>
        </View>
      </View>
    );
  }
}
