import { StyleSheet } from 'react-native';
  


const CircleButtonStyle = StyleSheet.create({
  Content: { 
    color:'#ce2058',
    margin: 10,
    fontSize: 12,
    fontWeight: 'bold'
  },
  Icon: { 
    width: '100%',
    height: '100%'
  },
  Style: { 
    height: '45%',
    width: '32%'
  },
  Container: { 
    flex: 1,
    justifyContent : 'center',
    alignItems: 'center' 
  }
});


export { CircleButtonStyle };