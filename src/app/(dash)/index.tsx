import ButtonFatec from "@/components/Button";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../utils/AuthContext";

export default function Index() {
  const router = useRouter();
  const auth = useContext(AuthContext);
  function onClickClose() {
    //router.navigate("../");
    auth.logOut();
  }
  return (
    <View style={estilos.container}>
      <Text> Dasboard </Text>
      <ButtonFatec onFunctionButton={onClickClose} titleButton="Sair" />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
