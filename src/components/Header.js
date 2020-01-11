import React, { Fragment, useState } from 'react';
import { View, Image, TouchableWithoutFeedback, AsyncStorage } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import Loader from 'react-native-modal-loader';
import { HeaderStyle } from '../styles';
import { __HEADER_AUTH_LOGO__, __ORANGE__ } from '../constants';
import { __WHITE__ } from '../constants';




// __________ PRIVATE COMPONENTS __________ //

const BackBtn = ({ navigation, size }) => (<TouchableWithoutFeedback onPress={() => navigation.goBack()}>
  <Icon name='arrow-back' color={__WHITE__} size={size || 26} />
</TouchableWithoutFeedback>)


const LogoutBtn = ({ navigation }) => {
  
  const [showLoading, setShowLoading] = useState(false);


  const handleLogOut = () => {
    setShowLoading(true);
    setTimeout(async () => {
      await AsyncStorage.clear();
      navigation.navigate('Starter');
      setShowLoading(false); 
    }, 1000);
  }


  return (
    <Fragment>
      <TouchableWithoutFeedback onPress={handleLogOut}>
        <Icon name='fingerprint' color={__WHITE__} />
      </TouchableWithoutFeedback>

      <Loader loading={showLoading} color={__ORANGE__} size='large' />
    </Fragment>
  );
}


const AuthHeaderLogo = () => (<View style={HeaderStyle.AuthHeaderLogoContainer}>
  <Image 
    source={require('../assets/auth-logo.png')}
    style={HeaderStyle.AuthHeaderLogoImg} 
  />
</View>);



// __________ PUBLIC COMPONENTS __________ //

const HeaderContainer = ({ navigation, title }) => (<Header
  leftComponent={title && <BackBtn navigation={navigation} />}
  centerComponent={{ text: title || 'Home', style: HeaderStyle.CentreComponent }}
  rightComponent={<LogoutBtn navigation={navigation} />}
  containerStyle={HeaderStyle.HeaderContainer}
/>)


const AuthHeader =({ navigation }) => (<Fragment>
  <View style={HeaderStyle.AuthHeaderContainer}>
    <BackBtn navigation={navigation} size={38} />
  </View>
  <AuthHeaderLogo />
</Fragment>);


const AuthLogo = () => (<Image 
  source={require('../assets/auth-logo.png')} 
  style={HeaderStyle.AuthLogoImg}
/>);


export { HeaderContainer as Header, AuthHeader, AuthLogo };