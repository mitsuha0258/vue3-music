<template>
    <el-container style="height: 100vh; width: 100vw; overflow: hidden;">
      <el-aside width="225px" style="height: 100vh">
        <SideBar></SideBar>
      </el-aside>
      <el-container style="height: 100vh">
        <el-header height="60px" style="padding: 0">
          <Header></Header>
        </el-header>
        <router-view></router-view>
        <el-footer height="80px">
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
  }
}
</script>

<style>
::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;height: 0;
}


</style>
