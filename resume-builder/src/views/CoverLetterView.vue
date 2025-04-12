<template>
<div class="page pb-4 mb-12 border-b-4 border-(--border) border-dotted">      
    <base-button id="edit-cover-letter" @click="toggleEdit($event)" :buttonText="editBtn"></base-button>
    <div id="cover-letter-content">

    </div>
    <!-- <h1 class="text-3xl mb-4">Application for Front-End Developer Position</h1>

    <p class="mb-2">Dear Hiring Manager,</p>

    <p class="mb-2">Schmoogle's innovative spirit in information access deeply resonates with me, and I was thrilled to see the Front-End Developer opening on [Platform]. My passion for creating intuitive user interfaces, coupled with my strong skills in JavaScript, HTML, CSS, and Vue.js, makes me a confident candidate to contribute to your dynamic team.</p>

    <p class="mb-2">Throughout my five years as a Front-End Developer, I've gained a comprehensive understanding of web development. At WebCraft Innovations, I significantly enhanced their e-commerce platform by developing a Vue.js-based product filtering system, resulting in a 30% improvement in search efficiency. I also focused on building reusable UI components and optimizing website performance.</p>

    <p class="mb-2">My experience at PixelBloom Studios further honed my abilities in developing responsive websites and translating designs into functional code using JavaScript and jQuery. Collaborating closely with design teams taught me the value of meticulous detail and exceeding user expectations.</p>

    <p class="mb-2">Schmoogle's dedication to user-centric design and cutting-edge technology aligns perfectly with my own values. My personal projects, including a Vue.js portfolio and a data visualization dashboard, showcase my commitment to creating compelling digital experiences. I am eager to apply my Vue.js expertise and passion for clean code to Schmoogle's innovative projects.</p>

    <p class="mb-4">I am confident that my adaptability, collaborative nature, and proven ability to deliver effective front-end solutions would be a valuable asset to your team. Thank you for your time and consideration. My resume provides further detail on my qualifications, and I look forward to the possibility of an interview.</p>

    <p class="mb-4">Sincerely,</p>
    <p class="mb-4">Elise Dubois</p> -->
</div>
    
</template>

<script>
import BaseButton from '../components/base/BaseButton.vue'
export default {
    data() {
    return {
      editBtn: 'Edit',      
      isDisplayEdit: false,
      editorType: 'QUILL'
    }
  },
  components: {
    BaseButton
  },
  methods: {
    toggleEdit(event) {
      this.isDisplayEdit = !this.isDisplayEdit;
      this.$emit('toggle-edit', this.isDisplayEdit, this.editorType, event.target);
      console.log('You toggled edit') 
    }
  }
}
</script>

<style scoped>
h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

p {
    margin-bottom: 1rem;
}

p.extra {
    margin-bottom: 2rem;
}
</style>