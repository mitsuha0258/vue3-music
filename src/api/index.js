//统一管理项目接口的模块

import requests from "./ajax";

// requests({method: 'get', url: ''})

export const reqGetBanner = () => requests({method: 'get', url: '/banner', params: {type: 1}})

export const reqGetPersonalizedPrivateContentList = (limit, offset) => requests({method: 'get', url: '/personalized/privatecontent/list', params:{limit: limit, offset: offset}})

export const reqGetPersonalizedDjProgram = () => requests({method: 'get', url: '/personalized/djprogram'})

export const reqGetPersonalizedMv = () => requests({method: 'get', url: '/personalized/mv'})

export const reqGetTopListDetail = () => requests({method: 'get', url: '/toplist/detail'})