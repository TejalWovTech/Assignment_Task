import React from 'react';
import {TextInput, View, Image, StyleSheet} from 'react-native';
//local import
import R from '../R';
import horizontalScale from '../../res/Scale';

export const SimpleTextInput = props => {
  return (
    <TextInput
      keyboardType={props.keyboardType}
      secureTextEntry={props.secureTextEntry}
      onChangeText={props.onChangeText}
      placeholder={props.placeholder}
      placeholderTextColor={props.placeholderTextColor}
      style={[styles.textInputStyle, props.textInputStyle]}
      value={props.value}
    />
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    marginLeft: horizontalScale(15),
    fontSize: horizontalScale(16),
    color: R.colors.maroon,
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    backgroundColor: '#fff',
    height: horizontalScale(50),
    borderRadius: horizontalScale(18),
    width: horizontalScale(260),
  },
});
