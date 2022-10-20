export default [
    {
        path: '/',
        redirect: '/MusicHall'
    },
    {
        path: '/Recommendation',
        component: () => import('@/views/Recommendation')
    },
    {
        path: '/MusicHall',
        component: () => import('@/views/MusicHall')
    },
    {
        path: '/Video',
        component: () => import('@/views/Video')
    },
    {
        path: '/Dj',
        component: () => import('@/views/Dj')
    }
]