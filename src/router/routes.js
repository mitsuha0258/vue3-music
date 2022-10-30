export default [
    {
        path: '/',
        redirect: '/musicHall'
    },
    {
        path: '/recommendation',
        component: () => import('@/views/Recommendation')
    },
    {
        path: '/musicHall',
        component: () => import('@/views/MusicHall'),
        redirect: {name: 'picks'},
        children: [
            {
                name: 'picks',
                path: 'picks',
                component: () => import('@/views/MusicHall/Picks')
            },
            {
                path: 'playlistCategory',
                component: () => import('@/views/MusicHall/PlaylistCategory')
            },
            {
                path: 'rankList',
                component: () => import('@/views/MusicHall/RankList')
            },
            {
                path: 'singer',
                component: () => import('@/views/MusicHall/Singer')
            }
        ]
    },
    {
        path: '/video',
        component: () => import('@/views/Video')
    },
    {
        path: '/dj',
        component: () => import('@/views/Dj')
    },
    {
        path: '/playlist',
        component: () => import('@/views/Playlist')
    }
]