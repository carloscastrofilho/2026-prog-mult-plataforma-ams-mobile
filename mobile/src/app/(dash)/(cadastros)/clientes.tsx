import * as api from "@/api/apiClientes";
import ButtonFatec from "@/components/Button";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Clientes() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    async function listaCarregando() {
      const response = await api.get();
      setLista(response.data);
    }
    listaCarregando();
  }, [lista]);

  async function ApagarRegistro({
    item,
  }: {
    item: { id: string; nome: string; email: string; telefone: string };
  }) {
    const id = parseInt(item.id);
    const response = api.apagar(id);
    if (response.message !== "sucess") {
      Alert.alert("falha ao excluir registro");
      return;
    }
    Alert.alert("sucesso ao excluir registro");
  }

  const renderItem = ({
    item,
  }: {
    item: { id: string; nome: string; email: string; telefone: string };
  }) => (
    <View style={estilos.itemContainer}>
      <Text style={estilos.nome}>{item.nome}</Text>
      <Text style={estilos.nome}>{item.email}</Text>
      <Text style={estilos.nome}>{item.telefone}</Text>
      <View style={{ flexDirection: "row", gap: 5 }}>
        <ButtonFatec
          styleButton={{
            backgroundColor: "blue",
            width: 50,
            padding: 2,
            height: 35,
            borderRadius: 10,
          }}
          icon={<MaterialIcons name="mode-edit" size={24} color="white" />}
        />
        <ButtonFatec
          styleButton={{
            backgroundColor: "red",
            alignItems: "center",
            justifyContent: "center",
            width: 50,
            padding: 2,
            height: 35,
            borderRadius: 10,
          }}
          icon={<MaterialIcons name="delete" size={24} color="white" />}
        />
      </View>
    </View>
  );

  return (
    <View style={estilos.container}>
      <View style={estilos.header}>
        <Text style={estilos.title}> CADASTRO CLIENTES</Text>
        <ButtonFatec
          styleButton={{
            backgroundColor: "red",
            width: 90,
            padding: 2,
            height: 35,
            borderRadius: 10,
          }}
          titleButton="New"
          icon={<MaterialIcons name="add-circle" size={24} color="white" />}
        />
      </View>

      <SafeAreaView style={estilos.lista}>
        <FlatList
          data={lista}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 10,
    paddingHorizontal: 16,
    backgroundColor: "#F9F9F9",
  },
  header: {
    height: 50,
    padding: 5,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around",
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#DDD",
    marginBottom: 10,
  },
  title: {
    fontWeight: "700", // Corrigido para string (boa prática no React Native)
    fontSize: 16,
    color: "green",
    height: 30,
    textAlign: "center",
  },
  lista: {
    flex: 1,
    width: "100%",
  },
  itemContainer: {
    backgroundColor: "#FFFFFF",
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  nome: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  texto: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  separador: {
    height: 10, // Espaço entre os cards listados
  },
});
