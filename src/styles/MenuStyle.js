import { StyleSheet } from 'react-native';
  


const MenuStyle = StyleSheet.create({
  Container: { 
    flexGrow : 1,
    flexDirection: 'row',
    justifyContent : 'space-around',
    flexWrap: 'wrap'
  },
  Avatar: {
    margin: '5%',
    marginTop: '10%',
    height: '30%',
    width: '33%'
  }
});


export { MenuStyle };