<template>
  <el-row :gutter="20" class="row" @dblclick="play(song.id)">
    <el-col class="col-1" :span="11">
      <div class="left-part">
        <small>{{index.length===1 ? '0'+index : index}}</small>
        <Icon name="like" class="ml-4 mr-2 like"></Icon>
        <span class="truncate" style="max-width: 80%; cursor: default" :title="song.name">
          <small>{{song.name}}</small>
        </span>
        <Icon v-if="song.mv>0" name="video" class="ml-2 video"
              @click="$router.push('/dj')"></Icon>
      </div>
      <div class="right-part icon-action pr-2">
        <div class="icon-group ml-2">
          <Icon title="播放" name="play-outline" class="hover-color"
                @click="play(song.id)" v-if="curSong.id!==song.id"></Icon>
          <span v-else>
            <Icon title="播放" name="play-outline" class="hover-color"
                   @click="togglePlay" v-if="!isPlaying"></Icon>
            <Icon title="暂停" name="stop1" class="hover-color"
                  @click="togglePlay" v-else></Icon>
          </span>

          <el-popover placement="right" trigger="click"  :width="100">
            <template #reference>
              <Icon title="添加到" name="add" class="hover-color"></Icon>
            </template>
            <div class="popover">
              <div class="popover-item" @click="addSong(song)">
                <span><Icon name="play-queue" class="mx-3"></Icon></span>
                <span>播放列表</span>
              </div>
            </div>
          </el-popover>


          <Icon title="下载" name="download1" class="hover-color"></Icon>
          <Icon title="更多操作" name="more1" class="hover-color"></Icon>
        </div>
      </div>
    </el-col>
    <el-col :span="showAlName ? 6 : 12" v-if="showArName">
      <div class="truncate" style="max-width: 90%">
        <el-space spacer="/">
          <small class="truncate hover-color" v-for="(ar, index) in song.ar" :key="index"
                 @click="$router.push('/dj')">
            {{ar.name}}
          </small>
        </el-space>
      </div>
    </el-col>
    <el-col :span="showAlName ? 6 : 12" v-if="showAlName">
      <div :title="song.al.name" class="truncate hover-color" style="max-width: 90%" @click="$router.push('/dj')">
        <small>
          {{song.al.name}}
        </small>
      </div>
    </el-col>
    <el-col :span="1">
      <div class="truncate" style="cursor: default">
        <small>{{ formatDuring }}</small>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Icon from "@/components/common/Icon";
import {useFormatDuring} from "@/utils/number";
import {mapState} from "vuex";


export default {
  name: "SongListItem",
  components: {Icon},
  props: {
    index: {
      type: String,
      required: true
    },
    song: {
      type: Object,
      required: true
    },
    showArName: {
      type: Boolean
    },
    showAlName: {
      type: Boolean
    }
  },
  data() {
    return {
    }
  },
  computed: {
    formatDuring() {
      return useFormatDuring(this.song.dt / 1000)
    },
    ...mapState({
      curSong: state => state.player.song,
      isPlaying: state => state.player.isPlaying
    }),

  },
  methods: {
    play(id) {
      this.$store.dispatch("play", id);
      this.$emit('addPlaylist')
    },
    togglePlay() {
      this.$store.commit("togglePlay");
    },
    addSong(song) {
      this.$store.commit('addPlaylist', {replace:false,playlist:[song]})
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
.popover {
  display: flex;
  flex-direction: column;
  padding: 5px;

  .popover-item {
    display: flex;
    align-items: center;

    cursor: pointer;
    padding: 5px;
    &:hover {
      background-color: rgba(52,211,153,0.03);
    }
  }
}

.row {
  padding: 10px 20px 10px 8px;
  align-items: center;
  &:hover {
    background-color: rgb(245, 245, 245);
    .col-1{
      .right-part {
        display: inline-block;
      }
    }

  }

  .col-1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left-part {
      display: flex;
      align-items: center;
      width: 80%;
      .like {
        cursor: pointer;
        &:hover {
          color: red;
        }
      }
      .video {
        cursor: pointer;
        &:hover {
          color: orange;
        }
      }
    }
    .right-part {
      display: none;
      .icon-group {
        display: flex;
        align-items: center;
        column-gap: 10px;
        color: rgb(156,163,175);
      }
    }
  }
}

</style>