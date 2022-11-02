<template>
  <el-drawer v-model="isShowPlayQueue" direction="rtl" :with-header="false"
             size="320px" custom-class="play-queue">
    <div class="card">
      <div class="pr-2 pl-5 py-5">
        <div class="text-xl" style="color: black">播放队列</div>
        <div class="text-xs mt-1 sub-title">
          <div>共 {{playQueue.length}} 首歌曲</div>
          <div class="text-dc hover-color" @click="clearPlayQueue">
            <Icon :title="'清空队列'" name="trash-can" size="20"></Icon>
          </div>
        </div>
      </div>
      <div style="overflow:hidden;">
        <ElScrollbar>
          <div v-for="(song,index) in playQueue" :key="index" class="song-item text-xs"
               :class="{'active': curSong.id===song.id}" @dblclick="play(index, song.id)" @mouseover="change(index)">
            <div class="song-info truncate">
              <div class="up-part">
                <span class="truncate text" style="max-width: 80%">{{ song.name }}</span>
                <Icon v-if="true" name="video" class="ml-2 video"
                      @click="$router.push('/dj')"></Icon>
              </div>
              <div class="truncate text" style="max-width: 80%">
                <el-space spacer="/">
                  <span class="truncate" v-for="(ar, index) in song.ar" :key="index"
                        @click="$router.push('/dj')">
                    <small class="" >
                      {{ar.name}}
                    </small>
                  </span>
                </el-space>
              </div>
            </div>
            <div class="action">
              <div class="icon-group text-dc" v-if="curSong.id===song.id || hoverIndex===index">
                <Icon title="播放" name="play-outline" class="hover-color"
                      @click="play(song.id)" v-if="curSong.id!==song.id">
                </Icon>
                <span v-else>
                  <Icon title="播放" name="play-outline" class="hover-color"
                        @click="togglePlay" v-if="!isPlaying"></Icon>
                  <Icon title="暂停" name="stop1" class="hover-color"
                        @click="togglePlay" v-else></Icon>
                </span>

                <Icon name="like" class="hover-color"></Icon>
                <Icon name="more1" class="hover-color"></Icon>
              </div>
              <div v-else class="truncate text-dc" style="cursor: default">
                <small>{{ formatDuring(song.dt) }}</small>
              </div>
            </div>
          </div>
        </ElScrollbar>
      </div>
    </div>
  </el-drawer>
</template>

<script>
import {useFormatDuring} from "@/utils/number";
import Icon from "@/components/common/Icon";
import {mapState} from "vuex";

export default {
  name: "PlayQueue",
  components: {Icon},
  data() {
    return {
      isShowPlayQueue: false,
      hoverIndex: -1,
    }
  },
  computed: {
    ...mapState({
      playQueue: state => state.player.playQueue,
      curSong: state => state.player.song,
      isPlaying: state => state.player.isPlaying
    })
  },
  methods: {
    clearPlayQueue() {
      this.$store.commit('clearPlayQueue')
    },
    formatDuring(dt) {
      return useFormatDuring(dt / 1000)
    },
    play(id) {
      this.$store.dispatch("play", id)
    },
    change(index) {
      this.hoverIndex = index;
    },
    togglePlay() {
      this.$store.commit("togglePlay");
    },
  },
  watch: {
    playQueue(newVal) {
      console.log(newVal.length);
    }
  }
}
</script>

<style scoped lang="scss">
.active {
  border-left: 2px solid rgb(52,211,153);
  .text {
    color: rgb(52,211,153);
  }

  .song-info {
    width: 50% !important;
  }
  .action {
    width: 50% !important;
  }

  background-color: rgba(52,211,153,0.03);
}

.play-queue {

  .card {
    height: 100vh;
    display: flex;
    flex-direction: column;

    .sub-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .song-item {
    padding: 15px 8px 15px 20px;
    display: flex;
    justify-content: space-between;
    height: 40px;
    cursor: default;

    &:hover {
      .text {
        color: rgb(52,211,153);
      }
      background-color: rgba(52,211,153,0.03);
    }

    .song-info {
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .up-part {
        display: flex;
        align-items: center;

        .video {
          cursor: pointer;
          &:hover {
            color: orange;
          }
        }
      }
    }

    .action {
      width: 20%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    .icon-group {
      display: flex;
      align-items: center;
      column-gap: 10px;
    }
  }
}
</style>