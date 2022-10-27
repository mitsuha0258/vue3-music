<template>
  <div class="header">
    <el-row  justify="space-between" style="height: 100%; align-items: center;">
      <el-col :span="12">
        <div style="margin-left: 15px">
          <Icon name="back" size="14" style="padding: 0 10px"></Icon>
          <Icon name="more" size="14" style="padding: 0 10px"></Icon>
          <router-link :to="`/${title.key}`" class="menu-title"
                       :class="{ 'active': curIndex === index }"
            v-for="(title, index) in titles" :key="index" @click="change(index)"
          >{{ title.name }}</router-link>

        </div>

      </el-col>
      <el-col :span="12">
        <div style="float: right; margin-right: 20px;">
          <el-input
              v-model="searchKey"
              clearable
              class=""
              style="width: 250px; margin-right: 70px"
              placeholder="搜索音乐、MV、歌单"
          >
            <template #suffix>
              <Icon name="search"></Icon>
            </template>
          </el-input>
          <UserInfo class="hover"></UserInfo>
          <Icon name="mail" style="margin: 0 10px" class="hover"></Icon>
          <Icon name="menu" style="margin: 0 10px" class="hover"></Icon>
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

<style scoped>

.hover {
  cursor: pointer;
}
.hover:hover {
  color: rgb(52 211 153);
}

.header {
  background-color: rgb(255, 255, 255);
  height: 100%;
  border-bottom: rgb(243, 243, 243) 1px solid;
}

.menu-title {
  margin-left: 28px;
  margin-right: 28px;
  font-size: 16px;
  color: rgb(51,65,85);
}

.menu-title:hover {
  text-decoration: none;
  color: rgb(52, 211, 153) !important;
}

.active {
  cursor: default;
  color: rgb(52, 211, 153)
}

/deep/ .el-input{
  --el-input-focus-border: #34d399;
  --el-input-focus-border-color: #34d399;
}
</style>