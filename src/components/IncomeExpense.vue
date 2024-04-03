<template>
    <div class="flex flex-row justify-around mt-3 p-2 border border-gray-100 shadow-md">
        <div class="border-r border-gray-200 basis-1/2">
            <h4 class="uppercase font-semibold text-sm text-center">INCOME</h4>
            <p class="font-semibold text-green-600">+${{props.income}}</p>
        </div>

        <div class="basis-1/2">

            <h4 class="uppercase text-center font-semibold text-sm mx-auto">EXPENSE</h4>
            <p class="font-semibold text-red-600">${{props.expense}}</p>
        </div>
    </div>

</template>

<script setup>
  import {defineProps} from 'vue'

  const props = defineProps({
    income: {
        type: Number,
        required: true,
    },
    expense: {
        type: Number,
        required: true,
    }
  })


</script>