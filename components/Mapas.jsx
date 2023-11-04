import React, { useState } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, View, Text, Button } from 'react-native';

let puntosDeInteres = [
    {
        titulo: "Ubicacion 1",
        ubicacion: {
            latitude: 14.555285993947152,
            longitude: -86.56461460850234,
        },
        descripcion: "Destino turistico de interes en honduras 1."
    },
    {
        titulo: "Ubicacion 2",
        ubicacion: {
            latitude: 15.055285993947152,
            longitude: -86.56461460850234,
        },
        descripcion: "Destino turistico de interes en honduras 2."
    },
    {
        titulo: "Ubicacion 3",
        ubicacion: {
            latitude: 15.555285993947152,
            longitude: -87.56461460850234,
        },
        descripcion: "Destino turistico de interes en honduras 3."
    },
]

//POI = Point of Interest = Punto de interes
export default function Mapas() {
    const [coordenadas, setCoordenadas] = useState(
        {
            latitude: 16.0000285993947152, 
            longitude: -87.56461460850234
        })

    const mostrarPOI = () =>{
        //Marker
        return puntosDeInteres.map((poi, i) =>
        <Marker
            key={i}
            coordinate={poi.ubicacion}
            title={poi.titulo}
            description={poi.descripcion}
        />
        )
    }
  console.log(coordenadas)
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
        onRegionChange={(region) => console.log(region)}
        initialRegion={{"latitude": 14.555285993947152, "latitudeDelta": 12.449216950003548, "longitude": -86.56461460850234, "longitudeDelta": 7.338866643260047}}
      >
        {mostrarPOI()}
        <Marker
            draggable
            coordinate={coordenadas}
            onDragEnd={e => setCoordenadas(e.nativeEvent.coordinate)}
            title="Una ubicacion más"
            description="Un destino 5 estrellas"
        />
        <Marker
            pinColor='green'
            coordinate={{
                latitude: 17.0000285993947152, 
                longitude: -87.56461460850234
            }}
            title="Destacado"
            description="Un destino turistico nuevo"
        >
            <Callout onPress={() => console.log(coordenadas)}>
                <Text>
                    Tiene muchas amenindades
                </Text>
                <Text>
                    Admiten mascotas
                </Text>
                <Button title='Me gusta' />
            </Callout>
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
