import React from 'react';
import { Input } from 'react-native-elements';
import { __GREY__ } from '../constants';



const InputText = ({ placeholder, containerStyle, inputStyle, leftIcon, onChangeText, secureTextEntry, value }) => (<Input
  placeholder={placeholder}
  placeholderTextColor={__GREY__}
  leftIcon={leftIcon}
  onChangeText={onChangeText}
  value={value}
  secureTextEntry={secureTextEntry}
  containerStyle={containerStyle || { marginTop: '7%' }}
  inputStyle={inputStyle || { fontSize: 18 }}
/>);


export { InputText as Input };