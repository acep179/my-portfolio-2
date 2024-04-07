import * as React from "react";
import {
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { SectionHeading } from "../components";

const About = () => {
  return(
    <Grid
      m='auto'
      mt={20}
      width={['full','container.sm','container.md','container.lg','container.xl']}
      padding={['10px 20px', null, '10px']}
      templateColumns={['repeat(1, 1fr)', null, 'repeat(5, 1fr)']}
      gap={6}
    >
      <SectionHeading title="1. About" colSpan={[0, null, 5]} />

      <GridItem order={[2, null, 1]} w='full' h={300} colSpan={[0, null, 3]} bg='pink' >

      </GridItem>

      <GridItem order={[1, null, 2]} w='full' h={300} colSpan={[0, null, 2]} bg='teal'>

      </GridItem>
    </Grid>
  )
}

export default About