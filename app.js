const vue = Vue.createApp({
  data() {
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      red: 141,
      green: 129,
      blue: 243,
    };
  },
  computed: {
    box() {
      return {
        transform: `
          perspective(${this.perspective}px)
          rotateX(${this.rotateX}deg)
          rotateY(${this.rotateY}deg)
          rotateZ(${this.rotateZ}deg)
        `,
        background: `rgb(${this.red} ${this.green} ${this.blue})`,
      };
    },
  },
  methods: {
    reset() {
      this.perspective = 100;
      this.rotateX = 0;
      this.rotateY = 0;
      this.rotateZ = 0;
    },
    copy() {
      // navigator.clipboard.writeText(JSON.stringify(`transform: ${this.box.transform.replace(/\n/g, '').trim()}`))
      const el = document.createElement('textarea')
      el.setAttribute('readonly', '')
      el.style.position = 'absolute'
      el.style.left = '-9999px'
      el.value = `transform: ${this.box.transform}`;

      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el);
    }
  }
}).mount('#app');