import * as React from "react";
import {
  Heading,
  Text,
  Box,
} from "@chakra-ui/react";

const Header = () => {

  const greeting = 'Hi, my name is'
  const name = 'Acep Awaludin.'
  const jargon = 'I build things for the web.'
  const whoAmI = "I'm a fullstack web developer. Currently, I work at PT. Integrasi Logistik Cipta Solusi (ILCS)."

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
        fontSize='lg'
        color='gray.600'
        _dark={{color:'gray.400'}}
      >
        {whoAmI}
      </Text>
    </Box>
  )
}

export default Header