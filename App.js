import { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import * as Font from 'expo-font'
import Home from './screens/Home';
import { useState } from 'react';
import Apploading from 'expo-app-loading'

const getFonts = () => Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
})

export default function App() {
  const [ fontsLoaded, setFontsLoaded ] = useState(false)

  if(fontsLoaded) {
    return (
      <Home />
    );
  } else {
    return (
      <Apploading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(err) => {
          console.log(err);
        }}
      />
    )
  }
}

//IMPLEMENT THE EXPO-SPLASH-SCREEN INTO THIS ASAP