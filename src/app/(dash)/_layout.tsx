import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function RootLayout() {
  return (
  <Tabs
   screenOptions={{
            tabBarActiveTintColor: '#007AFF', // Cor do ícone/texto quando selecionado
            tabBarInactiveTintColor: '#eeeef5', // Cor quando não selecionado
            tabBarStyle: {
              backgroundColor: '#22ca2a', // Cor de fundo da barra
              borderTopWidth: 0,          // Remove a linha padrão superior
              elevation: 5,               // Sombra para Android
              shadowOpacity: 0.1,         // Sombra para iOS
              height: 60,                 // Altura da barra
              paddingBottom: 8,           // Espaçamento interno inferior
              borderTopEndRadius: 20,         
              borderTopStartRadius: 20, 
            },
            headerShown: false ,
            tabBarLabelStyle: {
              fontSize: 12,               // Tamanho do texto das abas
            },
          }}
    >
     <Tabs.Screen
        name="index"
        options={
          {
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home" color={color} />,
        }
        }
     />
     <Tabs.Screen 
        name="clientes"
        options={{
          title: "Clientes",
          tabBarIcon: ({color, size}) => <Ionicons size={size} name="airplane" color={color} />,
        }}
     />

     
  </Tabs>
  );
}