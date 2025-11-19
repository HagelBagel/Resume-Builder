import { resume } from './EliseDuboisData';
import { coverLetter } from './EliseDuboisData';

export default {
  namespaced: true,
  state() {
    return {
      resume: resume,
      coverLetter: coverLetter,
      editDialog: {
        isOpen: false,
        componentType: null,
        dialogTitle: '',
        dialogWidth: '',
        currentData: {},
        fields: []
      }
    }
  },
 
  getters: {
    resume(state) {
      return state.resume || {};
    },
    coverLetter(state) {
      return state.coverLetter || { body: '' };
      // return state.coverLetter;
    },
    editDialog(state) {
      return state.editDialog;
    }
  },

  mutations: {
    OPEN_EDIT_DIALOG(state, config) {
      state.editDialog = {
        isOpen: true,
        ...config
      }
    },
    CLOSE_EDIT_DIALOG(state) {
      state.editDialog.isOpen = false;
    },
    SET_RESUME(state, updatedResume) {
      state.resume = updatedResume;
    }
  },

  actions: {
    openEditDialog({ commit }, config) {
      commit('OPEN_EDIT_DIALOG', config);
    },
    closeEditDialog({ commit }) {
      commit('CLOSE_EDIT_DIALOG');
    },
    updateSummary({ state, commit }, formData) {
      const updatedResume = {
        ...state.resume,
        contact: {
          ...state.resume.contact,
          summary: formData.description,
          summaryHeading: formData.heading
        }
      };
      commit('SET_RESUME', updatedResume);
    },
    updateLanguages({ state, commit }, formData) {
      const updatedResume = {
        ...state.resume,
        languages: formData.languages,
        languagesHeading: formData.heading
      };
      commit('SET_RESUME', updatedResume);
    }
  }
}
