import * as React from "react";
import {
  AbsoluteCenter,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import { SectionHeading } from "../components";

const About = () => {
  return(
    <Grid
      id="about"
      m='auto'
      mt={20}
      mb={20}
      width={['full','container.sm','container.md','container.lg','container.xl']}
      padding={['10px 20px', null, '10px']}
      templateColumns={['repeat(1, 1fr)', null, 'repeat(5, 1fr)']}
      gap={6}
    >
      <SectionHeading title="1. About" placeContent='end' colSpan={[0, null, 3]} />

      <GridItem order={[2, null, 2]} w='full' colSpan={[0, null, 3]} >
        <Flex flexDirection='column' height='100%'>
          <Text mb={3}>
            Hello! My name is Acep Awaludin. I am a Fullstack Web Developer who works at PT. Integrasi Logistik Cipta Solusi (ILCS), Jakarta. I graduated from UIN Jakarta and an alumnus of Bootcamp Dumbways batch 37.
          </Text>
          <Text>
            I have skills in React.js, Next.js, Tailwind CSS, and Bootstrap on the frontend. On the backend, I have skills in Node.js-Express.js or Hapi.js. I also have experience in using Golang-Gorilla/mux for some projects.
          </Text>
        </Flex>
      </GridItem>

      <GridItem borderRadius={20} order={[1, null, 1]} w='full' rowSpan={[0, null, 2]} colSpan={[0, null, 2]} borderWidth={[3, 4, 4]} borderColor='teal' overflow='hidden'>
        <Image 
          src='./img/acep.jpg'
          alt='Acep Awaludin'  />
      </GridItem>
    </Grid>
  )
}

export default About