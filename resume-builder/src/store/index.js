import { createStore } from 'vuex';
import resumeDataModule from './modules/ResumeData.js';

const store = createStore({
    modules: {
        resumeData: resumeDataModule
    }
});

export default store;