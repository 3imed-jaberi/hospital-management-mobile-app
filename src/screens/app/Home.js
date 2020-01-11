import React from 'react';
import Container from './container';
import { Menu, Title } from '../../components';
import { __HOME_TITLE__ } from '../../constants';



const Home = ({ navigation }) => (<Container navigation={navigation}> 
  <Title content={__HOME_TITLE__} />    
  <Menu navigation={navigation} />
</Container>);


export { Home };