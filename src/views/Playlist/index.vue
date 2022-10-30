<template>
  <div class="playlist">
    <div class="pt-5" v-if="playlist">
      <PlaylistInfo :playlist="playlist" @play-all="playAll"></PlaylistInfo>
      <el-tabs class="mt-3" v-model="tab">
        <el-tab-pane lazy :label="`歌曲 ${songList.length}`" name="tracks">
          <SongList :song-list="songList"/>
        </el-tab-pane>
        <el-tab-pane lazy label="评论" name="comments">
          <div>评论</div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import PlaylistInfo from "@/views/Playlist/PlaylistInfo";
import SongList from "@/views/Playlist/SongList";

export default {
  name: "Playlist",
  components: {
    PlaylistInfo, SongList
  },
  data() {
    return {
      id: this.$route.query.id,
      playlist: null,
      songList: [],
      tab: 'tracks'
    }
  },
  methods: {
    async getPlaylistDetail() {
      let {playlist} = await this.$API.reqGetPlaylistDetail(this.id);
      this.playlist = playlist;
    },
    async getPlayListTrackAll() {
      let {songs} = await this.$API.reqGetPlayListTrackAll(this.id);
      this.songList = songs;
    },
    playAll() {
      alert(1);
    }
  },
  mounted() {
    this.getPlaylistDetail();
    this.getPlayListTrackAll();
  }
}
</script>

<style lang="scss" scoped>
.playlist {
  /deep/ .el-tabs__nav-wrap::after {
    height: 0;
  }
  /deep/ .el-tabs__header {
    margin: 0;
  }
}

</style>