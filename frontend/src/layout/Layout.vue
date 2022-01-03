<template>
  <a-layout id="components-layout-demo-fixed">
    <navbar />
    <a-layout-content id="layout-content">
      <div id="content">
        <slot></slot>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'Layout',
  components: {
    Navbar,
  }
}
</script>

<style scoped>
#layout-content {
  padding: 0 50px;
  margin: 100px 0 40px;
}
#content {
  background: #fff;
  padding: 24px;
}
</style>
