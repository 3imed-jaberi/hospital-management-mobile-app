import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { CircleButtonStyle } from '../styles';



const CircleButton = ({ onPress, iconSource, content }) => (
  <View style={CircleButtonStyle.Container}>
    
    <TouchableOpacity onPress={onPress} style={CircleButtonStyle.Style}>
      <Image 
        source={iconSource} 
        style={CircleButtonStyle.Icon}
      />
    </TouchableOpacity>

    <Text style={CircleButtonStyle.Content}> {content} </Text>

  </View>
);


export { CircleButton };