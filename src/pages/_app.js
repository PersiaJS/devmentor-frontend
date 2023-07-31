import { useCallback, useEffect, useState } from "react";
import { Vazirmatn } from "next/font/google";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import handleRequest from "@/utils/handleRequest";
import Cookies from "universal-cookie";
import UserContext from "@/contexts/userContext";

const vazirmatnFont = Vazirmatn({ subsets: ["latin"] });

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "Vazir, sans-serif",
        direction: "rtl",
      },
    },
  },
  fonts: {
    heading: vazirmatnFont.style.fontFamily,
    body: vazirmatnFont.style.fontFamily,
  },
  breakpoints: {
    xs: "0em",
  },
});

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUser = useCallback(async () => {
    const cookies = new Cookies();

    setIsLoading(true);
    try {
      const res = await handleRequest().get("/profile/get", {
        method: "GET",
        headers: {
          Authorization: cookies.get("auth"),
        },
      });
      setUser(res.data.user);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setUser(null);
    }
  }, []);
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <main className={vazirmatnFont.className}>
      <UserContext.Provider
        value={{
          user,
          isLoading,
          refreshUser: fetchUser,
        }}
      >
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </UserContext.Provider>
    </main>
  );
}
