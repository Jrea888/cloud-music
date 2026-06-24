import React, {lazy} from 'react'
import {Navigate, RouteObject} from 'react-router-dom'

// 一级路由 懒加载路由，方便分包
const Discover = lazy(() => import('@/views/discover'))
const Mine = lazy(() => import('@/views/mine'))
const Focus = lazy(() => import('@/views/focus'))
const Download = lazy(() => import('@/views/download'))
// 发现音乐二级路由
const Recommend = lazy(() => import('@/views/discover/recommend'))
const Ranking = lazy(() => import('@/views/discover/ranking'))
const Songs = lazy(() => import('@/views/discover/songs'))
const Podcast = lazy(() => import('@/views/discover/podcast'))
const Singer = lazy(() => import('@/views/discover/singer'))
const Release = lazy(() => import('@/views/discover/release'))

const routerConfig: Array<RouteObject> = [
    {
        path: '/',
        element: <Navigate to="/discover" replace />
    },
    {
        path: '/discover',
        element: <Discover />,
        children: [
            {
                path: '/discover',
                element: <Navigate to="/discover/recommend" replace />
            },
            {
                path: '/discover/recommend',
                element: <Recommend />
            },
            {
                path: '/discover/ranking',
                element: <Ranking />
            },
            {
                path: '/discover/songs',
                element: <Songs />
            },
            {
                path: '/discover/podcast',
                element: <Podcast />
            },
            {
                path: '/discover/singer',
                element: <Singer />
            },
            {
                path: '/discover/release',
                element: <Release />
            }
        ]
    },
    {
        path: '/music',
        element: <Mine />
    },
    {
        path: '/focus',
        element: <Focus />
    },
    {
        path: '/download',
        element: <Download />
    }
]

export default routerConfig
