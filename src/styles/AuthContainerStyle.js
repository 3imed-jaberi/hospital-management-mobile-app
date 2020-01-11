import { StyleSheet } from 'react-native';
  


const AuthContainerStyle = StyleSheet.create({
  bgStyle: { 
    flex: 1, 
    width: '100%', 
    height: '100%' 
  },
  listStyle: { 
    padding: 20 
  },
  authLogoContainer: { 
    flex: 5.8, 
    justifyContent : 'center', 
    alignItems: 'center', 
    paddingTop: 10 
  },
  subText: {
    textAlign: 'center', 
    fontSize: 16, 
    color: '#ffffff', 
    padding: '5%'
  },
  loginBtnContainer: {
    paddingTop: '20%',
    paddingLeft: '10%',
    paddingRight: '10%',
    marginBottom: '1%'
  },
  loginBtnStyle: {
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
    borderWidth: 2,
    padding: 10
  },
  loginTextStyle: {
    color: '#000000',
    fontSize: 18,
  },
  registerBtnContainer: {
    paddingTop: '5%',
    paddingLeft: '10%',
    paddingRight: '10%',
    marginBottom: '1%'
  },
  registerBtnStyle: {
    borderColor: '#ffffff',
    borderWidth: 2,
    padding: 10
  },
  registerTextStyle: {
    color: '#ffffff',
    fontSize: 18
  }
});


export { AuthContainerStyle };