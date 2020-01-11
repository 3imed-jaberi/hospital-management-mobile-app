import React, { Fragment } from 'react';
import { View, Image } from 'react-native';
import { BottomLine } from './BottomLine';
import { ImgStyle } from '../styles';



const Img = ({ src, buttomLine }) => (<Fragment>
  <View style={ImgStyle.Container}>
    <View style={ImgStyle.Style}>
      <Image 
        source={{ uri: src }} 
        style={ImgStyle.Icon}
      />
    </View>
  </View>
  { buttomLine && <BottomLine style={ImgStyle.BottomLine} /> }
  </Fragment>
);


export { Img };