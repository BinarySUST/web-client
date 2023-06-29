const menus = [
    {
        id: 1,
        name: 'Home',
        path: '/'
    },
    {
        id: 2,
        name: 'Events',
        path: '/events',
    },
    {
        id: 3,
        name: 'Blog',
        path: '#',
        submenus: [
            {
                id: 1,
                name: 'All blogs',
                path: '/blog'
            },
            {
                id: 2,
                name: 'Create Blog',
                path: '/blog/create'
            }
        ]
    },
    {
        id: 4,
        name: 'About',
        path: '/about'
    },
    {
        id: 5,
        name: 'Contact',
        path: '/contact'
    }

]

export default menus;