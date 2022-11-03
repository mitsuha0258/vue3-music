<template>
  <div class="mt-2">
    <el-row :gutter="20" class="text-xs py-2 pl-2 pr-5" style="color: rgb(156,163,175)">
      <el-col :span="11">歌曲</el-col>
      <el-col :span="6">歌手</el-col>
      <el-col :span="6">专辑</el-col>
      <el-col :span="1">时长</el-col>
    </el-row>
    <SongListItem class="text-sm" :class="{'playing': curSong.id===song.id}" :song="song" :index="`${index+1}`"
                  show-ar-name show-al-name v-for="(song,index) in songList.slice(0,pageSize*page)" :key="song.id"
                  @addPlaylist="addPlaylist"
    ></SongListItem>
    <div class="py-5" style="display: flex; justify-content: center" v-if="showMore">
      <el-link :underline="false" @click="loadMore" style="text-align: center; width: 80px;">加载更多</el-link>
    </div>
  </div>
</template>

<script>
import SongListItem from "@/components/common/SongListItem";
import {mapState} from "vuex";
export default {
  name: "SongList",
  components: {SongListItem},
  props: ['songList'],
  data() {
    return {
      pageSize: 10,
      page: 1,
      songId: 0,
    }
  },
  computed: {
    showMore() {
      if(this.songList.length > this.pageSize){
        return this.page < (this.songList.length / this.pageSize);
      }
      else {
        return false;
      }
    },
    ...mapState({
      curSong: state => state.player.song
    })
  },
  methods: {
    loadMore() {
      this.page += 1;
    },
    addPlaylist() {
      this.$store.commit("addPlaylist", {replace:true, playlist:this.songList})
    }
  }
}
</script>

<style scoped>
.playing {
  background-color: rgb(245, 245, 245);
}
</style>