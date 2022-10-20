<template>
  <span style="height: 100%">
    <ElAvatar size="small" round >
      <template #default><Icon name="user"></Icon></template>
    </ElAvatar>
    <span class="user-name" v-if="isLogin">{{ profile.nickname }}</span>
    <span class="user-name" @click="showLogin=true" v-else>点击登录</span>
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
.user-name {
  font-size: 12px;
  margin-left: 8px;
  line-height: 100%;
  /*padding-bottom: 5px;*/
}

</style>