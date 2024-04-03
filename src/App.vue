<template>
  <div class="w-[300px] max-[305px]:w-[90%] mx-auto border border-gray-200 shadow-lg p-5 bg-gray-100">
    <HeaderComponent />
    <BalanceComponent :total="+total" />
    <IncomeExpense :income="+income" :expense="+expense" /> <!--putting plus sign in front of it reaffirms that their type is number. ohterwise they will be considered string and we have declared that they ahve to be of number type in the props-->
    <TransactionList :transactions="transactions" @transactionDeleted="handleTransactionDeleted"/>
    <AddTransaction @transactionSubmitted="handleTransactionSubmitted" />
  </div>


</template>

<script setup>
import HeaderComponent from './components/HeaderComponent.vue'
import BalanceComponent from './components/BalanceComponent.vue'
import IncomeExpense from './components/IncomeExpense.vue';
import TransactionList from './components/TransactionList.vue'
import AddTransaction from './components/AddTransaction.vue';
import { ref, computed, onMounted } from 'vue'
import { useToast } from 'vue-toastification';
const toast = useToast()

const transactions = ref([ //it is better to put our data in the App.vue and pass to the children as props (put data in the global directive)
])

//populating transactions from local storage. put it in mounted to make it run continuously to make the data up to date.
onMounted( () => {
  const savedTransactions = JSON.parse(localStorage.getItem('transactions')) //access the data from local storage
  // parse make it from string to number

  if (savedTransactions) {
    transactions.value = savedTransactions
  }
})
//above we accessed the data, below we update it, and we call the function below everytime we add or delete a transaction to update it.
const saveTransactionsToLocalStorage = () => {
  localStorage.setItem('transactions', JSON.stringify(transactions.value)) //back to string
}

//compute balance
const total = computed ( () => {
  return transactions.value.reduce( (acc, transaction) => {
       return acc + transaction.amount //transaction represents each individual child of the transactions array. acc (accumulator) is used to summate all the amounts of all the children. the zero is the initial value of the acc
  }, 0)
})

//compute income
const income = computed (() => {
  return transactions.value
  .filter((transaction) => transaction.amount > 0) //first we get only the positibve ones by using filter method. transaction here also represents each child just like in the reduce method.
  .reduce((acc, transaction) => {
    return acc + transaction.amount
  }, 0)
  .toFixed(2)
})

//compute expense
const expense = computed (() => {
  return transactions.value.
  filter((transaction) => transaction.amount < 0)
  .reduce( (acc, transaction) => {
    return acc + transaction.amount
  }, 0)
  .toFixed(2)
})

//add transaction
const handleTransactionSubmitted = (transactionData) => {
transactions.value.push({
  id: generateUniqueId(),
  text: transactionData.text,
  amount: transactionData.amount,
})
saveTransactionsToLocalStorage(); //called to update it.

toast.success("Transaction added successfully")



}
//generate unique id
const generateUniqueId = () => {
  return Math.floor(Math.random() * 1000)
}


//delete transaction
const handleTransactionDeleted = (id) => {
  transactions.value = transactions.value.filter ((transaction) => transaction.id !== id)

  saveTransactionsToLocalStorage()
  toast.success("Transaction deleted successfully")

}



</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
