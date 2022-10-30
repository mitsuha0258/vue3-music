<template>
  <div class="playlist-info">
    <img class="cover-img rounded-lg" :src="playlist.coverImgUrl" alt="">
    <div class="text-box pl-5 py-1" style="width: 100%">
      <div>
        <div class="text-2xl font-weight-7">{{playlist.name}}</div>
        <div class="text-dc text-xs pb-2 pt-3">
          <el-avatar :src="playlist.creator.avatarUrl" size="small" round></el-avatar>
          <span class="ml-2" style="cursor: default">{{playlist.creator.nickname}}</span>
          <span class="ml-5 text-dc">
            <span class="ml-4 hover-color" v-for="tag in playlist.tags" :key="tag">#{{tag}}</span>
          </span>
        </div>
        <div class="text-xs" style="color: rgb(107,114,128); line-height: 18px">
          <MoreText :text="playlist.description" :end="90"></MoreText>
        </div>
      </div>
      <el-row :gutter="20" class="pt-3">
        <el-col :span="3">
          <button class="button" @click="$emit('playAll')" style="width: 100%">
            <Icon name="play-outline" size="18" class="mr-1"></Icon>
            <span>播放全部</span>
          </button>
        </el-col>
        <el-col :span="3">
          <button class="button-outline" style="width: 100%">
            <Icon name="like" size="18" class="mr-1"></Icon>
            <span>收藏</span>
          </button>
        </el-col>
        <el-col :span="3">
          <button class="button-outline" style="width: 32px">
            <Icon name="more2"></Icon>
          </button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import MoreText from "@/components/common/MoreText";
import Icon from "@/components/common/Icon";
export default {
  name: "PlaylistInfo",
  components: {Icon, MoreText},
  props: ['playlist'],
  methods: {}
}
</script>

<style lang="scss" scoped>
.playlist-info {
  display: flex;
  .cover-img {
    height: 175px;
    width: 175px;
    object-fit: cover;

  }
  .text-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>