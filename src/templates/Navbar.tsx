import * as React from 'react'
import { menus } from "../mocks"
import { Link as GatsbyLink } from "gatsby";
import { IoMenu, IoClose } from "react-icons/io5";

import { HTMLChakraProps } from '@chakra-ui/system'

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

const MenuList = (props:HTMLChakraProps<"li">) => {
  return (
    menus.map((menu) => (
      <ListItem
        {...props}
        key={menu.id}
        _hover={{
          ...props._hover,
          borderBottom:'2px solid',
          borderBottomColor:'teal.500',
          _dark:{
            borderBottomColor:'teal.300'
          }
        }}
      >
        <ChakraLink
          as={GatsbyLink}
          href={menu.link}
          width='full'
          color='teal'
          display='block'
          fontWeight='semibold'
          _hover={{color:'teal.600'}}
          _dark={{color:'teal.300'}}
        >
          {menu.title}
        </ChakraLink>
      </ListItem>
    ))
  )
}

const Navbar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Center fontFamily="-apple-system, sans-serif, serif" >
      <Flex
        width={['full','container.sm','container.md','container.lg','container.xl']}
        padding={['10px 5px 10px 10px', null, '10px 20px 10px 10px']}
        alignItems='center'
        gap='2'
      >
        <Box p='2'>
          <Heading color='teal.500' _dark={{color:'teal.300'}} size='md'>Acep Awaludin</Heading>
        </Box>

        <Spacer />

        <List display={['none',null,'flex']} gap={[5,null,null,7]}>
          <MenuList _hover={{marginBottom:-1, paddingBottom:-1}} />
        </List>

        <Button onClick={onOpen} colorScheme='teal' variant='ghost' display={['block', null, 'none']} >
          <Icon as={IoMenu} boxSize={7} />
        </Button>

        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton
              as={IoClose}
              cursor='pointer'
              color='teal'
              _dark={{color:'teal.300'}}
              _hover={{
                backgroundColor:'teal.50',
                _dark:{backgroundColor:'teal.700'}
              }}
            />

            <DrawerBody marginTop={10}>
              <List>
                <MenuList marginBottom={3} _hover={{marginBottom:2, paddingBottom: 0.5}} />
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