<template >
  <div>
    <div style="height: 100%; display: flex; flex-direction: column">
      <!--    音乐滑动条-->
      <div class="slider">
        <el-slider :show-tooltip="false" :min="0" v-model="curTime" :max="duration" @change="setCurTime"/>
      </div>

      <el-row justify="space-between" style="height: 100%; align-items: center;">
        <el-col :span="8">
          <div style="display: flex">
            <span v-if="JSON.stringify(curSong)==='{}'">
              <img src="./imgs/OpticalDisk.png" class="cover" alt="">
            </span>
            <span v-else>
              <img :src="curSong.al?.picUrl" class="cover" alt="">
            </span>
            <div class="flex-col">
              <div style="display: flex">
                <span v-if="JSON.stringify(curSong)==='{}'">
                  <span>{{ '开源云音乐' }}</span>
                  <span style="color: rgb(148 163 184);"> - {{ '帅到被人砍' }}</span>
                </span>
                <span v-else>
                  <span>{{ curSong.name }}</span>
                  <span style="color: rgb(148 163 184);"> - {{ curSong.ar[0].name }}</span>
                </span>
              </div>
              <div style="display: flex; column-gap: 0.75rem;">
                <Icon name="like" class="hover-color"></Icon>
                <Icon name="Arrowdown" class="hover-color"></Icon>
                <Icon name="more1" class="hover-color"></Icon>
                <Icon name="comment" class="hover-color"></Icon>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="flex-controller">
            <Icon name="sequence" size="18" class="hover-color"></Icon>
            <Icon name="go-pre" size="35" class="hover-color" @click="goPrev"></Icon>
            <Icon name="play" size="45" class="hover-color"
                  v-if="!isPlaying"  @click="togglePlay"></Icon>
            <Icon name="stop" size="45" class="hover-color"
                  v-else @click="togglePlay"></Icon>
            <Icon name="go-next" size="35" class="hover-color" @click="goNext"></Icon>
            <Icon name="volume" size="25" class="hover-color"></Icon>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="flex-action">
            <span>
              {{ formatDuring(currentTime) }} / {{ formatDuring(duration) }}
            </span>
            <span>
              <span class="hover-color text-base mr-2">词</span>
              <span class="hover-color" @click="moveOut">
                <Icon name="play-queue"></Icon>
                <span>{{ playQueue.length }}</span>
              </span>
            </span>
          </div>
        </el-col>
      </el-row>
    </div>

    <PlayQueue ref="playQueue"></PlayQueue>
  </div>

</template>

<script>
import Icon from "@/components/common/Icon";
import {useFormatDuring} from "@/utils/number";
import {mapState} from 'vuex';

export default {
  name: "Footer",
  components: {
    Icon
  },
  computed: {
    ...mapState({
      duration: state => state.player.duration,
      playQueue: state => state.player.playQueue,
      curSong: state => state.player.song,
      isPlaying: state => state.player.isPlaying,
      currentTime: state => state.player.curTime,
      ended: state => state.player.ended,
    }),
    curTime: {
      set: function (val) {
        this.$store.commit('setCurTime', val)
      },
      get: function () {
        return this.currentTime
      }
    }
  },
  data() {
    return {
      timer: null
    }
  },
  methods: {
    setCurTime(val) {
      this.$store.commit('onSliderChange', val);
    },
    moveOut() {
      this.$refs.playQueue.isShowPlayQueue = true
    },
    togglePlay() {
      this.$store.commit("togglePlay")
    },
    goNext() {
      this.$store.dispatch("goNext")
    },
    goPrev() {
      this.$store.dispatch("goPrev")
    },
    formatDuring(val) {
      return useFormatDuring(val);
    }
  },
  mounted() {
    const self = this;
    console.log("start")
    this.timer = setInterval(()=>{
      self.$store.commit('interval')
    }, 1000)
  },
  unmounted() {
    console.log("clear")
    clearInterval(this.timer)
  },
  watch: {
    ended(newVal){
      if(newVal) {
        this.$store.dispatch("playEnd")
      }

    }
  }
}
</script>

<style scoped lang="scss">

.slider {
  /deep/ .el-slider {
    height: 10px;

    .el-slider__runway, .el-slider__bar {
      height: 3px;
      border-radius: 0;
    }

    .el-slider__button-wrapper {
      width: 10px;
      height: 10px;
      top: -7px;

      opacity: 0;
      transition-property: opacity;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }

    &:hover {
      .el-slider__button-wrapper {
        opacity: 1;
        .el-slider__button {
          cursor: pointer;
        }
      }
    }

    .el-slider__button {
      width: 10px;
      height: 10px;
      background-color:  rgb(52,211,153);
    }
  }
}

.cover {
  width: 44px;
  height: 44px;
  border-radius: 5px;
}

.flex-col {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
  font-size: 0.75rem;
  line-height: 1rem;
}

.flex-controller {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.75rem;
}

.flex-action {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 0.625rem;
}
</style>