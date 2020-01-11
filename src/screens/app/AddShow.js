import React, { useState } from 'react';
import Container from './container';
import { CircleButton } from '../../components';



const AddShow = ({ navigation }) => {
  
  const [HeaderTitle] = useState(navigation.getParam('HeaderTitle', 'NO-HEADER'));

  const goTo = (Direction) => ( navigation.navigate(Direction, { HeaderTitle }) );


  return (
    <Container title={HeaderTitle} navigation={navigation}>

      <CircleButton 
        content='Show'
        iconSource={require('../../assets/show.png')}
        onPress={() => goTo('Show')}
      />

      <CircleButton 
        content='Add'
        iconSource={require('../../assets/add.png')}
        onPress={() => goTo('Add')}
      />

    </Container>
  );
}


export { AddShow };