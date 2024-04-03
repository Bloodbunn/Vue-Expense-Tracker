<template>
    <h2 class="font-bold text-lg mt-4 text-left border-b-2 border-gray-200 ">Add new transaction</h2>
    <form @submit.prevent="onSubmit">
        <div class="flex flex-col text-left">
            <label class="my-1 font-bold text-sm" for="text">Text</label>
           <input v-model="text" class="p-1 border border-gray-300 outline-blue-400" type="text" id="text" placeholder="Enter text...">
        </div>

        <div class="flex flex-col text-left">
            <label class="mt-3 mb-1 font-bold text-sm" for="amount">Amount <br>
                (Negative: Expense, Positive: Income)</label>
            
            <input v-model="amount" class="p-1 border border-gray-300 outline-blue-400" placeholder="Enter amount..." type="text" id="amount">

        </div>
        <button class="w-full bg-purple-500 text-white text-sm font-bold p-1 mt-2 hover:bg-purple-700 transition-all duration-200 ease-linear">Add Transaction</button>
    </form>
</template>

<script setup>
  import {ref, defineEmits} from 'vue'
  import {useToast} from 'vue-toastification'

  const toast = useToast() //have to initialize useToast

  const text = ref('')
  const amount = ref('')

  const emit = defineEmits(['transactionSubmitted'])// here we create the emit

  const onSubmit = () => {
    if (!text.value || !amount.value) {
        toast.error("Both fields must be filled");
        return;

    }
    
    
    const transactionData = {
        text: text.value,
        amount: parseFloat(amount.value) 
    }
   
    emit('transactionSubmitted', transactionData) //here we pass data along with it. we emit a function because our data (transactions array) is in the App.vue
    text.value = ''
    amount.value = ''
  }
</script>