import 'vuetify/styles' // Global CSS has to be imported
import { createApp } from 'vue'
import { createStore } from 'vuex'

import vuetify from './plugins/vuetify'
import App from './App.vue'
import Store from './store/index.js'

const store = createStore(Store)

const app = createApp(App)

app.use(store)
app.use(vuetify)

app.mount('#app')