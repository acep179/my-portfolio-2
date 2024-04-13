import React , { FC } from "react";
import { HeadFC, PageProps } from "gatsby";
import { FaSun, FaMoon } from "react-icons/fa";
import {
  Box,
  useColorMode,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import { Navbar, Header, About, Skills, Experiences, FloatButtonContainer } from "../templates";

import "@fontsource/poppins"
import '@fontsource/fira-mono';

const IndexPage: FC<PageProps> = () => {

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="main" fontFamily="Poppins, sans-serif, serif" >
      <Navbar />
      <Header />

      <About />
      <Skills />
      <Experiences />

      <FloatButtonContainer>
        <Tooltip label={`Change theme to ${colorMode === 'light' ? 'dark' : 'light' } mode`} closeOnClick={false}  placement='left' hasArrow >
          <IconButton
            backgroundColor={colorMode === 'light' ? 'white' : 'gray.800' }
            position='relative'
            aria-label="Toggle Color Mode"
            variant='outline'
            onClick={toggleColorMode}
            colorScheme="teal"
            fontSize='20px'
            isRound={true}
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun /> }
          />
        </Tooltip>
      </FloatButtonContainer>
    </Box>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
