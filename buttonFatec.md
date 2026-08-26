Para passar o ícone diretamente de onde o componente é chamado, use a prop `icon` do tipo `React.ReactNode`. Assim, você remove completamente a importação de biblioteca de ícones de dentro do `ButtonFatec` e ganha flexibilidade para usar qualquer família de ícones (Ionicons, FontAwesome, MaterialIcons, SVGs, etc.).

### 1. Componente `ButtonFatec.tsx` (Sem import de ícones)

```tsx
import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";

interface ButtonFatecProps {
  onFunctionButton: () => void;
  titleButton: string;
  icon?: React.ReactNode; // Aceita qualquer componente JSX de ícone
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export default function ButtonFatec({
  onFunctionButton,
  titleButton,
  icon,
  buttonStyle,
  textStyle,
}: ButtonFatecProps) {
  return (
    <TouchableOpacity
      style={[estilos.button, buttonStyle]}
      onPress={onFunctionButton}
    >
      {icon}
      <Text style={[estilos.buttonText, textStyle]}>{titleButton}</Text>
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
    fontWeight: "600",
    marginLeft: 10,
  },
});
```

---

### 2. Como usar no local de chamada (`App.tsx` ou Telas)

No arquivo da tela onde o botão for renderizado, importe a biblioteca de ícones desejada e passe o ícone já instanciado via prop `icon`:

```tsx
import { View, StyleSheet } from "react-native";
import ButtonFatec from "./ButtonFatec";

// Importa os ícones apenas onde for usar
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function HomeScreen() {
  return (
    <View style={estilos.container}>
      {/* Exemplo 1: Usando Ionicons */}
      <ButtonFatec
        titleButton="Confirmar"
        onFunctionButton={() => console.log("Confirmado")}
        icon={<Ionicons name="checkmark-circle" size={24} color="#fff" />}
      />

      {/* Exemplo 2: Usando FontAwesome e personalizando o estilo */}
      <ButtonFatec
        titleButton="Editar Perfil"
        onFunctionButton={() => console.log("Editar")}
        buttonStyle={{ backgroundColor: "#2196F3" }}
        icon={<FontAwesome name="edit" size={22} color="#fff" />}
      />

      {/* Exemplo 3: Botão sem ícone (opcional) */}
      <ButtonFatec
        titleButton="Apenas Texto"
        onFunctionButton={() => console.log("Sem ícone")}
        buttonStyle={{ backgroundColor: "#757575" }}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
```

**Conceitos pedagógicos importantes para explicar aos alunos:**

- **Desacoplamento e Padrão da Indústria (Inversão de Dependência)**: O botão não se importa se o ícone vem do `Ionicons`, `FontAwesome` ou de um SVG. Ele apenas reserva um espaço no layout para renderizar o que for passado em `icon`.
- **Flexibilidade da Prop `React.ReactNode**`: Permite passar qualquer elemento visual válido em React (componente JSX, texto, `null`ou`undefined`).
- **Renderização Condicional (`{icon}`)**: Se a prop `icon` não for enviada, o React ignora a linha e renderiza apenas o texto centralizado sem quebrar o componente.

versao children
A prop `children` permite que você passe o conteúdo do botão diretamente entre as tags de abertura e fechamento `<ButtonFatec>Conteúdo</ButtonFatec>`, tornando o uso do componente mais natural e alinhado ao padrão do React.

**1. Componente `ButtonFatec.tsx` reescrito**

```tsx
import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";

interface ButtonFatecProps {
  onFunctionButton: () => void;
  children: React.ReactNode; // Recebe o texto ou elemento passado entre as tags
  icon?: React.ReactNode;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export default function ButtonFatec({
  onFunctionButton,
  children,
  icon,
  buttonStyle,
  textStyle,
}: ButtonFatecProps) {
  return (
    <TouchableOpacity
      style={[estilos.button, buttonStyle]}
      onPress={onFunctionButton}
    >
      {icon}
      <Text style={[estilos.buttonText, textStyle]}>{children}</Text>
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
    fontWeight: "600",
    marginLeft: 10,
  },
});
```

---

**2. Exemplo de uso na tela**

```tsx
import { View, StyleSheet } from "react-native";
import ButtonFatec from "./ButtonFatec";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function HomeScreen() {
  return (
    <View style={estilos.container}>
      {/* O texto do botão agora vai entre a tag de abertura e fechamento */}
      <ButtonFatec
        onFunctionButton={() => console.log("Salvo!")}
        icon={<Ionicons name="checkmark-circle" size={24} color="#fff" />}
      >
        Salvar Alterações
      </ButtonFatec>

      {/* Exemplo simples apenas com texto */}
      <ButtonFatec
        onFunctionButton={() => console.log("Cancelado!")}
        buttonStyle={{ backgroundColor: "#d32f2f" }}
      >
        Cancelar
      </ButtonFatec>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
```

