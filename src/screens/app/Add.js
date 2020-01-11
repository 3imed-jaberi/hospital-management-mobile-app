import React, { useState, Fragment } from 'react';
import { ScrollView, AsyncStorage, ToastAndroid } from 'react-native';
import Container from './container';
import { Input, Button, Title, InputIcon } from '../../components';
import Loader from "react-native-modal-loader";
import { __BED__, __DOCTOR__, __PATIENT__, __NOT_VALID_MSG__, __CATCH_REQUEST__, __ROOM__, __ORANGE__ } from '../../constants';
import { addBed, addDoctor, addPatient, addRoom } from '../../services';
import { isNotEmptyBed, isNotEmptyDoctor, isNotEmptyPatient, isNotEmptyRoom } from '../../validation';


const Add = ({ navigation }) => {

  const [showLoading, setShowLoading] = useState(false);
  const [HeaderTitle] = useState(navigation.getParam('HeaderTitle', 'NO-HEADER'));


  const [title, setTitle] = useState('');
  const [fullName, setFullName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [age, setAge] = useState('');
  const [malady, setMalady] = useState('');
  const [desc, setDesc] = useState('');
  const [specialty, setSpecialty] = useState('');

  

  const handleTitle = (data) => setTitle(data);
  const handleFullName = (data) => setFullName(data);
  const handleFirstName = (data) => setFirstName(data);
  const handleLastName = (data) => setlastName(data);
  const handleAge = (data) => setAge(data);
  const handleMalady = (data) => setMalady(data);
  const handleDesc = (data) => setDesc(data);
  const handleSpecialty = (data) => setSpecialty(data);



  const isValid = (FormState) => {
    switch (HeaderTitle) {
      case __BED__: { 
        return isNotEmptyBed(FormState);
      }
      case __DOCTOR__: { 
        return isNotEmptyDoctor(FormState);
      }
      case __PATIENT__: { 
        return isNotEmptyPatient(FormState);
      }
      default:  {
        return isNotEmptyRoom(FormState);
      }
    }
  }



  const handleSubmit = async () => {
    try {

      let FormState = {
        title,
        fullName,
        firstName,
        lastName,
        age,
        malady,
        desc,
        specialty
      };

      if (isValid(FormState)){
        setShowLoading(true);
        let token = `Bearer ${await AsyncStorage.getItem('userToken')}`;
  
        switch (HeaderTitle) {
          case __BED__: { 
            await addBed(FormState, token);
            break;
          }
          case __DOCTOR__: { 
            await addDoctor(FormState, token);
            break;
          }
          case __PATIENT__: { 
            await addPatient(FormState, token);
            break;
          }
          default:  {
            await addRoom(FormState, token);
            break;
          }
        }
  

        setTitle('');
        setFullName('');
        setFirstName('');
        setlastName('')
        setAge('');
        setMalady('');
        setDesc('');
        setSpecialty('');

        navigation.navigate('Show', { HeaderTitle });
        setShowLoading(false);
      }else{
        ToastAndroid.showWithGravity(__NOT_VALID_MSG__, ToastAndroid.SHORT, ToastAndroid.CENTER);
      }
    } catch (error) {
      setShowLoading(false);
      ToastAndroid.showWithGravity(__CATCH_REQUEST__, ToastAndroid.SHORT, ToastAndroid.CENTER);
    }
  };


  return (
    <Container title={HeaderTitle} navigation={navigation}>
      <Title content={HeaderTitle} /> 
      <ScrollView style={{ padding: 25 }}>

      { 
        HeaderTitle === __ROOM__
                  && 
        <Input 
          placeholder='  Title *'
          leftIcon={<InputIcon />}
          onChangeText={handleTitle}
          value={title}
        /> 
      }

      {
        HeaderTitle === __DOCTOR__
                  && 
        <Input 
          placeholder='  Full Name *' 
          leftIcon={<InputIcon />}
          onChangeText={handleFullName}
          value={fullName}
        />
      }  

      {
        HeaderTitle === __PATIENT__ 
                  && 
        <Fragment>
          <Input 
            placeholder='  First Name *'
            leftIcon={<InputIcon />}
            onChangeText={handleFirstName}
            value={firstName}
          />
          <Input 
            placeholder='  Last Name *'
            leftIcon={<InputIcon />}
            onChangeText={handleLastName}
            value={lastName} 
          />
        </Fragment>
      }

      {
        ( HeaderTitle === __DOCTOR__
                  || 
        HeaderTitle === __PATIENT__ )
                  && 
        <Input 
          placeholder='  Age *'
          leftIcon={<InputIcon />}
          onChangeText={handleAge}
          value={age} 
        />
      }  

      {
        HeaderTitle === __PATIENT__ 
                  && 
        <Input 
          placeholder='  Malady *' 
          leftIcon={<InputIcon />}
          onChangeText={handleMalady}
          value={malady} 
        />
      } 

      {
        ( HeaderTitle === __DOCTOR__
                  || 
        HeaderTitle === __BED__ )
                  && 
        <Input 
          placeholder='  Description *'
          leftIcon={<InputIcon />}
          onChangeText={handleDesc}
          value={desc}
        />
      }

      {
        HeaderTitle === __DOCTOR__
                  && 
        <Input 
          placeholder='  Specialty *'
          leftIcon={<InputIcon />}
          onChangeText={handleSpecialty}
          value={specialty}
        />
      }

      <Loader loading={showLoading} color={__ORANGE__} size='large' />

        <Button 
          title='Add  ➕'
          type="outline"
          onPress={handleSubmit}
        />

      </ScrollView>
    </Container>
  );
}


export { Add };