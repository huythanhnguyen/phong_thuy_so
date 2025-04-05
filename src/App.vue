<!-- src/App.vue -->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
/* Global styles that apply to entire app */
#app {
  width: 100%;
  min-height: 100vh; /* Thay height: 100vh bằng min-height: 100vh */
  overflow: auto; /* Thay overflow: hidden bằng overflow: auto */
}
</style>