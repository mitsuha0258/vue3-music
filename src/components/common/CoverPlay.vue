<template>
  <div class="cover-play-image" :class="video===true ? 'aspect-video' : 'aspect-square'">
    <img :src="picUrl" :alt="name" class="object-cover"/>
    <div class="mask">
      <Icon class="play-icon" name="play-filling" size="52" color="white"></Icon>
    </div>
    <div class="play-count" v-if="showPlayCount">
      <Icon name="play-filling" style="margin-right: 5px" color="white"></Icon>
      <text>{{ numberFormat }}</text>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/common/Icon";
import {useNumberFormat} from '@/utils/number';

export default {
  name: "CoverPlay",
  components: {Icon},
  props: {
    picUrl: {
      type: String,
      required: true
    },
    playCount: {
      type: Number
    },
    name: {
      type: String
    },
    showPlayCount: {
      type: Boolean
    },
    video: {
      type: Boolean
    }
  },
  data() {
    return {
      numberFormat: ''
    }
  },
  mounted() {
    this.numberFormat = useNumberFormat(this.playCount || 0);
  }
}
</script>

<style scoped lang="scss">
.aspect-video{
  aspect-ratio: 16 / 9;
}
.aspect-square{
  aspect-ratio: 1 / 1;
}

.cover-play-image {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 0.5rem;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  .object-cover {
    object-fit: cover;
    background-color: rgb(249,250,251);
    width: 100%;
  }

  .mask {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0);
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 500ms;

    .play-icon {
      transition-property: opacity;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
      opacity: 0;

      &:hover {
        color: #34d399 !important;
      }
    }
  }

  .play-count {
    position: absolute;
    bottom: 0.25rem;
    right: 0.25rem;
    display: flex;
    --tw-scale-x: .9;
    --tw-scale-y: .9;
    transform: translate(0, 0) rotate(0) skewX(0) skewY(0) scaleX(.9) scaleY(.9);
    align-items: center;
    border-radius: 9999px;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 0.125rem 0.5rem;
    font-size: 0.75rem;
    line-height: 1rem;

    color: rgb(255,255,255);
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  &:hover {
    --tw-translate-y: -0.25rem;
    transform: translate(0, -0.25rem) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);

    .mask {
      background-color: rgba(0, 0, 0, 0.5);
      .play-icon {
        opacity: 1;
      }
    }
    .play-count {
      opacity: 0;
    }
  }
}
</style>