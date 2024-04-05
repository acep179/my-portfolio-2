import * as React from 'react'
import { menus } from "../mocks"
import { Link as GatsbyLink } from "gatsby";
import { IoMenu, IoClose } from "react-icons/io5";

import {
  Button,
  Flex,
  Heading,
  Spacer,
  List,
  ListItem,
  Link as ChakraLink,
  Center,
  Icon,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  useDisclosure,
} from "@chakra-ui/react";

const Navbar = () => {
  
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Center backgroundColor={''}>
      <Flex width={['full','container.sm','container.md','container.lg','container.xl']} padding={['10px 5px 10px 10px', null, '10px 20px 10px 10px']} alignItems='center' gap='2'>
          <Box p='2'>
            <Heading color='teal.500' size='md'>Acep Awaludin</Heading>
          </Box>
          <Spacer />
          <List display={['none',null,'flex']} gap={[5,null,null,7]}>
            {menus.map((menu) => (
              <ListItem key={menu.id}>
                <ChakraLink as={GatsbyLink} href={menu.link} color='teal.500'>{menu.title}</ChakraLink>
              </ListItem>
            ))}
          </List>
          <Button onClick={onOpen} display={['block', null, 'none']} background={'transparent'}>
            <Icon as={IoMenu} boxSize={7} color='teal.500'/>
          </Button>
          <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton as={IoClose} />

              <DrawerBody marginTop={10}>
                <List>
                  {menus.map((menu) => (
                    <ListItem marginBottom={3} key={menu.id}>
                      <ChakraLink as={GatsbyLink} href={menu.link} color='teal.500'>{menu.title}</ChakraLink>
                    </ListItem>
                  ))}
                </List>
              </DrawerBody>

              <DrawerFooter>
                {/* kasih sosmed */}
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
      </Flex>
    </Center>
  )
}

export default Navbar