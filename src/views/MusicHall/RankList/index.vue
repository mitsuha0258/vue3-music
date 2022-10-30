<template>
  <div class="rank-list">
    <div class="text-xl font-weight-7 pt-3 pb-3">
      官方榜
    </div>
    <el-row :gutter="20">
      <el-col :span="6" v-for="item in topListDetail.slice(0,4)" :key="item.id">
        <div class="rank-box" @click="toPlaylist(item.id)">
          <CoverPlay :name="item.name" :pic-url="item.coverImgUrl" :play-count="item.playCount" show-play-count
                     class="cover-play"></CoverPlay>
          <div class="px-4 text-box">
            <div class="text-xl font-weight-7 pb-2">{{item.name}}</div>
            <ul>
              <li class="py-1" v-for="(track, index) in item.tracks" :key="index">
                <div class="truncate">
                  <span>{{index+1}}</span>
                  <span class="ml-1">{{track.first}} - {{track.second}}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="text-xl font-weight-7 pt-5 pb-3">
      全球榜
    </div>
    <el-row :gutter="20">
      <el-col :span="3" class="pb-4" v-for="item in topListDetail.slice(4)" :key="item.id" @click="toPlaylist(item.id)">
        <CoverPlay :name="item.name" :pic-url="item.coverImgUrl" :play-count="item.playCount"></CoverPlay>
        <div class="text-xs mt-2">{{item.name}}</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CoverPlay from "@/components/common/CoverPlay";
export default {
  name: "RankList",
  components: {CoverPlay},
  data() {
    return {
      topListDetail: []
    }
  },
  methods: {
    async getTopListDetail() {
      let {list} = await this.$API.reqGetTopListDetail();
      this.topListDetail = list;
    },
    toPlaylist(id) {
      this.$router.push(`/playlist?id=${id}`);
    }
  },
  mounted() {
    this.getTopListDetail();
  }
}
</script>

<style scoped lang="scss">
.rank-list{

  .rank-box {
    display: flex;
    align-items: center;
    border-radius: 0.5rem;
    background-color: rgb(243,244,246);
    cursor: pointer;

    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;

    &:hover {
      transform: translate(0, -0.25rem) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);
    }

    .cover-play {
      width: 145px;
      &:hover {
        transform: none;
      }
    }

    .text-box {
      width: 150px;
      box-sizing: border-box;
    }
  }
}

</style>