<template>
    <h2 class="font-bold text-lg mt-5 border-b-2 border-gray-200 text-left">History</h2>
    <ul class="mt-2">
        <li v-for="transaction in props.transactions" :key="transaction.id"
            :class="transaction.amount < 0 ? 'border-r-red-600 border-r-2':'border-r-green-600 border-r-2' "
         class="relative group bg-white  p-1 border border-gray-100  shadow-md mt-1 font-semibold text-sm flex justify-between">
            {{transaction.text}} <span>${{ transaction.amount }}</span>
            <button @click="deleteTransaction(transaction.id)" class="absolute w-4 opacity-0 max-md:opacity-100 max-md:w-3 max-md:text-xs group-hover:opacity-100 transition-all duration-300 ease-linear   -left-5 top-2 text-white text-sm bg-red-600">X</button>
        </li>

        
        
    </ul>
</template>

<script setup>
  import {defineProps, defineEmits} from 'vue'

  const props = defineProps({
    transactions: {
        type: Array,
        required: true,
    }
  })
  
  const emit = defineEmits(['transactionDeleted'])
  const deleteTransaction = (id) => {
    emit('transactionDeleted', id) //again, we emit it because the transactions array is in the App.vue
  }
</script>