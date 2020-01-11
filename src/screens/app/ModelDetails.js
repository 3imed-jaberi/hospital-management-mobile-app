import React, { useState, Fragment } from 'react';
import { ScrollView, AsyncStorage, ToastAndroid } from 'react-native';
import Container from './container';
import { TextContent, Title, Img, Button, BottomLine } from '../../components';
import Loader from "react-native-modal-loader";
import { deleteBed, deleteDoctor, deletePatient, deleteRoom } from '../../services';
import { __BED__, __DOCTOR__, __PATIENT__, __ROOM__, __CATCH_REQUEST__, __SUCCESS_REQUEST__, __ORANGE__ } from '../../constants';
import { ModelDetailsStyle } from '../../styles';



const ModelDetails = ({ navigation }) => {
  
  const [showLoading, setShowLoading] = useState(false);
  const [HeaderTitle] = useState(navigation.getParam('HeaderTitle', 'NO-HEADER'));

  const [{ id, title, fullName, firstName, lastName, age, malady, desc, specialty, imgUrl }] = useState(navigation.getParam('Item', 'NO-ITEM'));


  const handleDelete = async () => {
    try {

      setShowLoading(true);
      let token = `Bearer ${await AsyncStorage.getItem('userToken')}`;

      switch (HeaderTitle) {
        case __BED__: { 
          await deleteBed(id, token);
          break;
        }
        case __DOCTOR__: { 
          await deleteDoctor(id, token);
          break;
        }
        case __PATIENT__: { 
          await deletePatient(id, token);
          break;
        }
        default:  {
          await deleteRoom(id, token);
          break;
        }
      }

      navigation.navigate('Home');
      ToastAndroid.showWithGravity(__SUCCESS_REQUEST__, ToastAndroid.SHORT, ToastAndroid.CENTER);
      setShowLoading(false);
    } catch (error) {
      setShowLoading(false);
      ToastAndroid.showWithGravity(__CATCH_REQUEST__, ToastAndroid.SHORT, ToastAndroid.CENTER);
    }
  }


  return (
    <Container title={HeaderTitle} navigation={navigation}>
      <Title content={HeaderTitle} /> 
      <Img src={imgUrl} buttomLine={true} style={ModelDetailsStyle.ImgStyle} />
      <ScrollView style={ModelDetailsStyle.Container}>
        { 
          HeaderTitle === __ROOM__
                    && 
          <TextContent content={`Title : ${title}`} /> 
        }

        {
          HeaderTitle === __DOCTOR__ 
                    && 
          <TextContent content={`Full Name: ${fullName}`} />
        }  

        {
          HeaderTitle === __PATIENT__ 
                    && 
          <Fragment>
            <TextContent content={`First Name : ${firstName}`} />
            <TextContent content={`Last Name : ${lastName}`} />
          </Fragment>
        }

        {
          ( HeaderTitle === __DOCTOR__ 
                    || 
          HeaderTitle === __PATIENT__ )
                    && 
          <TextContent content={`Age: ${age}`} />
        }  

        {
          HeaderTitle === __PATIENT__ 
                    && 
          <TextContent content={`Malady: ${malady}`} />
        } 

        {
          ( HeaderTitle === __DOCTOR__ 
                    || 
          HeaderTitle === __BED__ )
                    && 
          <TextContent content={`Description:  ${desc}`} />
        }

        {
          HeaderTitle === __DOCTOR__ 
                    && 
          <TextContent content={`Specialty: ${specialty}`} />
        }

        <BottomLine style={ModelDetailsStyle.BottomLineStyle} />

        <Loader loading={showLoading} color={__ORANGE__} size='large' />
        
        <Button 
          title='Remove  ❌'
          type='outline'
          onPress={handleDelete}
          containerStyle={ModelDetailsStyle.BtnContainerStyle}
        /> 

      </ScrollView>
    </Container>
  );
}


export { ModelDetails };