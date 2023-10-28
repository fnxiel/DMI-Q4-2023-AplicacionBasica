import { View, Text } from "react-native";

export default function Encabezado(props){
    return <View>
        <Text>{props.titulo}</Text>
      <Text>{props.descripcion}</Text>
    </View>
}