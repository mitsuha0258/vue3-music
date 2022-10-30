<template>
  <div class="header">
    <el-row class="row" justify="space-between">
      <el-col :span="12">
        <div style="height: 32px">
          <Icon name="back" size="14"></Icon>
          <Icon name="more" size="14" class="mx-5"></Icon>
          <router-link :to="`/${title.key}`" class="menu-title"
                       :class="{ 'active': curIndex === index }"
            v-for="(title, index) in titles" :key="index" @click="change(index)"
          >{{ title.name }}</router-link>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="right-part">
          <el-input
              v-model="searchKey"
              clearable
              class="el-input"
              placeholder="搜索音乐、MV、歌单"
          >
            <template #suffix>
              <Icon name="search"></Icon>
            </template>
          </el-input>
          <div style="float: inherit; margin-top: 2px">
            <UserInfo class="hover-color mx-2"></UserInfo>
            <Icon name="mail" class="hover-color mx-2"></Icon>
            <Icon name="menu" class="hover-color mx-2"></Icon>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import UserInfo from "@/components/layout/Header/UserInfo";
import Icon from "@/components/common/Icon";

export default {
  name: "Header",
  components: {
    Icon,
    UserInfo
  },
  data() {
    return {
      searchKey: '',
      curIndex: -1,
      titles: [
        {name: '推荐', key: 'recommendation'},
        {name: '音乐馆', key: 'musicHall'},
        {name: '视频', key: 'video'},
        {name: '电台', key: 'dj'},
      ]
    }
  },
  methods: {
    change(index) {
      this.curIndex = index;
    }
  }
}
</script>

<style scoped lang="scss">

.header {
  background-color: rgb(255, 255, 255);
  height: 100%;

  .row {
    height: inherit;
    align-items: center;

    .menu-title {
      margin-left: 20px;
      margin-right: 20px;
      font-size: 1.125rem;
      line-height: 35px;
      color: var(--text-color);
      &:hover {
        text-decoration: none;
        color: var(--el-color-primary) !important;
      }
    }

    .right-part {
      float: right;
      margin-right: 10px;

      .el-input {
        width: 250px;
        margin-right: 70px;
      }
    }
  }
}

.active {
  cursor: default;
  color: var(--el-color-primary) !important;
}

/deep/ .el-input{
  --el-input-focus-border: var(--el-color-primary);
  --el-input-focus-border-color: var(--el-color-primary);
}
</style>