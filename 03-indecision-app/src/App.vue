<script setup lang="ts">
import MyCounter from './components/MyCounter.vue';
import MyCounterScript2 from './components/MyCounterScrip2.vue';
</script>

<template>
  <h1>My fisrt app in Vue</h1>
  <hr />
  <MyCounter :valueProps="1" />
  <MyCounterScript2 :valueProp="2" />
</template>
