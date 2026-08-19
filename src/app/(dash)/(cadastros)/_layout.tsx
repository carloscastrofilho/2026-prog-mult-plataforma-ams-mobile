import { Drawer } from "expo-router/drawer";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function RootLayout() {
  return <Drawer screenOptions={{
    headerShown: true ,
  }}>
    <Drawer.Screen
      name="fornecedores"
      options={{
        title:"Fornecedores",
      }}
     />
     <Drawer.Screen
        name="vendedores"
        options={{
          title: "Parceiros"
        }}
     />
     <Drawer.Screen
        name="index"
        options={{
          title: "Clientes",
           drawerIcon: ({color, size}) => <Ionicons size={size} name="airplane" color={color} />,
        }}
      
     />
  </Drawer>
  
  ;
}