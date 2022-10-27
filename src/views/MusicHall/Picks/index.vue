<template>
  <div style="height: 100%">
    <div style="margin-top: 20px">
      <Swiper slides-per-group-auto slides-per-view="auto" :navigation="true" :grab-cursor="true">
        <SwiperSlide v-for="banner in banners" :key="banner.bannerId">
          <img :src="banner.pic" class="banner-image" @click="onClick(banner)" />
        </SwiperSlide>
      </Swiper>
    </div>
    <div style="margin-top: 30px">
      <div style="margin: 20px 0">
        <span class="sub-title">独家放送</span>
        <Icon name="more" style="padding-left: 5px"></Icon>
      </div>
      <el-row :gutter="20">
        <el-col :span="6" v-for="item in personalizedPrivateContent" :key="item.id">
          <CoverPlay :pic-url="item.sPicUrl" video :name="item.name"/>
          <div class="truncate text-xs" style="margin-top: 5px">{{ item.name }}</div>
        </el-col>
      </el-row>
    </div>
    <div style="margin-top: 30px">
      <div style="margin: 20px 0">
        <span class="sub-title">推荐电台</span>
        <Icon name="more" style="padding-left: 5px"></Icon>
      </div>
      <el-row :gutter="20">
        <el-col :span="4" v-for="item in personalizedDjProgram" :key="item.id">
          <CoverPlay :pic-url="item.picUrl" :name="item.name" :play-count="0"/>
          <div class="truncate text-xs" style="margin-top: 5px">{{ item.name }}</div>
        </el-col>
      </el-row>
    </div>
    <div style="margin-top: 30px">
      <div style="margin: 20px 0">
        <span class="sub-title">推荐MV</span>
        <Icon name="more" style="padding-left: 5px"></Icon>
      </div>
      <el-row :gutter="20">
        <el-col :span="6" v-for="item in personalizedMv" :key="item.id">
          <CoverPlay :pic-url="item.picUrl" video :name="item.name" :play-count="item.playCount" show-play-count/>
          <div class="truncate text-xs" style="margin-top: 5px">{{ item.name }}</div>
          <div class="truncate text-xs" style="margin-top: 5px;color: rgb(148,163,184)">{{ item.artistName }}</div>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import Icon from "@/components/common/Icon";
import CoverPlay from "@/components/common/CoverPlay";

export default {
  name: "Picks",
  components: {
    Icon, CoverPlay,
    Swiper, SwiperSlide
  },
  data() {
    return {
      banners: [],
      personalizedPrivateContent: [],
      personalizedDjProgram: [],
      personalizedMv: []
    }
  },
  methods: {
    async getBanner() {
      let {banners} = await this.$API.reqGetBanner();
      this.banners = banners;
    },
    async getPersonalizedPrivateContentList() {
      let {result} = await this.$API.reqGetPersonalizedPrivateContentList(4, 0);
      this.personalizedPrivateContent = result;
    },
    async getPersonalizedDjProgram() {
      let {result} = await this.$API.reqGetPersonalizedDjProgram();
      this.personalizedDjProgram = result;

    },
    async getPersonalizedMv() {
      let {result} = await this.$API.reqGetPersonalizedMv();
      this.personalizedMv = result;
    }
  },
  mounted() {
    this.getBanner();
    this.getPersonalizedPrivateContentList();
    this.getPersonalizedDjProgram();
    this.getPersonalizedMv();
  }
}
</script>

<style scoped>
.banner-image {
  cursor: pointer;
  border-radius: 0.5rem;
  object-fit: cover;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.banner-image:hover {
  opacity: 0.8;
}

.swiper {

  margin-left: -0.625rem;
  margin-right: -0.625rem;
}

.swiper .swiper-slide {
  width: 303px;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
}

img, video {
  max-width: 100%;
  height: auto;
}

.sub-title {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}
</style>