import { createStore } from 'vuex';
import ResumeDataModule from './modules/ResumeData.js';

const store = createStore({
    modules: {
        ResumeData: ResumeDataModule
    }
});

export default store;