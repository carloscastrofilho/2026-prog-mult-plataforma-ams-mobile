import { View , Text, StyleSheet } from "react-native";

export default function Fornecedores(){
    return (
        <View style={estilos.container}>
            <Text> Fornecedores </Text>
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