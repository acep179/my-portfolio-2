type menuType = {
    id: number;
    title: string;
    link: string;
}

const menus: menuType[] = [
    {
        id: 1,
        title: 'About',
        link: '#about'
    },
    {
        id: 2,
        title: 'Skills',
        link: '#skills'
    },
    {
        id: 3,
        title: 'Experiences',
        link: '#experiences'
    },
    {
        id: 4,
        title: 'Projects',
        link: '#projects'
    },
    // {
    //     id: 5,
    //     title: 'Contact',
    //     link: '#contact'
    // },
    {
        id: 6,
        title: 'Find Me',
        link: '#findMe'
    },
]

export default menus