<template>
  <span style="height: 100%">
    <ElAvatar size="small" round>
      <template #default><Icon name="user"></Icon></template>
    </ElAvatar>
    <span class="text-xs ml-1" v-if="isLogin">{{ profile.nickname }}</span>
    <span class="text-xs ml-1" @click="showLogin=true" v-else>点击登录</span>
  </span>
</template>

<script>
import {ElAvatar} from 'element-plus'

export default {
  name: "UserInfo",
  components: {
    ElAvatar
  },
  data() {
    return {
      isLogin: false,
      showLogin: false,
      profile: ''
    }
  }
}
</script>

<style scoped>

</style>