import Ionicons from "@expo/vector-icons/Ionicons"
import { TouchableOpacity ,Text , StyleSheet} from "react-native"

export default function ButtonFatec( 
  {
  onFunctionButton,titleButton
} :{
  onFunctionButton:()=>void;
  titleButton:string }
){
    return (
        <TouchableOpacity 
        style={ estilos.button}
        onPress={()=>{onFunctionButton()}}
        >
        <Ionicons name="checkmark-circle" size={32} color="#fff" />
        <Text 
          style={ estilos.buttonText }
         >
          {titleButton}
         </Text> 
      </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    button:{
    backgroundColor: "green",
    width: "80%",
    height: 46,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginTop: 30,
    flexDirection: "row",
    
  },
  buttonText : {
    color: "#fff",
    fontSize: 18,
    fontWeight: 600,
    marginLeft: 25,
  }
});


