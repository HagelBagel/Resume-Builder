import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index.js';
import { createI18n } from 'vue-i18n';
import SummaryEditForm from './components/about_comp/about_edit_comp/SummaryEditForm.vue';
import LanguageEditForm from './components/about_comp/about_edit_comp/LanguageEditForm.vue';

const i18n = createI18n({
  // something vue-i18n options here ...
});

const app = createApp(App)

// Register global components for dynamic component usage
app.component('SummaryEditForm', SummaryEditForm)
app.component('LanguageEditForm', LanguageEditForm)

app.use(store)
app.use(i18n)
app.mount('#app')
