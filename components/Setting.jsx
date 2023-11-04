import { View, Text, Button } from "react-native";

export default function Home(){
    return <View>
        <Text>Settings</Text>
      <Text>Aqui puede cambiar las opciones</Text>
      <Button title="Cambiar opciones" onPress={() => console.log("Se cambio una opción")} ></Button>
    </View>
}