<template>
  <el-drawer v-model="isShowPlayQueue" direction="rtl" :with-header="false"
             size="320px" custom-class="play-queue">
    <div class="card">
      <div class="p-2">
        <div class="text-xl" style="color: black">播放队列</div>
        <div class="text-xs mt-1 sub-title">
          <div>共 {{playQueueNum}} 首歌曲</div>
          <div class="text-dc hover-color" @click="clearPlayQueue">
            <Icon :title="'清空队列'" name="trash-can" size="20"></Icon>
          </div>
        </div>
      </div>
      <div style="overflow:hidden;">
        <ElScrollbar>
          <div v-for="(song,index) in playQueue" :key="song.id" class="song-item text-xs"
               :class="{'active': curIndex===index}" @dblclick="play(index, song.id)" @mouseover="change(index)">
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
              <div class="icon-group text-dc" v-if="curIndex===index || hoverIndex===index">
                <Icon name="play-outline" class="hover-color"></Icon>
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
import {mapGetters, mapState} from 'vuex'
import {useFormatDuring} from "@/utils/number";
import Icon from "@/components/common/Icon";

export default {
  name: "PlayQueue",
  components: {Icon},
  data() {
    return {
      isShowPlayQueue: false,
      curIndex: -1,
      hoverIndex: -1,
    }
  },
  computed: {
    ...mapGetters(['playQueueNum']),
    ...mapState({
      playQueue: state => state.player.playQueue,
    })
  },
  methods: {
    clearPlayQueue() {
      this.$store.commit('clearPlayQueue')
    },
    formatDuring(dt) {
      return useFormatDuring(dt / 1000)
    },
    play(index, id) {
      this.curIndex = index;
      // this.$store.dispatch("play", id)
      console.log(id)
    },
    change(index) {
      this.hoverIndex = index;
    }
  },
  mounted() {
    this.curIndex = this.playQueueNum-1;
  },
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

  background-color: rgba(52,211,153,0.05);
}

.play-queue {
  /deep/ .el-drawer__body {
    padding: 0;
  }

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
    padding: 10px;
    display: flex;
    justify-content: space-between;
    height: 40px;
    cursor: default;

    &:hover {
      border-left: 2px solid rgb(52,211,153);
      .text {
        color: rgb(52,211,153);
      }

      background-color: rgba(52,211,153,0.05);
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