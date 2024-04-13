import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// Or export `extendBaseTheme` if you only want the default Chakra theme tokens to extend (no default component themes)
export const customTheme = extendTheme({config})