import React from 'react'
import Cesta from './src/telas/Cesta'
import { StatusBar, SafeAreaView, View } from 'react-native'
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat'

export default function App() {
  const [fonteCarregada] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold
  })

  if (!fonteCarregada) {
    return <View />
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  )
}
