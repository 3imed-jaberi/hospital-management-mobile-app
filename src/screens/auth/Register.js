import React, { useState } from 'react';
import { ToastAndroid } from 'react-native';
import Container from './container';
import { Button, Input, EmailIcon, LockIcon, PersonIcon } from '../../components';
import { register } from '../../services';
import Loader from 'react-native-modal-loader';
import { __CATCH_REQUEST__, __SUCCESS_REQUEST__, __ORANGE__ } from '../../constants';



const Register = ({ navigation }) => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLoading, setShowLoading] = useState(false);
  

  const handleName = (data) => setName(data);
  const handleEmail = (data) => setEmail(data);
  const handlePassword = (data) => setPassword(data);
  

  const handleSubmit = async () => {
    try {
      setShowLoading(true);
      const { data } = await register({ name, email, password });
      setName('');
      setEmail('');
      setPassword('');
      setShowLoading(false);    
      // console.log(data);
      ToastAndroid.showWithGravity(__SUCCESS_REQUEST__, ToastAndroid.SHORT, ToastAndroid.CENTER);
    } catch (error) {
      setShowLoading(false);
      // console.log(error);
      ToastAndroid.showWithGravity(__CATCH_REQUEST__, ToastAndroid.SHORT, ToastAndroid.CENTER);
    }
  }

  return(
    <Container title='Register' navigation={navigation}>
            
      <Loader loading={showLoading} color={__ORANGE__} size='large' />

      <Input 
        placeholder='  Full Name *' 
        leftIcon={<PersonIcon />}
        onChangeText={handleName}
        value={name}
      /> 

      <Input 
        placeholder='  Email *' 
        leftIcon={<EmailIcon />}
        onChangeText={handleEmail}
        value={email}
      /> 

      <Input 
        placeholder='  Password *' 
        leftIcon={<LockIcon />}
        onChangeText={handlePassword}
        value={password}
      /> 

      <Button 
        title='Register'
        type='outline'
        onPress={handleSubmit}
      />
      
    </Container>
  );
}


export { Register };