import React,{ useState, useEffect } from 'react';
import { FlatList } from 'react-native';



const ListContainer = ({ DataList, component }) => {

  const [data, setData] = useState({});

  useEffect(() => {
    setData(DataList);
  }, [DataList]);

  return (
    <FlatList
      data={data}
      renderItem={component}
      keyExtractor={item => item.id}
    />
  )
}


export { ListContainer };