import React from "react";

import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { FaReact, FaSass } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { GrMysql } from "react-icons/gr";
import { ImLinkedin2 } from "react-icons/im";
import { RiGatsbyLine } from "react-icons/ri";
import { SiChakraui, SiTailwindcss, SiMui, SiExpress, SiNestjs, SiRedis, SiPostgresql, SiRabbitmq, SiGraphql, SiOracle, SiFreelancer } from "react-icons/si";
import { TbBrandNextjs, TbMailForward } from "react-icons/tb";

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
    
    case 'whatsapp':
      icon = BsWhatsapp
      break;

    case 'ig':
      icon = BsInstagram
      break;

    case 'linkedin':
      icon = ImLinkedin2
      break;

    case 'email':
      icon = FiMail
      break;

    case 'fastwork':
      icon = SiFreelancer
      break;

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
        <Box as="div">
          <Icon as={icon} {...props} />
        </Box>
      </Tooltip>
      :
    <Icon as={icon} {...props} />
  )
}

export default MyIcon