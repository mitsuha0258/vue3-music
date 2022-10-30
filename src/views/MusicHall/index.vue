<template>
  <div class="music">
    <el-affix target=".music" :offset="60">
      <div class="tab-box pt-2">
        <el-tabs v-model="curMenu" @tab-click="onTabClick">
          <el-tab-pane v-for="(menu, index) in menus" :key="index" :label="menu.name" :name="menu.key" class="text-main"/>
        </el-tabs>
      </div>
    </el-affix>
    <div style="height: 100%; margin-top: 10px">
      <RouterView/>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicHall",
  data() {
    return {
      curMenu: 'picks',
      menus: [
        {
          name: '精选',
          key: 'picks',
        },
        {
          name: '有声电台',
          key: 'radio',
        },
        {
          name: '排行',
          key: 'rankList',
        },
        {
          name: '歌手',
          key: 'singer',
        },
        {
          name: '分类歌单',
          key: 'playlistCategory',
        },
        {
          name: '数字专辑',
          key: 'digitalAlbum',
        }
      ]
    }
  },
  methods: {
    onTabClick({props}) {
      this.$router.push(`/musicHall/${props.name}`)
    }
  }
}
</script>

<style scoped lang="scss">
.music {
  height: 100%;

  .tab-box {
    //height: 40px;
    //width: inherit;
    background-color: white;
  }

  /deep/ .el-tabs__nav-wrap::after {
    height: 0;
  }
  /deep/ .el-tabs__header{
    margin: 0;
  }
  /deep/ .el-tabs__active-bar{
    background-color: #34d399;
  }
  /deep/ .el-tabs__item.is-active {
    color: #34d399;
  }

  /deep/ .el-tabs__item:hover {
    color: #34d399;
    cursor: pointer;
  }

}

</style>