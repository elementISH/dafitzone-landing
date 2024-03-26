"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { RtlProvider } from "./providers_rtl";
const colors = {
  primary: {
    100: "#FFF9F4",
    500: "#FF8900",
    900: "#F2ECE7",
  },
  secondary: {
    100: "#070F0F",
    500: "#292B2C",
    900: "#898A87",
  },
  badge: {
    900: "#FFD54B26",
    500: "#FF4E4E26",
    400: "#64D0FF26",
    300: "#FFB33A26",
    200: "#A1FE3D26",
  },
  opacity: {
    orange: "rgba(255, 137, 0, 0.1)",
    orange_contrasted: "rgba(255, 137, 0, 0.2)",
    orange_2: "rgba(255,137,0,0.2)",
  },
  gradient: {
    100: "linear-gradient(-180deg, rgba(212, 180, 131, 0.5) 0%, rgba(212, 180, 131, 0.3) 100%)",
    500: "linear-gradient(-180deg, rgba(200, 135, 55, 0.5) 0 %, rgba(200, 135, 55, 0.3) 100 %)",
    900: "linear-gradient(-180deg, rgba(255, 137, 0, 0.5) 0%, rgba(255, 137, 0, 0.3) 100%)",
  },
};
const theme = extendTheme({
  colors,
  styles: {
    global: {
      body: {
        bg: "primary.100",
        overflowX: "clip",
        color: "secondary.100",
        fontSize: "18px",
        width: "100vw",
      },
      html: {
        bg: "primary.100",
        overflowX: "clip",
        color: "secondary.100",
        fontSize: "18px",
        width: "100vw",
      },
      "html[lang=ar]": {
        "h1,h2": {
          marginBottom: "2% !important",
        },
      },
      "*:not(html, body)": {
        fontFamily: "inherit !important",
      },
      "#chakra-toast-manager-top-right": {
        top: "4rem !important",
      },
      ".splide__track": {
        borderRadius: "25px !important",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "400",
        borderRadius: "10px",
      },
      variants: {
        original: {
          backgroundColor: "primary.500",
          color: "primary.100",
        },
        withShadow: {
          boxShadow: "0px 0px 10px 5px rgba(255, 137, 0, 0.7)",
        },
        solid: {
          _hover: {
            backgroundColor: "secondary.500 !important",
            backgroundImage: "linear-gradient(rgb(0 0 0/90%) 0 0)",
          },
          _active: {
            backgroundColor: "secondary.500 !important",
            backgroundImage: "linear-gradient(rgb(0 0 0/90%) 0 0)",
          },
        },
      },
    },
    Text: {
      baseStyle: {
        color: "secondary.100",
      },
    },
  },
});

export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <RtlProvider>{children}</RtlProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}
