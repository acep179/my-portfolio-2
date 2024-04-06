import * as React from "react";
import { HTMLChakraProps } from '@chakra-ui/system'
import {
  Center,
  Flex,
} from "@chakra-ui/react";

const FloatButtonContainer = ({children}:HTMLChakraProps<"div">) => {
  return(
    <Center
      width='full'
      position='fixed'
      bottom={0}
    >
      <Flex
        width={['full', 'container.sm','container.md','container.lg','container.xl']}
        padding={['0 25px 40px 0', null, '0 20px 40px 0']}
        justifyContent='right'
        position='relative'
      >
        {children}
      </Flex>
    </Center>
  )
}

export default FloatButtonContainer