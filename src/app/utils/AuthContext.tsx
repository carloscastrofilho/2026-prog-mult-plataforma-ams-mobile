import AsyncStorage from "@react-native-async-storage/async-storage";
import { SplashScreen, useRouter } from "expo-router";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

interface Payload {
  user: User | null;
  isLoggedIn: boolean;
  token: string | null;
}

interface User {
  id: number;
  nome: string | undefined;
  email?: string;
  avatar?: string;
}

type ContextProps = {
  user: User | null;
  isLoggedIn: boolean;
  isReading: boolean;
  logIn: (login: string | undefined, password: string) => void;
  logOut: () => void;
};

// stado inicial para os valores
export const AuthContext = createContext<ContextProps>({
  isLoggedIn: false,
  isReading: false,
  logIn: () => {},
  logOut: () => {},
  user: null,
});

const authStorage = "auth-key";

export default function AuthProvider({ children }: PropsWithChildren) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const router = useRouter();

  useEffect(() => {
    const loadStorage = async () => {
      //Simular delay por uso de api
      //await new Promise((res) => setTimeout(() => res(null), 1000));
      const response = await AsyncStorage.getItem(authStorage);
      if (response) {
        const jsonValue: Payload = JSON.parse(response);
        console.log(jsonValue);
        setIsLoggedIn(jsonValue.isLoggedIn);
        setUser(jsonValue.user);
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

  const storeAuthState = async (newState: Payload) => {
    try {
      const jsonValue = JSON.stringify(newState);
      await AsyncStorage.setItem(authStorage, jsonValue);
    } catch (e) {
      // saving error
      console.log("falha ao salvar localstorage");
    }
  };

  const logIn = async (login: string | undefined, password: string) => {
    setIsLoggedIn(true);
    const newUser: User = {
      id: 1,
      nome: login,
      email: login,
    };

    const payload: Payload = {
      user: newUser,
      isLoggedIn: true,
      token: "aqui o vai o tken",
    };

    await storeAuthState(payload);

    setUser(newUser);
    router.push("/");
  };

  const logOut = async () => {
    setIsLoggedIn(false);
    const payload: Payload = {
      isLoggedIn: false,
      user: null,
      token: null,
    };
    await storeAuthState(payload);
    setUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{ user, isReading, isLoggedIn, logIn, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}
