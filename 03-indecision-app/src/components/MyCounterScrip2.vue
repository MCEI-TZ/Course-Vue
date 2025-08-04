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

<script lang="ts" src="./MyCounterScript2/myCounterScript2.ts"></script>
