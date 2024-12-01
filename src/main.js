import { createApp } from "vue";
import App from "./App.vue";
import "../src/assets/main.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App);

// Initialize AOS
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    offset: 50
});

app.mount('#app');
