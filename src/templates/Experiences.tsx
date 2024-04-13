import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import {
  Box,
  Grid,
  GridItem,
  Link as ChakraLink,
  ListItem,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  UnorderedList,
  useSteps,
} from "@chakra-ui/react";
import { MdOutlineWork } from "react-icons/md";
import { SectionHeading } from "../components";
import { workExperiences } from "../mocks";

const Experiences = () => {

  const { activeStep } = useSteps({
    index: 0,
    count: workExperiences.length,
  })

  return(
    <Grid
      id="experiences"
      m='auto'
      mt={20}
      mb={20}
      width={['full','container.sm','container.md','container.lg','container.xl']}
      padding={['10px 20px', null, '10px']}
      templateColumns={['repeat(1, 1fr)']}
      rowGap={6}
    >
      <SectionHeading marginBottom={8} title="2. Experiences" colSpan={[0, null, 5]} />
      
      <GridItem
        maxW={
          ['full','container.sm',null,'container.md','container.lg']
        }
        margin='0 auto'
        padding='0 40px'
      >
        <Stepper index={activeStep} height={`calc(100% + ${50*workExperiences.length}px)`} pb={20} colorScheme='teal' orientation='vertical' gap='0'>
          {workExperiences.map((work, index) => {
            const date = work.endDate ? new Date(work.endDate) : new Date()
            return (
            <Step key={index}>
              <Box display={['none', 'block']}>
                <StepTitle>
                  {work.isOngoing ? 'Current' : date.getFullYear()}
                </StepTitle>
              </Box>

              <StepIndicator _dark={{borderColor:'teal.200'}} borderColor='teal'>
                <StepStatus
                  complete={<MdOutlineWork />}
                  incomplete={<MdOutlineWork />}
                  active={<MdOutlineWork />}
                />
              </StepIndicator>

              <Box>
                <ChakraLink as={GatsbyLink} href={work.workLink} _hover={{color:'teal',_dark:{color:'teal.200'}}} isExternal >
                  <StepTitle>
                    {work.workPlace}
                    <Box as="br"/>
                    {work.position}
                  </StepTitle>
                </ChakraLink>
                <StepDescription>
                  <Box>{work.startDate} - {work.isOngoing ? 'now' : work.endDate ? work.endDate : 'now'}</Box>
                  <UnorderedList colorScheme="teal">
                    {work.jobdesks.map((jobdesk) => {
                      return (
                        <ListItem>
                          {/* <ListIcon /> */}
                          {jobdesk}
                        </ListItem>
                      )
                    })}
                  </UnorderedList>
                </StepDescription>
              </Box>

              <StepSeparator />
            </Step>
          )
          })}
        </Stepper>
      </GridItem>
    </Grid>
  )
}

export default Experiences