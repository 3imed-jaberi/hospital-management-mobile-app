import React, { useState } from 'react';
import { AsyncStorage, ToastAndroid } from 'react-native';
import Container from './container';
import { Button, Input, EmailIcon, LockIcon } from '../../components';
import { login } from '../../services';
import Loader from 'react-native-modal-loader';
import { __CATCH_REQUEST__, __SUCCESS_REQUEST__, __ORANGE__ } from '../../constants';



const Login = ({ navigation }) => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showLoading, setShowLoading] = useState(false);
  

  const handleUsername = (data) => setUsername(data);
  const handlePassword = (data) => setPassword(data);
  

  const handleSubmit = async () => {
    try {
      setShowLoading(true);
      const {data: { token }} = await login({ username, password });
      await AsyncStorage.setItem('userToken', token);
      setUsername('');
      setPassword('');
      ToastAndroid.showWithGravity(__SUCCESS_REQUEST__, ToastAndroid.SHORT, ToastAndroid.CENTER);
      navigation.navigate('App');
      setShowLoading(false);    
      // console.log(token);
    } catch (error) {
      setShowLoading(false);
      // console.log(error);
      ToastAndroid.showWithGravity(__CATCH_REQUEST__, ToastAndroid.SHORT, ToastAndroid.CENTER);
    }
  }


  return (
    <Container title='Login' navigation={navigation}>

      <Loader loading={showLoading} color={__ORANGE__} size='large' />

      <Input 
        placeholder='  Your email address' 
        leftIcon={<EmailIcon />}
        onChangeText={handleUsername}
        value={username}
      /> 

      <Input 
        placeholder='  Your password' 
        onChangeText={handlePassword}
        value={password}
        secureTextEntry={true}
        leftIcon={<LockIcon />}
      /> 

      <Button 
        onPress={handleSubmit} 
        title='Login' 
        type='outline' 
      />

    </Container>
  );
}


export { Login };