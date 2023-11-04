import React from 'react'
import {View, FlatList, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native'


const DATOS_API = [
    {
        id: '1',
        urlImagen: 'https://picsum.photos/id/100/200/200',
        titulo: 'Elemento numero 1'
    },
    {
        id: '2',
        urlImagen: 'https://picsum.photos/id/110/200/200',
        titulo: 'Elemento numero 2'
    },
    {
        id: '3',
        urlImagen: 'https://picsum.photos/id/120/200/200',
        titulo: 'Elemento numero 3'
    },
    {
        id: '4',
        urlImagen: 'https://picsum.photos/id/130/200/200',
        titulo: 'Elemento numero 4'
    },
    {
        id: '5',
        urlImagen: 'https://picsum.photos/id/100/200/200',
        titulo: 'Elemento numero 5'
    },
    {
        id: '6',
        urlImagen: 'https://picsum.photos/id/110/200/200',
        titulo: 'Elemento numero 6'
    },
    {
        id: '7',
        urlImagen: 'https://picsum.photos/id/120/200/200',
        titulo: 'Elemento numero 7'
    },
    {
        id: '8',
        urlImagen: 'https://picsum.photos/id/130/200/200',
        titulo: 'Elemento numero 8'
    },
    {
        id: '9',
        urlImagen: 'https://picsum.photos/id/100/200/200',
        titulo: 'Elemento numero 9'
    },
    {
        id: '10',
        urlImagen: 'https://picsum.photos/id/110/200/200',
        titulo: 'Elemento numero 10'
    },
    {
        id: '11',
        urlImagen: 'https://picsum.photos/id/120/200/200',
        titulo: 'Elemento numero 11'
    },
    {
        id: '12',
        urlImagen: 'https://picsum.photos/id/130/200/200',
        titulo: 'Elemento numero 12'
    },

]

const ElementoLista = ({elemento}) => {
    return <TouchableOpacity style={styles.elemento} onPress={
        () => Alert.alert('Contactos', `Contactando a ${elemento.id} - ${elemento.titulo}`)
        }>
        <Text>{elemento.titulo}</Text>
    </TouchableOpacity> 
}

const Grid = () => {
    return(
        <SafeAreaView style={styles.contenedor}>
            <FlatList
                data={DATOS_API}
                renderItem={({item}) => <ElementoLista elemento={item}/>}
                keyExtractor={(elemento) => elemento.id}
                numColumns={3}
            />
        </SafeAreaView>
    )
}

export default Grid


const styles = StyleSheet.create({
    contenedor:{
        flex: 1,
        padding: 10,
    },
    elemento:{
        flex: 1,
        margin: 10,
        padding: 20,
        backgroundColor: "#eee",
        alignItems: "center",
        justifyContent: "center"
    },
})