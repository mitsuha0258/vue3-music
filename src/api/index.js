//统一管理项目接口的模块

import requests from "./ajax";

// requests({method: 'get', url: ''})

// 音乐馆精选banner
export const reqGetBanner = () => requests({method: 'get', url: '/banner', params: {type: 1}})

// 精选：独家放送
export const reqGetPersonalizedPrivateContentList = (limit, offset) => requests({method: 'get', url: '/personalized/privatecontent/list', params:{limit: limit, offset: offset}})

// 精选：推荐电台
export const reqGetPersonalizedDjProgram = () => requests({method: 'get', url: '/personalized/djprogram'})

// 精选：推荐MV
export const reqGetPersonalizedMv = () => requests({method: 'get', url: '/personalized/mv'})

// 获取排行榜中的歌单详情
export const reqGetTopListDetail = () => requests({method: 'get', url: '/toplist/detail'})

// 获取歌单详情介绍
export const reqGetPlaylistDetail = (id, s=8) => requests({method: 'get', url: '/playlist/detail', params:{id, s}})

// 获取歌单中所有歌曲
export const reqGetPlayListTrackAll = (id) => requests({method: 'get', url: '/playlist/track/all', params:{id}})

// 获取歌曲url 传给audio播放
export const reqGetSongUrl = (id) => requests({method:'get', url: '/song/url', params:{id}})

// 获取歌曲详情 无url
export const reqGetSongDetail = (id) => requests({method:'get', url: '/song/detail', params:{id}})