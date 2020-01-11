import React from 'react';
import { Text } from 'react-native';
import { TextContentStyle } from '../styles';



const TextContent = ({ content }) => (<Text style={TextContentStyle.defaultStyle}> * {content} </Text>);


export { TextContent };