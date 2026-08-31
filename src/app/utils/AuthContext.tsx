import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { createContext, PropsWithChildren, useState } from "react";

type ContextProps = {
  isLoggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
};

// stado inicial para os valores
export const AuthContext = createContext<ContextProps>({
  isLoggedIn: false,
  logIn: () => {},
  logOut: () => {},
});

const authStorage = "auth-key";

export function AuthProvider({ children }: PropsWithChildren) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const storeAuthState = async (newState: { isLoogedIn: boolean }) => {
    try {
      const jsonValue = JSON.stringify(newState);
      await AsyncStorage.setItem(authStorage, jsonValue);
    } catch (e) {
      // saving error
      console.log("falha ao salvar localstorage");
    }
  };
  const logIn = () => {
    setIsLoggedIn(true);
    storeAuthState({ isLoogedIn: true });
    router.push("/");
  };

  const logOut = () => {
    setIsLoggedIn(false);
    storeAuthState({ isLoogedIn: false });
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
