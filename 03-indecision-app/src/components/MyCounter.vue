<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps({
  valueProps: { type: Number, required: true },
});
const count = ref(props.valueProps);
const squareCounter = computed(() => count.value * count.value);
</script>

<template>
  <section>
    <h3>Counter: {{ count }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
  </section>
  <div>
    <button @click="count++">+1</button>
    <button @click="count--">-1</button>
  </div>
</template>
