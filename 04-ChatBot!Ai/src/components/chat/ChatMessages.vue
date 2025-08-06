<template>
  <div class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <!-- Example Message -->
      <ChatBubble :is-mine="true" :message="'Hey there°'" />
      <ChatBubble
        :is-mine="false"
        :message="'no'"
        :image="'https://yesno.wtf/assets/no/3-80a6f5b5d6684674bcfeda34accca4e1.gif'"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ChatBubble from './ChatBubble.vue'
</script>
