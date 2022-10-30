<template>
  <div style="line-height: 20px">
    <template v-if="isShowAll">
      {{ text }}
    </template>
    <template v-else>
      <span v-if="isFold">{{ text.substring(0, end) }}...</span>
      <span  v-else>{{ text }}</span>
      <span class="ml-5 hover-color clue-text" style="color: rgb(55,65,81)"
            @click="isFold=!isFold">[{{ isFold ? '详情' : '收起' }}]</span>
    </template>
  </div>
</template>

<script>
export default {
  name: "MoreText",
  props: ['text', 'end'],
  data() {
    return {
      isFold: true
    }
  },
  computed: {
    isShowAll() {
      return !(this.text && this.text.length > this.end);
    }
  }
}
</script>

<style scoped>
</style>