---

**Conceitos pedagógicos para ensinar aos alunos:**

- **Composição de Componentes (Composition)**: Ensinar que o React prefere composição em vez de prop idêntica a dados. O padrão `<Tag>Filho</Tag>` reflete a sintaxe HTML com a qual eles já são familiarizados.
- **Prop Reservada `children**`: Explicar que toda vez que você passa algo dentro das tags JSX de um componente customizado, o React injeta automaticamente esse valor dentro de `props.children`.
- **Flexibilidade Visual**: Ao usar `React.ReactNode` para o `children`, o botão se torna preparado para receber textos normais, variáveis interpoladas ou até mesmo formatações inline sem precisar alterar o código interno do componente.

refatoramento 3 : desing patter composição
O padrão de **Composição (Compound Components Pattern)** divide o componente principal em subcomponentes especializados (`Root`, `Icon` e `Text`). Em vez de gerenciar props condicionais complexas, quem consome o botão monta o layout de forma declarativa.

### 1. Componente `ButtonFatec.tsx` (Padrão de Composição)

```tsx
import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  TextProps,
  StyleSheet,
  View,
} from "react-native";

// 1. Subcomponente Container (Root)
interface ButtonRootProps extends TouchableOpacityProps {
  children: React.ReactNode;
}

function ButtonRoot({ children, style, ...rest }: ButtonRootProps) {
  return (
    <TouchableOpacity
      style={[estilos.button, style]}
      activeOpacity={0.7}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  );
}

// 2. Subcomponente para o Ícone
interface ButtonIconProps {
  children: React.ReactNode;
}

function ButtonIcon({ children }: ButtonIconProps) {
  return <View style={estilos.iconContainer}>{children}</View>;
}

// 3. Subcomponente para o Texto
interface ButtonTextProps extends TextProps {
  children: React.ReactNode;
}

function ButtonText({ children, style, ...rest }: ButtonTextProps) {
  return (
    <Text style={[estilos.buttonText, style]} {...rest}>
      {children}
    </Text>
  );
}

// Exportação unificada via namespace
export const ButtonFatec = {
  Root: ButtonRoot,
  Icon: ButtonIcon,
  Text: ButtonText,
};

const estilos = StyleSheet.create({
  button: {
    backgroundColor: "green",
    width: "80%",
    height: 46,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginTop: 20,
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  iconContainer: {
    marginRight: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
```

---

### 2. Uso Prático na Tela (`App.tsx`)

```tsx
import { View, StyleSheet } from "react-native";
import { ButtonFatec } from "./ButtonFatec";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function HomeScreen() {
  return (
    <View style={estilos.container}>
      {/* Exemplo 1: Ícone à esquerda */}
      <ButtonFatec.Root onPress={() => console.log("Salvo!")}>
        <ButtonFatec.Icon>
          <Ionicons name="checkmark-circle" size={24} color="#fff" />
        </ButtonFatec.Icon>
        <ButtonFatec.Text>Salvar Alterações</ButtonFatec.Text>
      </ButtonFatec.Root>

      {/* Exemplo 2: Ícone à direita (apenas invertendo a ordem no JSX) */}
      <ButtonFatec.Root
        onPress={() => console.log("Avançar")}
        style={{ backgroundColor: "#2196F3" }}
      >
        <ButtonFatec.Text>Avançar</ButtonFatec.Text>
        <ButtonFatec.Icon>
          <Ionicons name="arrow-forward" size={24} color="#fff" />
        </ButtonFatec.Icon>
      </ButtonFatec.Root>

      {/* Exemplo 3: Botão sem ícone */}
      <ButtonFatec.Root
        onPress={() => console.log("Cancelar")}
        style={{ backgroundColor: "#d32f2f" }}
      >
        <ButtonFatec.Text>Cancelar</ButtonFatec.Text>
      </ButtonFatec.Root>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
```

---

**Vantagens pedagógicas do Design Pattern de Composição:**

- **Eliminação da "Explosão de Props"**: Não é necessário criar props como `isIconRight`, `hasIcon`, `iconColor` ou `textColor`. A estrutura JSX define a presença e a posição dos elementos.
- **Flexibilidade de Posição**: Para colocar o ícone à direita do texto, o aluno altera a ordem dos componentes no JSX, sem mexer no CSS do botão base (`flexDirection: "row"` resolve nativamente).
- **Herança Nativa de Props**: `ButtonFatec.Root` aceita qualquer prop nativa do `TouchableOpacity` (`onPress`, `disabled`, `activeOpacity`), e `ButtonFatec.Text` aceita props de `Text` (`numberOfLines`, `ellipsizeMode`), via operador rest (`...rest`).
- **Padrão Utilizado no Mercado**: É o mesmo padrão adotado por bibliotecas modernas como Radix UI, Shadcn UI e NativeBase.
