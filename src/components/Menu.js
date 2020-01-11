import React from 'react';
import { ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';
import { MenuStyle } from '../styles';
import { 
  __BED_MENU_LOGO__,
  __DOCTOR_MENU_LOGO__,
  __PATIENT_MENU_LOGO__,
  __ROOM_MENU_LOGO__, 
  __BED__,
  __DOCTOR__,
  __PATIENT__,
  __ROOM__
} from '../constants';



const Item = ({ navigation, source, params }) => {

  const onPress = () => navigation.navigate('AddShow', params); 

  
  return (
    <Avatar
      size="large"
      source={source}
      onPress={onPress}
      containerStyle={MenuStyle.Avatar}
    />);
}



const Menu = ({ navigation }) => (<ScrollView contentContainerStyle={MenuStyle.Container}>

    {/*
      categories.map( (element,index) => <Item navigation={navigation} navigateTo={element.navigateTo} params={element.params} key={index} source={element.uri} title={element.title} />)
    */}

    <Item source={require('../assets/bed.png')} navigation={navigation} params={{ HeaderTitle: __BED__ }}/> 
    <Item source={require('../assets/doctor.png')} navigation={navigation} params={{ HeaderTitle: __DOCTOR__ }}/>
    <Item source={require('../assets/patient.png')} navigation={navigation} params={{ HeaderTitle: __PATIENT__ }}/>
    <Item source={require('../assets/room.png')} navigation={navigation} params={{ HeaderTitle: __ROOM__ }}/>

  </ScrollView>
);


export { Menu }; 