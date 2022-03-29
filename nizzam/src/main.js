import 'vuetify/styles' // Global CSS has to be imported
import { createApp } from 'vue'

import vuetify from './plugins/vuetify'
import App from './App.vue'



const app = createApp(App)

app.use(vuetify)

app.mount('#app')