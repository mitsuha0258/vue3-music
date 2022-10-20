<template>
  <div class="header">
    <el-row  justify="space-between" style="height: 100%; align-items: center;">
      <el-col :span="12">
        <div style="margin-left: 15px">
          <Icon name="back" size="14" style="padding: 0 10px"></Icon>
          <Icon name="more" size="14" style="padding: 0 10px"></Icon>
          <router-link to="/recommendation" class="menu-title">推荐</router-link>
          <router-link to="/musichall" class="menu-title">音乐馆</router-link>
          <router-link to="/video" class="menu-title">视频</router-link>
          <router-link to="/dj" class="menu-title">电台</router-link>
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
  color: rgb(52, 211, 153);
}

/deep/ .el-input{
  --el-input-focus-border: #34d399;
  --el-input-focus-border-color: #34d399;
}
</style>