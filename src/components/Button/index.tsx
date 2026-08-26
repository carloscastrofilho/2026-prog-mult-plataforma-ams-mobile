import { ReactNode } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

interface ButtonFatecProps {
  onFunctionButton?: () => void;
  titleButton?: string;
  icon?: ReactNode;
  styleButton?: StyleProp<ViewStyle>;
  styleTitle?: StyleProp<TextStyle>;
}

export default function ButtonFatec({
  onFunctionButton,
  titleButton,
  icon,
  styleButton,
  styleTitle,
}: ButtonFatecProps) {
  return (
    <TouchableOpacity
      style={[estilos.button, styleButton]}
      onPress={() => {
        onFunctionButton ? onFunctionButton() : console.log("");
      }}
    >
      {icon}
      <Text style={[estilos.buttonText, styleTitle]}>{titleButton}</Text>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  button: {
    backgroundColor: "green",
    width: "80%",
    height: 46,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginTop: 30,
    flexDirection: "row",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 600,
    marginLeft: 25,
  },
});
