<script setup>
import { defineProps } from 'vue';
defineProps({
  size: { type: String, required: false, default: '1.5em' },
  color: { type: String, required: false, default: 'black' },
  fill: { type: String, required: false, default: 'none' }
});
</script>
<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 10 19"
    :fill="fill"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.05963 1.24368C5.54965 4.11944 3.79577 5.87295 1.05963 9.24368C3.79577 12.6144 5.54965 14.3679 9.05963 17.2437"
      :stroke="color"
      stroke-width="1.71415"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
