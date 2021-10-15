import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library as fontAwesomeLib, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Setup libs
dom.watch() // transform <i class=...> into svg
fontAwesomeLib.add(fas, fab)

const app = createApp(App)
    .use(router)
    .component('fa', FontAwesomeIcon);

app.mount('#app');
