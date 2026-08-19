import { View , Text, StyleSheet } from "react-native";

export default function Clientes(){
    return (
        <View style={estilos.container}>
            <Text> clientes </Text>
        </View>
    )
}

const estilos = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
        }
    }
)