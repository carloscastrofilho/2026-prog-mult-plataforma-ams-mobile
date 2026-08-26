import { Image, StyleSheet, View } from "react-native";

function LogoApp() {
  return (
    <View style={estilos.container}>
      <Image
        style={estilos.imagem}
        source={require("@/assets/images/favicon.png")}
        alt="Logo da Empresa"
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  imagem: {
    width: 150,
    height: 160,
  },
  container: {
    backgroundColor: "#88dfec",
    padding: 10,
    borderRadius: 25,
  },
});

export default LogoApp;
