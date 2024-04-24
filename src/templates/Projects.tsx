import * as React from "react";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  Link as ChakraLink,
  Flex,
  Spacer,
  useColorMode
} from "@chakra-ui/react";

import { projects } from "../mocks";
import { MyIcon, SectionHeading } from "../components";

import './Projects.css'
import { Link as GatsbyLink } from "gatsby";

const Projects = () => {

  const { colorMode } = useColorMode();

  return(
    <Grid
      id="projects"
      m='auto'
      mt={20}
      mb={20}
      width={['full','container.sm','container.md','container.lg','container.xl']}
      padding={['10px 20px', null, '10px']}
      templateColumns='repeat(1, 1fr)'
      gap={6}
    >
      <SectionHeading title="4. Projects" />
      <Heading fontSize='xx-large'>Here are some of my projects :</Heading>

      <Grid
        m='auto'
        width={['full','container.sm','container.md','container.lg']}
        padding={['10px 20px', null, '10px']}
        templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)', null, 'repeat(3, 1fr)']}
        gap={6}
      >
        {projects.map((project) => {
          return(
            <GridItem key={project.id} as={Grid} >
              <Card background='gray.50' _dark={{background:'gray.700'}} overflow='hidden' colorScheme="teal" borderRadius={15}>
                <Box className={`card-header ${colorMode === 'light' ? 'card-header-light' : 'card-header-dark'}`} aspectRatio='16/10' overflowY='scroll' >
                  <Image
                    objectFit='cover'
                    src={project.img}
                    alt='Website IMD'
                  />
                </Box>
                <Flex minH='280px' direction='column'>
                  <CardBody>
                    <ChakraLink as={GatsbyLink} href={project.link} isExternal >
                      <Heading height='50px' size='md'>{project.title}</Heading>
                    </ChakraLink>

                    <Text py='2'>
                      {project.desc}
                    </Text>
                  </CardBody>

                  <Spacer />

                  <CardFooter>
                    {project.techs.map((tech) => {
                      return(
                        <MyIcon fontSize={32} color='teal' mr={3} key={tech.id} type={tech.icon} tooltipLabel={tech.title} />
                      )
                    })}
                  </CardFooter>
                </Flex>
              </Card>
            </GridItem>
          )
        })}
      </Grid>
    </Grid>
  )
}

export default Projects