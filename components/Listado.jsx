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
    //Touchable opacity reemplaza el view
    //<View style={styles.elemento}>
    //</View>
    return <TouchableOpacity style={styles.elemento} onPress={
        () => Alert.alert('Contactos', `Contactando a ${elemento.id} - ${elemento.titulo}`)
        }>
        <Image source={{
          uri: elemento.urlImagen
        }}
        style={styles.imagen}
        >
        </Image>
        <Text>{elemento.titulo}</Text>
    </TouchableOpacity> 
}

const Listado = () => {
    return(
        <SafeAreaView style={styles.contenedor}>
            <FlatList
                data={DATOS_API}
                renderItem={({item}) => <ElementoLista elemento={item}/>}
                keyExtractor={(elemento) => elemento.id}
            />
        </SafeAreaView>
    )
}

export default Listado


const styles = StyleSheet.create({
    contenedor:{
        flex: 1,
        backgroundColor: "#fff"
    },
    elemento:{
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc"
    },
    imagen:{
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 25
    }
})