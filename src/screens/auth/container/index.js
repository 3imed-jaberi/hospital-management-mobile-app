import React from 'react';
import { View, ScrollView, ImageBackground } from 'react-native';
import { AuthHeader, Title } from '../../../components';
import { AuthContainerStyle } from '../../../styles';
import { __WHITE__ } from '../../../constants';



const Container = ({ navigation, children, title }) => (<ImageBackground source={require('../../../assets/bg.png')} style={AuthContainerStyle.bgStyle}>

  <View style={{ flex: 4 }}>
    <AuthHeader navigation={navigation} />
  </View>

  <View style={{ flex: 5, backgroundColor: __WHITE__ }}>
    <Title content={title} />  
    <ScrollView style={AuthContainerStyle.listStyle}>  
    { children }
    </ScrollView>
  </View>

</ImageBackground>)


export default Container;