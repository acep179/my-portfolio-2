import * as React from 'react'
import { menus, socmeds } from "../mocks"
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
  useDisclosure,
  Image,
  DrawerHeader,
  Text,
} from "@chakra-ui/react";
import { MyIcon } from '../components';

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
    <Center
      backgroundColor='white'
      boxShadow='0px 10px 22px 1px rgba(49,151,149,0.1)'
      _dark={{backgroundColor:'gray.800',boxShadow:'0px 10px 22px 1px rgba(49,151,149,0.26)', border:0}} zIndex={100} left={0} right={0} position='fixed' fontFamily="'Fira Mono', monospace" >
      <Flex
        width={['full','container.sm','container.md','container.lg','container.xl']}
        padding={['10px 5px 10px 10px', null, '10px 20px 10px 10px']}
        alignItems='center'
        gap='2'
      >
        <Flex gap={2} alignItems='center'>
          <Image 
            boxSize='50px'
            src='/img/logo.png'
            alt='Dan Abramov' 
          />
          <Heading color='teal.500' _dark={{color:'teal.300'}} size='md'>Acep Awaludin</Heading>
        </Flex>

        <Spacer />

        <List display={['none',null, null,'flex']}  alignItems='center' gap={[5,null,null,7]}>
          <MenuList _hover={{marginBottom:-1, paddingBottom:-1}} />
          <ListItem>
            <ChakraLink as={GatsbyLink} href="/cv">
              <Button colorScheme="teal" variant='outline' >Resume</Button>
            </ChakraLink>
          </ListItem>
        </List>

        <Button onClick={onOpen} colorScheme='teal' variant='ghost' display={['block', null, null, 'none']} >
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
            <DrawerHeader>
              <Heading fontSize='larger' color='teal' _dark={{color:'teal.300'}}>Please Select</Heading>
            </DrawerHeader>

            <DrawerBody marginTop={10}>
              <List>
                <MenuList marginBottom={3} _hover={{marginBottom:2, paddingBottom: 0.5}} />
              </List>
            </DrawerBody>

            <DrawerFooter flexWrap='wrap'>
              <Text textAlign='center' marginBottom={3} width='100%' fontSize={23} fontWeight='bold' >Let's Connect!</Text>
              <Flex width='90%' margin='0 auto 0 auto' justify='space-between'>
                {socmeds.map((socmed) => {
                  return(
                    <ChakraLink as={GatsbyLink} key={socmed.id} href={socmed.link} isExternal>
                      <MyIcon fontSize={27} type={socmed.icon} tooltipLabel={socmed.username} />
                    </ChakraLink>
                  )
                })}
              </Flex>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Center>
  )
}

export default Navbar