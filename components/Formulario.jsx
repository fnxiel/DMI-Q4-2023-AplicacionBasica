import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Button, Alert } from 'react-native';
import Encabezado from './components/Encabezado';
import styles from './styles/styles'

const Formulario = () => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [comentario, setComentario] = useState('');

    return <View>
    <Encabezado titulo="Primer encabezado" descripcion="lorem impsun"></Encabezado>
      <Encabezado titulo="Segundo encabezado" descripcion="dolor sit amed"></Encabezado>
      <Encabezado titulo="Tercer encabezado" descripcion="Otro valor de descripcion"></Encabezado>
      <Text>Nombre:</Text>
      <TextInput
        placeholder='Nombre'
        style={styles.input}
        onChangeText={setNombre}
        value={nombre}
      />
      <Text>Apellido:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setApellido}
        value={apellido}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <Text>Comentarios:</Text>
      <TextInput
        style={styles.inputMultilinea}
        onChangeText={setComentario}
        value={comentario}
        placeholder="Texto multilinea"
        multiline
        numberOfLines={4}
        keyboardType="numeric"
      />
      <Button
        onPress={
          () => {
            console.log(nombre, apellido, comentario)
            console.log("El nombre de la persona es", nombre)
            Alert.alert("Saludar", `Hola ${nombre} ${apellido}`)
          }
        }
        title="Saludar"
        color="#841584"
        accessibilityLabel="Saluda a la persona"
      />
      </View>
}

export default Formulario
