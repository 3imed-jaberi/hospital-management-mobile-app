import React from 'react';
import { View } from 'react-native';
import { BottomLineStyle } from '../styles';



const BottomLine = ({ style }) => (<View style={[BottomLineStyle.defaultBottomLine, style]} />);


export { BottomLine };