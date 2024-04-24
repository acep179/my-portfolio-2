const imdImg = './img/projects/website-imd.png'
const yddsImg = './img/projects/website-ydds.png'
const topbayarImg = './img/projects/website-topbayar.png'

type techType = {
  id: number;
  title: string;
  icon: string;
}

type projectsType = {
  id: number;
  title: string;
  desc: string;
  link: string;
  img: string;
  techs: techType[];
}

const projects:projectsType[] = [
  {
    id: 1,
    title: 'Indonesian Millennial Development (IMD)',
    desc: 'A company profile website with some additional features: management of contents, events, accounts, partnerships, etc.',
    link: 'https://millennialdevelopment.vercel.app/',
    img: imdImg,
    techs: [
      {
        id: 1,
        title: "Next.js",
        icon: "next-js"
      },
      {
        id: 2,
        title: "Tailwind CSS",
        icon: "tailwind-css"
      },
      {
        id: 3,
        title: "Express.js",
        icon: "express-js"
      },
    ],
  },
  {
    id: 2,
    title: 'YDDS Insurance (BNI)',
    desc: 'A web-based insurance application.',
    link: 'https://ydds.lab.web.id/',
    img: yddsImg,
    techs: [
      {
        id: 1,
        title: "Next.js",
        icon: "next-js"
      },
      {
        id: 2,
        title: "SASS",
        icon: "sass"
      },
      {
        id: 3,
        title: "GraphQL",
        icon: "graph-ql"
      },
    ],
  },
  {
    id: 3,
    title: 'Top Bayar',
    desc: 'A digital transaction company landing page.',
    link: 'https://topbayar.co.id/',
    img: topbayarImg,
    techs: [
      {
        id: 1,
        title: "Next.js",
        icon: "next-js"
      },
      {
        id: 2,
        title: "Tailwind CSS",
        icon: "tailwind-css"
      },
    ],
  },
]

export default projects