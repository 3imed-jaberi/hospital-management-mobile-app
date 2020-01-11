import React, { useState, useEffect } from 'react';
import { AsyncStorage, ToastAndroid } from 'react-native';
import Container from './container';
import { ListContainer, ItemModel } from '../../components';
import Loader from "react-native-modal-loader";
import { getBeds, getDoctors, getPatients, getRooms } from '../../services';
import { __ORANGE__, __CATCH_REQUEST__, __BED__, __DOCTOR__, __PATIENT__ } from '../../constants';



const Show = ({ navigation }) => {

  const [showLoading, setShowLoading] = useState(false);
  const [HeaderTitle] = useState(navigation.getParam('HeaderTitle', 'NO-HEADER'));
  const [data, setData] = useState([]);


  useEffect(() => {
    setShowLoading(true);
    (async () => {
      try {

        let result;
        let token = `Bearer ${await AsyncStorage.getItem('userToken')}`;

        switch (HeaderTitle) {
          case __BED__: { 
            result = await getBeds(token);
            break;
          }
          case __DOCTOR__: { 
            result = await getDoctors(token);
            break;
          }
          case __PATIENT__: { 
            result = await getPatients(token);
            break;
          }
          default:  {
            result = await getRooms(token);
            break;
          }
        }
        setShowLoading(false);
        setData(result.data);
      } catch (error) {
        setShowLoading(false);
        ToastAndroid.showWithGravity(__CATCH_REQUEST__, ToastAndroid.SHORT, ToastAndroid.CENTER);
      }
    })();
  }, []);


  return (
    <Container title={HeaderTitle} navigation={navigation}> 

      <Loader loading={showLoading} color={__ORANGE__} size='large' />
    
      <ListContainer 
        DataList={data} 
        component={({ item, index }) => <ItemModel navigation={navigation} HeaderTitle={HeaderTitle} item={item} index={index} type={HeaderTitle} />}
      />

    </Container>
  );
}


export { Show };