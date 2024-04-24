import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import {
  Heading,
  Text,
  Box,
  Button,
  Link as ChakraLink
} from "@chakra-ui/react";
import { FaArrowRightLong } from "react-icons/fa6";

const Header = () => {

  const greeting = 'Hi, my name is'
  const name = 'Acep Awaludin.'
  const jargon = 'I build things for the web.'
  const whoAmI = "I'm a fullstack web developer. Currently, I work at PT. Integrasi Logistik Cipta Solusi (ILCS). I'm also a freelancer at Fastwork."

  return(
    <Box
      margin='auto'
      padding={[5,7,10]}
      minH='100vh'
      maxW={
        ['full','container.sm',null,'container.md','container.lg']
      }
    >

      <Text
        fontSize='large'
        fontFamily="'Fira Mono', monospace"
        mt={24}
        mb={2}
        color="teal"
        _dark={{color:"teal.300"}}
        children={greeting}
      />

      <Heading
        fontFamily="Poppins, sans-serif, serif"
        fontSize={['5xl',null, null, '6xl', '7xl']}
      >
        {name}
      </Heading>

      <Heading
        fontFamily="Poppins, sans-serif, serif"
        fontSize={['5xl',null, null, '6xl', '7xl']}
        mb={5}
        color='gray.600'
        _dark={{color:'gray.400'}}
      >
        {jargon}
      </Heading>

      <Text
        maxW={500}
        mb={10}
        fontSize='lg'
        color='gray.600'
        _dark={{color:'gray.400'}}
      >
        {whoAmI}
      </Text>

      <ChakraLink as={GatsbyLink} href="/cv">
        <Button colorScheme="teal" variant='outline' size='lg' rightIcon={<FaArrowRightLong />} >Resume</Button>
      </ChakraLink>
    </Box>
  )
}

export default Header