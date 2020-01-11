import React from 'react';
import { View } from 'react-native';
import { Header } from '../../../components';
import { __ORANGE__, __WHITE__ } from '../../../constants';



const Container = ({ navigation, children, title }) => {
  
  return (
    <View style={{ flex: 1 }}>

      <View style={{ flex: 1.2, backgroundColor: __ORANGE__ }}>
        <Header navigation={navigation} title={title} />
      </View>

      <View style={{ flex: 8.8, backgroundColor: __WHITE__  }}>
        { children }
      </View>

    </View>     
  );
}


export default Container;