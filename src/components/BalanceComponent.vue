<template>
    <h4 class="uppercase text-left font-semibold text-sm" >Your Balance: </h4>
    <p class="font-bold text-lg text-left">${{props.total}}</p>
</template>

<script setup>
  import {defineProps} from 'vue'

  const props = defineProps( {
    total: {
        type: Number,
        required: true,
    }
  })
</script>