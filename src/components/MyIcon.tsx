import React from "react";

import { FaReact, FaSass } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { RiGatsbyLine } from "react-icons/ri";
import { SiChakraui, SiTailwindcss, SiMui, SiExpress, SiNestjs, SiRedis, SiPostgresql, SiRabbitmq, SiGraphql, SiOracle } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

import { Box, Icon, Tooltip } from "@chakra-ui/react";
import { HTMLChakraProps } from '@chakra-ui/system'

interface myIconType extends HTMLChakraProps<"svg"> {
  type: string;
  tooltipLabel?: string;
  orientation?:  "vertical" | "horizontal";
}

const MyIcon = (props:myIconType) => {

  let icon

  switch (props.type) {
    
    case 'react-js':
      icon = FaReact
      break;
      
    case 'sass':
      icon = FaSass
      break;

    case 'next-js':
      icon = TbBrandNextjs
      break;

    case 'gatsby-js':
      icon = RiGatsbyLine
      break;

    case 'chakra-ui':
      icon = SiChakraui
      break;
      
    case 'tailwind-css':
      icon = SiTailwindcss
      break;

    case 'material-ui':
      icon = SiMui
      break;

    case 'express-js':
      icon = SiExpress
      break;

    case 'nest-js':
      icon = SiNestjs
      break;

    case 'redis':
      icon = SiRedis
      break;

    case 'postgre-sql':
      icon = SiPostgresql
      break;

    case 'rabbit-mq':
      icon = SiRabbitmq
      break;

    case 'graph-ql':
      icon = SiGraphql
      break;

    case 'oracle':
      icon = SiOracle
      break;

    case 'mysql':
      icon = GrMysql
      break;

    default:
      icon = GrMysql
  }

  return(
    props.tooltipLabel ?
      <Tooltip
        label={props.tooltipLabel}
        placement="top"
        hasArrow
      >
        <Box as="span">
          <Icon as={icon} {...props} />
        </Box>
      </Tooltip>
      :
    <Icon as={icon} {...props} />
  )
}

export default MyIcon