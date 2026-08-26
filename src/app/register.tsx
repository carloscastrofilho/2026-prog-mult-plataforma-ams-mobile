import { Text, TextInput, View } from "react-native";

import ButtonFatec from "@/components/Button";
import LogoApp from "@/components/LogoApp";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import styles from "./logincss";

export default function Register() {
  const [login, setLogin] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [fullname, setFullname] = useState<string>();

  const router = useRouter();
  function onPressButton() {
    router.navigate("/");
  }

  return (
    <View style={styles.container}>
      <LogoApp />
      <Text style={styles.titulo}>Registro</Text>
      <Text style={styles.subtitulo}>Estmos feliz com sua escola.</Text>

      <Text style={styles.inputText}>Nome Completo</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => {
          setFullname(value);
        }}
        placeholder="informe o Completo sem Abreviação..."
        maxLength={60}
        autoFocus
      />

      <Text style={styles.inputText}>Login</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => {
          setLogin(value);
        }}
        placeholder="informe o login..."
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
        Já possui Registro!,
        <Link style={{ color: "red" }} href={"/"}>
          volte para o login
        </Link>
      </Text>
      <ButtonFatec
        onFunctionButton={onPressButton}
        titleButton="Registrar"
        icon={<Ionicons name="checkmark-sharp" size={32} color="#fff" />}
      />
    </View>
  );
}
