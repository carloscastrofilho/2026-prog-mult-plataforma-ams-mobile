import ButtonFatec from "@/components/Button";
import { View , Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Index(){
    const router = useRouter();

    function onClickClose(){
        router.navigate("../");
    }
    return (
        <View style={estilos.container}>
            <Text> Dasboard </Text>
            <ButtonFatec 
                onFunctionButton= {onClickClose}
                titleButton= "Sair"
                 />
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