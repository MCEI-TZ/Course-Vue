<template>
  <div v-if="isMine" class="flex justify-end">
    <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
      {{ message }}
    </div>
  </div>

  <!-- Example Received Message -->
  <div v-else class="flex">
    <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
      <span>
        {{ message }}
      </span>
      <img v-if="image" :src="image" alt="YesOrNot" class="w-52 h-52 object-cover rounded-md" />
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Propps {
  message: string
  isMine: boolean
  image?: string
}
defineProps<Propps>()
</script>
