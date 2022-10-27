<template>
  <svg class="icon" aria-hidden="true" :style="{'font-size': size+'px', 'color': color}">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script>
export default {
  name: "Icon",
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: '16'
    },
    color: {
      type: String,
      default: undefined
    }
  }
}
</script>

<style scoped>

</style>