import React from 'react'
import Cesta from './src/telas/Cesta'
import { StatusBar, SafeAreaView, View } from 'react-native'

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  )
}
