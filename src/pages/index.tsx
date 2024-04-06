import React , { FC } from "react";
import { HeadFC, PageProps } from "gatsby";
import { FaSun, FaMoon } from "react-icons/fa";
import {
  Box,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";
import { Navbar, FloatButtonContainer } from "../templates";

const IndexPage: FC<PageProps> = () => {

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="main">
      <Navbar />
      <FloatButtonContainer>
        <IconButton
          backgroundColor={colorMode === 'light' ? 'white' : 'blackalpha.50' }
          position='relative'
          aria-label="Toggle Color Mode"
          variant='outline'
          onClick={toggleColorMode}
          colorScheme="teal"
          fontSize='20px'
          isRound={true}
          icon={colorMode === 'light' ? <FaMoon /> : <FaSun /> }
        />
      </FloatButtonContainer>
    </Box>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
