import { Text, View, StyleSheet, TextInput, Image, Button } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
      <TextInput style={{width: "100%", backgroundColor: "red"}}/>
      <Image source={require("@/assets/images/favicon.png")}/>
      <Button title="Acessar"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
