type socmedType = {
  id: number;
  platform: string;
  username: string;
  link: string;
  icon: string;
}

const socmeds:socmedType[] = [
  {
    id: 1,
    platform: 'WhatsApp',
    username: '0858 1342 6166',
    link: 'https://wa.me/6285813426166',
    icon: 'whatsapp'
  },
  {
    id: 2,
    platform: 'Instagram',
    username: '@acepawaludin179',
    link: 'https://www.instagram.com/acepawaludin179/',
    icon: 'ig'
  },
  {
    id: 3,
    platform: 'LinkedIn',
    username: '@acep179',
    link: 'https://www.linkedin.com/in/acep179/',
    icon: 'linkedin'
  },
  {
    id: 4,
    platform: 'Github',
    username: '@acep179',
    link: 'https://github.com/acep179',
    icon: 'github'
  },
  {
    id: 5,
    platform: 'Fastwork',
    username: '@acep179',
    link: 'https://fastwork.id/user/acep179',
    icon: 'fastwork'
  },
  {
    id: 6,
    platform: 'E-Mail',
    username: 'acep179.project@gmail.com',
    link: 'mailto:acep179.project@gmail.com',
    icon: 'email'
  },
]

export default socmeds