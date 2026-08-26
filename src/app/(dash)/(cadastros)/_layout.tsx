import Ionicons from "@expo/vector-icons/Ionicons";
import { Drawer } from "expo-router/drawer";

export default function CadastroLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
      }}
    >
      <Drawer.Screen
        name="fornecedores"
        options={{
          title: "Fornecedores",
        }}
      />
      <Drawer.Screen
        name="vendedores"
        options={{
          title: "Parceiros",
        }}
      />
      <Drawer.Screen
        name="index"
        options={{
          title: "Clientes",
          drawerIcon: ({ color, size }) => (
            <Ionicons size={size} name="airplane" color={color} />
          ),
        }}
      />
    </Drawer>
  );
}
