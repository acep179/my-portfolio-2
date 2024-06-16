import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Grid, Heading, Link as ChakraLink, Tooltip, Box, Flex } from '@chakra-ui/react'
import { MyIcon, SectionHeading } from '../components'
import { socmeds } from '../mocks'

function Socmed() {
  return (
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
      <SectionHeading title="5. Find Me at" />
      <Heading fontSize='xx-large'>My Contact and Social Media</Heading>
      {socmeds.map((socmed) => {
        return(
          <ChakraLink width='max-content' as={GatsbyLink} marginLeft={5} key={socmed.id} href={socmed.link}>
            <Tooltip
              label={socmed.platform}
              placement="top-end"
              hasArrow
              arrowPadding={40}
            >
              <Flex columnGap={2} width='max-content'>
                <MyIcon fontSize={27} type={socmed.icon} />
                <p>{socmed.username}</p>
              </Flex>
            </Tooltip>
          </ChakraLink>
        )
      })}
    </Grid>
  )
}

export default Socmed