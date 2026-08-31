import AsyncStorage from "@react-native-async-storage/async-storage";
import { SplashScreen, useRouter } from "expo-router";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

type ContextProps = {
  isLoggedIn: boolean;
  isReading: boolean;
  logIn: () => void;
  logOut: () => void;
};

// stado inicial para os valores
export const AuthContext = createContext<ContextProps>({
  isLoggedIn: false,
  isReading: false,
  logIn: () => {},
  logOut: () => {},
});

const authStorage = "auth-key";

export default function AuthProvider({ children }: PropsWithChildren) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isReading, setIsReading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const loadStorage = async () => {
      //Simular delay por uso de api
      //await new Promise((res) => setTimeout(() => res(null), 1000));
      const response = await AsyncStorage.getItem(authStorage);
      if (response) {
        const jsonValue = JSON.parse(response);
        console.log(jsonValue.isLoogedIn);
        setIsLoggedIn(jsonValue.isLoogedIn);
      }
      setIsReading(true);
    };

    loadStorage();
  }, []);

  useEffect(() => {
    if (isReading) {
      SplashScreen.hideAsync();
    }
  }, [isReading]);

  const storeAuthState = async (newState: { isLoogedIn: boolean }) => {
    try {
      const jsonValue = JSON.stringify(newState);
      await AsyncStorage.setItem(authStorage, jsonValue);
    } catch (e) {
      // saving error
      console.log("falha ao salvar localstorage");
    }
  };

  const logIn = async () => {
    setIsLoggedIn(true);
    await storeAuthState({ isLoogedIn: true });
    router.push("/");
  };

  const logOut = async () => {
    setIsLoggedIn(false);
    await storeAuthState({ isLoogedIn: false });
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ isReading, isLoggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
