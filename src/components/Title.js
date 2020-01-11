import React from 'react';
import { Text } from 'react-native';
import { TitleStyle } from '../styles';



const Title = ({ content }) => (<Text style={TitleStyle.defaultStyle}> {content.toUpperCase()} </Text>);


export { Title }; 