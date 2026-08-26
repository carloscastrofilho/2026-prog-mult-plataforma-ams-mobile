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

export function AuthProvider({ children }: PropsWithChildren) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const logIn = () => {
    setIsLoggedIn(true);
    router.push("/");
  };

  const logOut = () => {
    setIsLoggedIn(false);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
