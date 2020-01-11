import React, { useEffect } from 'react';
import { View, AsyncStorage } from 'react-native'
import Loader from "react-native-modal-loader";
import { AuthLoadingStyle } from '../../styles/AuthLoadingStyle';
import { __ORANGE__ } from '../../constants';



const AuthLoading = ({ navigation }) => {

  useEffect(() => {
    (async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      navigation.navigate(userToken ? 'App' : 'Auth');
    })();
  });

  return (
    <View style={AuthLoadingStyle.Container}>
      <Loader loading={true} color={__ORANGE__} size='large' />
    </View>
  );
}


export { AuthLoading };