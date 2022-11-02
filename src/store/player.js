import {reqGetSongUrl, reqGetSongDetail} from "@/api";

// const PQ = [
//     {
//         id: 0,
//         name: 'ssdfdvdf',
//         ar: [
//             {
//                 name: 'fs'
//             }
//         ],
//         dt: 285160
//     },
//     {
//         id: 1,
//         name: '设计费',
//         ar: [
//             {
//                 name: '123'
//             },
//             {
//                 name: '123'
//             },
//             {
//                 name: '123'
//             }
//         ],
//         dt: 285160
//     },
//     {
//         id: 3,
//         name: '多款进口奶粉v',
//         ar: [
//             {
//                 name: '的说法是'
//             }
//         ],
//         dt: 285160
//     }
// ]

const state = {
    audio: new Audio(),  // 音频对象
    playMode: 1,  // 循环模式 0：单曲循环；1：列表循环；2：随机播放
    volume: 60,  // 音量
    playQueue: [],  // 播放队列
    id: 0,  // 歌曲id
    url: '', // 歌曲播放地址
    songUrl: {},  // 包括歌曲播放地址
    song: {},  // 歌曲详情，不包括播放地址
    isPlaying: false,  // 是否正在播放
    isPause: false,  // 是否暂停
    sliderInput: false,  // 是否正在拖动进度条
    ended: false,  // 是否播放结束
    muted: false,  // 是否静音
    curTime: 0,  // 当前播放时间
    duration: 100,  // 总播放时间

    num: [1,2,3,4]

};

const mutations = {
    setAudio(state, payload){
        Object.assign(state.audio, payload)
    },
    setPlayMode(state, playMode){state.playMode=playMode},
    setVolume(state, volume){state.volume=volume},
    setPlayQueue(state, playQueue){state.playQueue=playQueue},
    setSongUrl(state, songUrl){state.songUrl=songUrl},
    setSong(state, song){state.song=song},
    setPlaying(state, isPlaying){state.isPlaying=isPlaying},
    setPause(state, isPause){state.isPause=isPause},
    setSliderInput(state, sliderInput){state.sliderInput=sliderInput},
    setEnded(state, ended){state.ended=ended},
    setMuted(state, muted){state.muted=muted},

    setDuration(state, duration){state.duration=duration},

    init(state) {
        state.audio.volume = state.volume / 100;
    },

    // 向播放队列添加歌单（包括单个歌曲）
    addPlaylist(state, {replace, playlist}) {
        if(replace) {
            state.playQueue = playlist;
        }
        else {
            //TODO: 可以优化。1.没必要选择列表类型；
            const len = state.playQueue.length;
            playlist.forEach(song => {
                if(state.playQueue.length === 0) {
                    state.playQueue.push(song);
                }
                else{
                    let flag = 0;
                    for(let i = 0; i < len; i++){
                        if(state.playQueue[i].id === song.id) {
                            flag = 1
                            break;
                        }
                    }
                    if(flag === 0) {
                        state.playQueue.push(song);
                    }
                }
            })
        }
    },

    // 清空播放队列
    clearPlayQueue(state){
        state.songUrl = {}
        state.song = {}
        state.isPlaying = false;
        state.isPause = false;
        state.sliderInput = false;
        state.ended = false;
        state.muted = false;
        state.currentTime = 0;
        state.playQueue = [];
        state.audio.load();
        setTimeout(() => {
            state.duration = 0;
        }, 500)
    },

    // 重新播放
    rePlay(state) {
        setTimeout(() => {
            state.currentTime = 0;
            state.audio.play();
        }, 1500);
    },

    // 切换播放/暂停
    togglePlay(state) {
        if(!state.song.id) return;
        if(state.isPlaying) {
            state.audio.pause();
        }
        else {
            state.audio.play();
        }
        state.isPlaying = !state.isPlaying;
    },

    // 切换播放类型
    togglePlayMode(state) {
        if(state.playMode === 2) {
            state.playMode = 0;
        }
        else {
            state.playMode++;
        }
    },

    // 切换静音模式
    toggleMuted(state) {
        state.muted = !state.muted;
        state.audio.muted = state.muted;
    },

    // 修改播放时间
    setCurTime(state, val){
        state.curTime = val;
        state.audio.currentTime = val;
        state.sliderInput = false;
    },

    // 定时器
    interval(state) {
        if(state.isPlaying && !state.sliderInput) {
            state.curTime = parseInt(state.audio.currentTime.toString());
            state.duration = parseInt(state.audio.duration.toString());
            state.ended = state.audio.ended;
        }
    }


};

const actions = {
    // 播放
    async play({commit}, id) {
        if(id === state.id) return;
        commit('setPlaying', false);

        // data: [song]
        const {data} = await reqGetSongUrl(id);
        commit('setAudio', {src:data[0].url})
        state.audio.play().then(() => {
            commit('setPlaying', true);
            commit('setSongUrl', data[0]);
        }).catch(res => {
            console.log(res);
        })

        // songs: [song]
        const {songs} = await reqGetSongDetail(id);
        commit('setSong', songs[0])
        commit('addPlaylist', {replace:false, playlist:[songs[0]]})
    },

    // 随机播放
    randomPlay({dispatch}) {
        // TODO: sample() 可能有问题  lodash包含这些函数
        dispatch('play', state.playQueue.sample().id)
    },

    // 下一首
    goNext({commit, dispatch}) {
        if(state.playMode === 0) {
            commit('rePlay');
        }
        else if(state.playMode === 1) {
            dispatch('play', getters.nextSong().id)
        }
        else if(state.playMode === 2) {
            dispatch('randomPlay')
        }
    },

    // 上一首
    goPrev({commit, dispatch}) {
        console.log(getters.preSong())
        if(state.playMode === 0) {
            commit('rePlay');
        }
        else if(state.playMode === 1) {
            dispatch('play', getters.preSong().id)
        }
        else if(state.playMode === 2) {
            dispatch('randomPlay')
        }
    },

    // 播放结束
    playEnd({dispatch}) {
        dispatch('goNext')
    }

}

const getters = {
    curIndex() {
        return state.playQueue.findIndex(song => song.id === state.song.id)
    },
    nextSong() {
        const curIndex = getters.curIndex();
        if(curIndex === state.playQueue.length-1) {
            return state.playQueue[0];
        }
        else {
            return  state.playQueue[curIndex+1];
        }
    },
    preSong() {
        const curIndex = getters.curIndex();
        if (curIndex === 0) {
            return state.playQueue[state.playQueue.length-1];
        }
        else {
            return state.playQueue[curIndex-1];
        }
    }
};

export default {
    state, mutations, actions, getters
}