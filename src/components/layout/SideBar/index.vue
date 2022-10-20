<template>
  <div style="background-color: rgb(249, 250, 251); height: 100vh">
    <El-scrollbar>
      <div style="padding-left: 1.5rem; padding-right: 1.5rem; margin-top: 2.5rem"
           v-for="(menuItem, index) in menus" :key="index">
        <div class="menu-title text-main">{{menuItem.name}}</div>
        <div class="menu-item hover-bg text-main"
             :class="{ 'active': cur === index }"
             @click="choose(index)"
             v-for="(menu, index) in menuItem.menus" :key="index">
          <Icon :name="menu.icon"></Icon>
          <span style="margin-left: 5px">{{menu.name}}</span>
        </div>
      </div>
    </El-scrollbar>
  </div>
</template>

<script>
import {ElScrollbar} from 'element-plus'
import Icon from "@/components/common/Icon";

export default {
  name: "SideBar",
  components: {
    Icon,
    ElScrollbar
  },
  data() {
    return {
      cur: -1,
      menus: [
        {
          name: "我的音乐",
          menus: [
            {
              name: "我喜欢",
              icon: "like",
            },
            {
              name: "本地歌曲",
              icon: "computer",
            },
            {
              name: "下载歌曲",
              icon: "download",
            },
            {
              name: "最近播放",
              icon: "recent",
            },
          ]
        },
      ]
    }
  },
  methods: {
    choose(index) {
      this.cur = index;
    }
  }
}
</script>

<style scoped>

.text-main {
  color: rgb(51,65,85);
}

.menu-title {
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 0.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
}


.menu-item {
  display: flex;
  cursor: pointer;
  align-items: center;
  border-radius: 0.25rem;
  padding: 0.375rem 1rem;
  margin-top: 5px;
  font-size: 0.875rem;
  line-height: 1.25rem;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.hover-bg:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}

.active {
  cursor: default;
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
  --tw-gradient-from: #2dd4bf;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(45 212 191));
  --tw-gradient-to: #34d399;
  --tw-text-opacity: 1;
  color: rgb(248 250 252 / var(--tw-text-opacity));
}

</style>