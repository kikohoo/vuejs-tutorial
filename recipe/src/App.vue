<template>
  <div id="app">
    <!--  -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {  
  width: 40%;
  height: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: #000;
  color: #fff;
  padding: 10px;
}
</style>
