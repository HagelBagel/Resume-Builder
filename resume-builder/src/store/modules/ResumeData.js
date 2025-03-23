export default {
  namespaced: true,
  state() {
    return {
      resume: {
        contact: {
          name: 'Elise Dubois',
          address: '14 Rue du Cherche-Midi, 75006 Paris, France',
          phone: '+33 6 12 34 56 78',
          email: 'elise.dubois@email.com',
          linkedin: 'blinkedin.com/in/elisedubois',
          summary:
            'Highly motivated and creative Front-End Developer with 5+ years of experience building responsive and user-friendly web applications. Proficient in JavaScript, HTML5, CSS3, and Vue.js. Proven ability to translate design mockups into clean, efficient, and maintainable code. Passionate about creating engaging user experiences and staying up-to-date with the latest web development trends.',
        },
        skills: {
          languages: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'Sass', 'Less'],
          frameworks: ['Vue.js', 'Vuex', 'Vue Router', 'React (Basic)', 'jQuery'],
          tools: ['Git', 'Webpack', 'Babel', 'npm', 'yarn', 'Figma', 'Adobe XD'],
          methodologies: ['Agile', 'Scrum'],
          other: [
            'Responsive Design',
            'Cross-Browser Compatibility',
            'Performance Optimization',
            'API Integration (REST)',
          ],
        },
        experience: [
          {
            title: 'Front-End Developer',
            company: 'WebCraft Innovations, Paris, France',
            dates: 'January 2021 – Present',
            details: [
              'Developed and maintained core features of a large-scale e-commerce platform using Vue.js.',
              'Implemented a dynamic product filtering system, improving user search efficiency by 30%.',
              'Created reusable Vue.js components for a consistent and scalable UI across the platform.',
              'Optimized website performance, resulting in a 20% reduction in page load times.',
              'Integrated third-party APIs for payment processing and shipping services.',
            ],
          },
          {
            title: 'Junior Front-End Developer',
            company: 'PixelBloom Studios, Lyon, France',
            dates: 'June 2019 – December 2020',
            details: [
              'Assisted in the development of responsive websites for various clients using HTML, CSS, and JavaScript.',
              'Collaborated with designers to translate wireframes and mockups into functional web pages.',
              'Implemented interactive features using JavaScript and jQuery.',
              'Contributed to the development of a custom CMS theme, improving content management efficiency.',
            ],
          },
          {
            title: 'Web Development Intern',
            company: 'CodeCanvas Solutions, Marseille, France',
            dates: 'March 2018 – May 2019',
            details: [
              'Gained practical experience in front-end development by assisting senior developers in project tasks.',
              'Developed and maintained HTML and CSS for small website projects.',
              'Assisted in debugging and troubleshooting website issues.',
              'Learned the fundamentals of version control using Git.',
            ],
          },
        ],
        education: {
          degree: 'Bachelor of Science in Web Development',
          institution: 'Université Paris-Saclay, Paris, France',
          dates: '2015 – 2019',
        },
        projects: [
          {
            name: 'Personal Portfolio Website',
            description:
              'Developed a responsive portfolio website using Vue.js to showcase personal projects and skills.',
          },
          {
            name: 'Interactive Data Visualization Dashboard',
            description:
              'Created a dynamic dashboard using Vue.js and D3.js to visualize data from a public API.',
          },
        ],
        languages: ['French: Native', 'English: Fluent'],
      },
    }
  },
  getters: {
    resume(state) {
      return state.resume
    },
  },
}
