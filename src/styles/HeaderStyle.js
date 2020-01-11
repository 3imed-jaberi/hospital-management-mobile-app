import { StyleSheet } from 'react-native';
  


const HeaderStyle = StyleSheet.create({
  AuthHeaderLogoContainer: {  
    flex: 6,
    justifyContent : 'center', 
    alignItems: 'center' 
  },
  AuthHeaderLogoImg: { 
    height: '80%',
    width: '40%' 
  },
  HeaderContainer:{
    backgroundColor: '#ff6600'
  },
  CentreComponent: { 
    color: '#fff' 
  },
  AuthHeaderContainer: {
    flex: 1,
    alignItems: 'flex-start',
    paddingTop: '10%',
    paddingLeft: '5%' 
  },
  AuthLogoImg: {
    height: '60%', 
    width: '50%'
  }
});


export { HeaderStyle };