<template>
  <a-layout-header id="layout-header">
    <div class="logo" />
    <a-menu
      theme="dark"
      mode="horizontal"
      :default-selected-keys="['1']"
      id="navbar"
    >
      <a-menu-item key="1"> Home </a-menu-item>
      <a-menu-item key="2"> Forms </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script>
export default {
  name: 'custom-navbar'
}
</script>

<style scoped>
.logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}

#layout-header {
  position: fixed;
  z-index: 1;
  width: 100%;
}

#navbar {
  line-height: 64px;
}
</style>
