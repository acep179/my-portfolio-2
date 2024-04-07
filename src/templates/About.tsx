import * as React from "react";
import {
  AbsoluteCenter,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import { SectionHeading } from "../components";

const About = () => {
  return(
    <Grid
      m='auto'
      mt={20}
      mb={20}
      width={['full','container.sm','container.md','container.lg','container.xl']}
      padding={['10px 20px', null, '10px']}
      templateColumns={['repeat(1, 1fr)', null, 'repeat(5, 1fr)']}
      gap={6}
    >
      <SectionHeading title="1. About" colSpan={[0, null, 5]} />

      <GridItem position='relative' order={[2, null, 1]} w='full' h={300} colSpan={[0, null, 3]} >
        <AbsoluteCenter axis='vertical'>
          <Text mb={3}>
            Hello! My name is Acep Awaludin. I am a Fullstack Web Developer who works at PT. Integrasi Logistik Cipta Solusi (ILCS), Jakarta. I graduated from UIN Jakarta and an alumnus of Bootcamp Dumbways batch 37.
          </Text>
          <Text>
            I have skills in React.js, Next.js, Tailwind CSS, and Bootstrap on the frontend. On the backend, I have skills in Node.js-Express.js or Hapi.js. I also have experience in using Golang-Gorilla/mux for some projects.
          </Text>
        </AbsoluteCenter>
      </GridItem>

      <GridItem borderRadius={20} order={[1, null, 2]} w='full' h={300} colSpan={[0, null, 2]} borderWidth={3} borderColor='teal'>

      </GridItem>
    </Grid>
  )
}

export default About