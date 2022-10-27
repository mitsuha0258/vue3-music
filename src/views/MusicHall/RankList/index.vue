<template>
  <div class="rank-list">
    <div class="title">
      官方榜
    </div>
    <el-row :gutter="20">
      <el-col :span="6" v-for="item in topListDetail.slice(0,4)" :key="item.id"
              style="display: flex; align-items: center; border-radius: 0.5rem; background-color: rgb(243,244,246); cursor: pointer">
        <CoverPlay :name="item.name" :pic-url="item.coverImgUrl" :play-count="item.playCount" show-play-count
                   style="width: 145px"></CoverPlay>
        <div style="display: flex;flex-direction: column;padding: 0 1.25rem;flex: 1 0 0%">
          <div style="font-weight: 700; font-size: 1.25rem"> {{ item.name }} </div>
          <div >
            <div v-for="(track, index) in item.tracks" :key="index">
              <div>
                <span> {{index + 1}} </span>
                <div>{{track.first}} - {{track.second}}</div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="title">
      全球榜
    </div>
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
    }
  },
  mounted() {
    this.getTopListDetail();
  }
}
</script>

<style scoped lang="scss">
.rank-list{
  .title {
    padding-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 700;
  }
}

</style>