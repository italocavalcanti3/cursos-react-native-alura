import React from 'react'
import AppLoading from 'expo-app-loading'
import { StatusBar, SafeAreaView, View } from 'react-native'
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat'

import Cesta from './src/telas/Cesta'
import mock from './src/mocks/cesta'

export default function App() {
  const [fonteCarregada] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold
  })

  if (!fonteCarregada) {
    return <AppLoading />
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  )
}
