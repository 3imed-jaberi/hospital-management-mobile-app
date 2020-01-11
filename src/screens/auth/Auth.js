import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Button, AuthLogo } from '../../components';
import { AuthContainerStyle } from '../../styles';



const AuthHome = ({ navigation }) => (<ImageBackground source={require('../../assets/bg.png')} style={AuthContainerStyle.bgStyle}>

  <View style={AuthContainerStyle.authLogoContainer}>
    <AuthLogo />
  </View>

  <View style={{ flex: 0.7 }}>
    <Text style={AuthContainerStyle.subText}> E-Hospital, Hospital Mangment .. </Text>
  </View>

  <View style={{ flex: 4 }}>

    <Button 
      title='Login'
      onPress={() => navigation.navigate('Login')}
      containerStyle={AuthContainerStyle.loginBtnContainer}
      buttonStyle={AuthContainerStyle.loginBtnStyle}
      titleStyle={AuthContainerStyle.loginTextStyle}
    />

    <Button 
      title='Register'
      type='outline'
      onPress={() => navigation.navigate('Register')}
      containerStyle={AuthContainerStyle.registerBtnContainer}
      buttonStyle={AuthContainerStyle.registerBtnStyle}
      titleStyle={AuthContainerStyle.registerTextStyle}
    />

  </View>

</ImageBackground>);


export { AuthHome };