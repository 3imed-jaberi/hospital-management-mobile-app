import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import AppNavigator from './src';



const App = () => {

  const [isReady, setIsReady] = useState(false);


  const handleFinshLoading = () => setIsReady(true);


  const loadAssets = async () => {

    const cacheImages = (images) => images.map(image => (typeof image === 'string') ? Image.prefetch(image) : Asset.fromModule(image).downloadAsync());

    const imageAssets = cacheImages([
      require('./src/assets/add.png'),
      require('./src/assets/auth-logo.png'),
      require('./src/assets/bed.png'),
      require('./src/assets/bg.png'),
      require('./src/assets/doctor.png'),
      require('./src/assets/logo.png'),
      require('./src/assets/patient.png'),
      require('./src/assets/room.png'),
      require('./src/assets/show.png'),
      require('./src/assets/splash.png')
    ]);

    await Promise.all([...imageAssets]);
  }

  return(
    !isReady 
        ? 
    <AppLoading
      startAsync={loadAssets}
      onFinish={handleFinshLoading}
      onError={console.warn}
    />
        :
    <AppNavigator />
  );    
}


export default App ;