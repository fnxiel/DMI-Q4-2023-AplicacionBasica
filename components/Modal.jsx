import React, {useState} from 'react'
import {View, Text, Modal, Button, StyleSheet} from 'react-native'

const ModalPersonalizada = () => {
    const [modalVisible, setModalVisible] = useState(false)
    
    return <View style={styles.contenedor}>
        <Button title="Abrir modal" onPress={() => setModalVisible(!modalVisible)}/>
        <Modal
            animationType='fade'
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(false)
            }}
        >
            <View styles={styles.modalContenedor}>
                <View style={styles.modalContenido}>
                    <Text>Este es el texto que se muestra dentro de una modal</Text>
                    <Button title='Cerrar modal' onPress={() => setModalVisible(false)} />
                </View>
            </View>
        </Modal>
    </View>
}

export default ModalPersonalizada

const styles = StyleSheet.create({
    contenedor:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    modalContenedor:{
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalContenido:{
        backgroundColor: "#fff",
        padding:20,
        borderRadius: 10,
        alignItems: 'center'
    }

})