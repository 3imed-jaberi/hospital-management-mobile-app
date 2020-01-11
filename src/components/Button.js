import React from 'react';
import { Button } from 'react-native-elements';
import { ButtonStyle } from '../styles';



const Btn = ({ title, type, onPress, containerStyle, buttonStyle, titleStyle }) => (<Button
  title={title}
  type={type || 'solid'}
  onPress={onPress}
  containerStyle={containerStyle || ButtonStyle.defaultContainerStyle}
  buttonStyle={buttonStyle || ButtonStyle.defaultButtonStyle}
  titleStyle={titleStyle || ButtonStyle.defaulTitleStyle}
/>);


export { Btn as Button };