<template>
    <el-container class="app">
      <el-aside width="200px">
        <SideBar></SideBar>
      </el-aside>
      <el-container>
        <el-header height="60px" class="header pl-9 pr-0">
          <Header></Header>
        </el-header>
        <ElScrollbar>
          <el-main class="px-10 pt-0 el-main">
            <router-view></router-view>
          </el-main>
        </ElScrollbar>
        <el-footer height="65px" class="px-10">
          <Footer></Footer>
        </el-footer>
      </el-container>
    </el-container>

</template>

<script>
import {ElContainer, ElAside, ElHeader, ElFooter} from 'element-plus'
import SideBar from "@/components/layout/SideBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default {
  name: 'App',
  components: {
    ElAside, ElContainer, ElFooter, ElHeader,
    SideBar, Header, Footer
  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style lang="scss">
/*隐藏默认scrollbar*/
::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;height: 0;
}

.app {
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  .side-bar{

  }

  .header {
    border-bottom: rgb(243, 243, 243) 1px solid;
  }

  .el-main {
    overflow: hidden;
  }
}


</style>
