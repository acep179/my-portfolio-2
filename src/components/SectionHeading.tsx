import * as React from "react";
import {
  Box,
  GridItem,
  Heading,
} from "@chakra-ui/react";

const SectionHeading = (props:any) => {
  return(
    <GridItem {...props} >
      <Heading 
        color="teal"
        _dark={{color:"teal.300"}}
        fontFamily="'Fira Mono', monospace">
          {props.title}
          <Box
            as="hr"
            borderColor='teal' 
            _dark={{borderColor:"teal.300"}}
            borderWidth={1.5}
            mt={3}
            maxW={500}
          />
      </Heading>
    </GridItem>
  )
}

export default SectionHeading