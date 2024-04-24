import * as React from "react";
import {
  Box,
  Grid,
  SimpleGrid,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Icon,
  Flex
} from "@chakra-ui/react";
import { SectionHeading, MyIcon } from "../components";
import { skills } from "../mocks";

const Skills = () => {
  return(
    <Grid
      id="skills"
      m='auto'
      mt={20}
      mb={20}
      width={['full','container.sm','container.md','container.lg','container.xl']}
      padding={['10px 20px', null, '10px']}
      templateColumns={'repeat(1, 1fr)'}
      gap={6}
    >
      <SectionHeading title="2. My Skills" />

      <Accordion defaultIndex={[0,1,2]} allowMultiple>
        {skills.map((skillCategory, index) => {
          return (
            <AccordionItem key={index}>
              <h2>
                <AccordionButton _hover={{backgroundColor:'teal.50', textColor:'teal', _dark:{backgroundColor:'teal',textColor:'white'}}}>
                  <Box fontSize={25} as='span' flex='1' textAlign='left'>
                    {skillCategory.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={12}>
                <SimpleGrid spacingX={4} spacingY={10} templateColumns='repeat(auto-fill, minmax(120px, 1fr))'>
                  {skillCategory.skills.map((skillType, index) => {
                    return(
                      <Flex key={index} direction='column' alignItems='center' >
                        <MyIcon type={skillType.icon} fontSize={70} mb={3} color='teal' _dark={{color:'teal.300'}} />
                        <Text>{skillType.title}</Text>
                      </Flex>
                    )
                  })}
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>
          )
        })}
      </Accordion>

    </Grid>
  )
}

export default Skills