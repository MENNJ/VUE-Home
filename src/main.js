import { createApp } from 'vue'
import App from './App.vue'
import Router from "./router/index.js"
import StarportPlugin from 'vue-starport'
import "tailwindcss/tailwind.css";
import './style.css'


createApp(App).use(StarportPlugin()).use(Router).mount('#app')

