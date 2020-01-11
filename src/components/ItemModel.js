import React from 'react';
import { ListItem } from 'react-native-elements';
import { __BED__, __DOCTOR__, __PATIENT__ } from '../constants';



const ItemModel = ({ navigation, HeaderTitle, item, index, type }) => { 
  
  let title, subtitle, imgSrc;
  
  switch (type.toLowerCase()) {
    case __BED__.toLowerCase(): {
      title = `Bed N: ${index + 1}`;
      subtitle = `Desc: ${item.desc}`;
      imgSrc = item.imgUrl;
      break;
    }
    case __DOCTOR__.toLowerCase(): {
      title = item.fullName;
      subtitle = `Desc: ${item.desc}`;
      imgSrc = item.imgUrl;
      break;
    }
    case __PATIENT__.toLowerCase(): {
      title = `${item.firstName} ${item.lastName}`;
      subtitle = ` Age: ${item.age} \n Malady : ${item.malady} ..`;
      imgSrc = item.imgUrl;
      break;
    }
    default: {
      title = `Room N: ${index + 1}`;
      subtitle = ` Title: ${item.title}`;
      imgSrc = item.imgUrl;
      break;
    }
  }

  return (
    <ListItem
      title={title}
      subtitle={subtitle}
      leftAvatar={{ source: { uri: imgSrc } }}
      bottomDivider
      chevron
      onPress={() => navigation.navigate('ModelDetails', { HeaderTitle, Item: item })}
    />
  );

}


export { ItemModel };