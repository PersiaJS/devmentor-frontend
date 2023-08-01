import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Vazirmatn } from "next/font/google";

const vazirmatnFont = Vazirmatn({ subsets: ["latin"] });
const theme = extendTheme({
  styles: {
    global: {
      "html, body, label": {
        fontFamily: vazirmatnFont.style.fontFamily,
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
  return (
    <main className={vazirmatnFont.className}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </main>
  );
}
