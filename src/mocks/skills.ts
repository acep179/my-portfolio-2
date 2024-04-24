type skillsType = {
  title: string;
  icon: string;
}

type skillCategory = {
  title: string;
  skills: skillsType[]
}

const frontend: skillCategory =   {
  title: 'Frontend',
  skills: [
    {
      title: 'React.js',
      icon: 'react-js'
    },
    {
      title: 'Next.js',
      icon: 'next-js'
    },
    {
      title: 'Tailwind CSS',
      icon: 'tailwind-css'
    },
    {
      title: 'SASS',
      icon: 'sass'
    },
    {
      title: 'Gatsby.js',
      icon: 'gatsby-js'
    },
    {
      title: 'Chakra UI',
      icon: 'chakra-ui'
    },
    {
      title: 'MUI',
      icon: 'material-ui'
    },
  ],
}

const backend: skillCategory = {
  title: 'Backend',
  skills: [
    {
      title: 'Express.js',
      icon: 'express-js',
    },
    {
      title: 'Nest.js',
      icon: 'nest-js',
    },
    {
      title: 'Rabbit MQ',
      icon: 'rabbit-mq',
    },
  ]
}

const dataStores: skillCategory = {
  title: 'Datastores',
  skills: [
    {
      title: 'MySQL',
      icon: 'mysql',
    },
    {
      title: 'PostgreSQL',
      icon: 'postgre-sql',
    },
    {
      title: 'Oracle DB',
      icon: 'oracle',
    },
    {
      title: 'GraphQL',
      icon: 'graph-ql',
    },
    {
      title: 'Redis',
      icon: 'redis',
    },
  ]
}

const skills: skillCategory[] = [
  frontend,
  backend,
  dataStores,
]

export default skills