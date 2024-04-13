import { FaReact, FaSass } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { RiGatsbyLine } from "react-icons/ri";
import { SiChakraui, SiTailwindcss, SiMui, SiExpress, SiNestjs, SiRedis, SiPostgresql, SiRabbitmq, SiGraphql, SiOracle } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { ElementType } from 'react';

type skillsType = {
  title: string;
  icon: ElementType;
}

type skillCategory = {
  title: string;
  skills: skillsType[]
}

const skills: skillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      {
        title: 'React.js',
        icon: FaReact
      },
      {
        title: 'Next.js',
        icon: TbBrandNextjs
      },
      {
        title: 'Tailwind CSS',
        icon: SiTailwindcss
      },
      {
        title: 'SASS',
        icon: FaSass
      },
      {
        title: 'Gatsby.js',
        icon: RiGatsbyLine
      },
      {
        title: 'Chakra UI',
        icon: SiChakraui
      },
      {
        title: 'MUI',
        icon: SiMui
      },
    ],
  },
  {
    title: 'Backend',
    skills: [
      {
        title: 'Express.js',
        icon: SiExpress,
      },
      {
        title: 'Nest.js',
        icon: SiNestjs,
      },
      {
        title: 'Rabbit MQ',
        icon: SiRabbitmq,
      },
    ]
  },
  {
    title: 'Datastores',
    skills: [
      {
        title: 'MySQL',
        icon: GrMysql,
      },
      {
        title: 'PostgreSQL',
        icon: SiPostgresql,
      },
      {
        title: 'Oracle DB',
        icon: SiOracle,
      },
      {
        title: 'GraphQL',
        icon: SiGraphql,
      },
      {
        title: 'Redis',
        icon: SiRedis,
      },
    ]
  },
]

export default skills