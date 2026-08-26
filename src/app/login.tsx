import Ionicons from "@expo/vector-icons/Ionicons";
import { Alert, Text, TextInput, View } from "react-native";

import ButtonFatec from "@/components/Button";
import LogoApp from "@/components/LogoApp";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import styles from "./logincss";

export default function Index() {
  const [login, setLogin] = useState<string>();
  const [password, setPassword] = useState<string>();
  const router = useRouter();

  function onPressButton() {
    if (login == "teste" && password == "123") {
      router.navigate("/(dash)");
    } else {
      Alert.alert("senha ou password Invalido !");
    }
  }

  return (
    <View style={styles.container}>
      <LogoApp />
      <Text style={styles.titulo}>Login</Text>
      <Text style={styles.subtitulo}>
        Bem vindo, estamos pelo seu retorno, faça o login...
      </Text>

      <Text style={styles.inputText}>Login</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => {
          setLogin(value);
        }}
        placeholder="informe o login..."
        autoFocus
      />

      <Text style={styles.inputText}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="informe a senha de acesso..."
        secureTextEntry
        maxLength={12}
        onChangeText={(value) => {
          setPassword(value);
        }}
      />

      <Text style={styles.subtitulo}>
        Caso não possua registro.
        <Link style={{ color: "red" }} href={"/register"}>
          Registre-se aqui
        </Link>
      </Text>

      <ButtonFatec
        onFunctionButton={onPressButton}
        titleButton="Acessar"
        icon={<Ionicons name="checkmark-circle" size={36} color="#cceb77" />}
        styleButton={{ backgroundColor: "red" }}
        styleTitle={{ fontSize: 26 }}
      />
    </View>
  );
}
