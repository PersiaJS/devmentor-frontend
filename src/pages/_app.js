import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Vazirmatn } from "next/font/google";

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
});

export default function App({ Component, pageProps }) {
  return (
    <main className={vazirmatnFont.className}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </main>
  );
}
