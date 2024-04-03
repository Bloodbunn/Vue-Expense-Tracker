import { createApp } from 'vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import App from './App.vue'
import store from './store'

const app = createApp(App).use(store)
app.use(Toast)
app.mount('#app')
