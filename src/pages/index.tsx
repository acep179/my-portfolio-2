import React , { FC } from "react";
import { HeadFC, PageProps } from "gatsby";
import {
  Box,
} from "@chakra-ui/react";
import { Navbar } from "../templates";

const IndexPage: FC<PageProps> = () => {

  // const { toggleColorMode } = useColorMode();

  return (
    <Box as="main">
      <Navbar />
      {/* <Button
        onClick={toggleColorMode}
        colorScheme="blue"
        alignSelf="center"
      >
        Toggle Color Mode
      </Button> */}
    </Box>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
