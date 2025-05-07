import { resume } from './EliseDuboisData';
import { coverLetter } from './EliseDuboisData';

export default {
  namespaced: true,
  state() {
    return {
      resume: resume,
      coverLetter: coverLetter
    }
  },
 
  getters: {
    resume(state) {
      return state.resume;
    },
    coverLetter(state) {
      return state.coverLetter;
    }
  }
}
