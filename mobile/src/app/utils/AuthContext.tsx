import AsyncStorage from "@react-native-async-storage/async-storage";
import { SplashScreen, useRouter } from "expo-router";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { AuthLogin } from "../../api/authApi";

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
  logIn: (login: string, password: string) => Promise<boolean>;
  logOut: () => Promise<void>;
};

// stado inicial para os valores
export const AuthContext = createContext<ContextProps>({
  isLoggedIn: false,
  isReading: false,
  logIn: async () => false,
  logOut: async () => {},
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

  const logIn = async (login: string, password: string) => {
    const response = await AuthLogin(login, password);
    if (!response) return false;
    if (response.message !== "sucess") {
      return false;
    }
    setIsLoggedIn(true);

    const { id, name } = response.user;
    const newUser: User = {
      id: id,
      nome: name,
      email: login,
    };

    const payload: Payload = {
      user: newUser,
      isLoggedIn: true,
      token: response.data,
    };

    await storeAuthState(payload);

    setUser(newUser);
    router.push("/");
    return true;
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
