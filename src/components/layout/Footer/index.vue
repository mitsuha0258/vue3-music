<template >
  <div style="height: 100%">
    <el-row justify="space-between" style="height: 100%; align-items: center;">
      <el-col :span="8">
        <div style="display: flex">
          <img src="./imgs/OpticalDisk.png" class="cover" alt="">
          <div class="flex-col">
            <div style="display: flex">
              <span>{{ '开源云音乐' }}</span>
              <span style="color: rgb(148 163 184); margin-left: 8px"> - {{ '帅到被人砍' }}</span>
            </div>
            <div style="display: flex; column-gap: 0.75rem;">
              <Icon name="like" class="hover-color"></Icon>
              <Icon name="Arrowdown" class="hover-color"></Icon>
              <Icon name="more1" class="hover-color"></Icon>
              <Icon name="comment" class="hover-color"></Icon>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="flex-controller">
          <Icon name="sequence" size="18" class="hover-color"></Icon>
          <Icon name="go-pre" size="35" class="hover-color"></Icon>
          <Icon name="play" size="45" class="hover-color"></Icon>
          <Icon name="go-next" size="35" class="hover-color"></Icon>
          <Icon name="volume" size="25" class="hover-color"></Icon>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="flex-action">
          <span>
            {{ '00:00 ' }} / {{ ' 00:00' }}
          </span>
          <span class="hover-color text-base">词</span>
          <span class="hover-color">
            <Icon name="play-queue"></Icon>
            <span>{{ '0' }}</span>
          </span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import Icon from "@/components/common/Icon";
export default {
  name: "Footer",
  components: {
    Icon

  }
}
</script>

<style scoped lang="scss">

.cover {
  width: 44px;
  height: 44px;
  border-radius: 5px;
}

.flex-col {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
  font-size: 0.75rem;
  line-height: 1rem;
}

.flex-controller {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.75rem;
}

.flex-action {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 0.625rem;
}
</style>