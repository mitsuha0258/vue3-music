<template>
  <div class="a">
    <div class="b1">
      <span class="c1">edcd</span>
    </div>
    <div class="b2">
      <span class="c2">123</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dj"
}
</script>

<style scoped lang="scss">
$bg-height: 100px;
.a{
  height: 100%;
  .b1 {
    height: $bg-height;
    background-color: #34d399;
    .c1 {
      font-size: 20px;
      color: orange;
    }
  }
  .b2 {
    height: $bg-height;
    background-color: pink;
  }
}
</style>