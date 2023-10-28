import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
//import Listado from './components/Listado'
//import Grid from './components/Grid'
import ModalPersonalizada from './components/Modal';
import { NavigationContainer } from '@react-navigation/native';
import styles from './styles/styles'

export default function App() {

  return (
    <NavigationContainer style={styles.container}>
    {/* <View style={styles.container}> */}
      {/*<Grid />*/}
      {/*<Listado/>*/}
      <ModalPersonalizada />
      <StatusBar style="auto" />
    {/* </View> */}
    </NavigationContainer>
  );
}
