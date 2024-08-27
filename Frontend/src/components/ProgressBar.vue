<!-- <template>
    <div class="progress-bar">
      <div class="dot-container" v-for="index in 4" :key="index">
        <div
          :class="{'large-dot': true, 'filled-border': isFilled(index)}"
          @click="handleDotClick(index)"
          @keydown="none"
        ></div>
        <div class="small-dots">
          <span v-for="dot in totalSmallDots" :key="dot"
            :class="{'active-dot': isActive(dot, index)}"></span>
        </div>
      </div>
      <div
        :class="{'large-dot': true, 'last-dot': true, 'filled-border': isFilled(5)}"
        @click="handleDotClick(5)"
        @keydown="none"

      ></div>
    </div>
  </template>

<script>
export default {
  props: {
    autoplay: {
      type: Number,
      default: 3000, // Значение по умолчанию
    },
    goToSlide: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      filledDots: 0,
      totalSmallDots: 15,
      intervalId: null,
      smallDotInterval: 0,
    };
  },
  methods: {
    isActive(dot, index) {
      const activeDotCount = this.filledDots - (index - 1) * (this.totalSmallDots + 1);
      return activeDotCount > 0 && activeDotCount >= dot;
    },
    isFilled(index) {
      const threshold = (index - 1) * (this.totalSmallDots + 1);
      return this.filledDots >= threshold && this.filledDots < threshold + this.totalSmallDots + 1;
    },
    updateProgress() {
      const maxDots = (this.totalSmallDots + 1) * 4;
      if (this.filledDots < maxDots) {
        this.filledDots += 1;
      } else {
        clearInterval(this.intervalId);
      }
    },
    startAnimation() {
      this.smallDotInterval = this.autoplay / this.totalSmallDots;
      this.intervalId = setInterval(this.updateProgress, this.smallDotInterval);
    },
    updateTotalSmallDots() {
      const screenWidth = window.innerWidth;
      if (screenWidth < 600) {
        this.totalSmallDots = 5;
      } else if (screenWidth < 900) {
        this.totalSmallDots = 10;
      } else {
        this.totalSmallDots = 15;
      }
    },
    handleDotClick(index) {
      this.goToSlide(index - 1); // вызываем метод переключения слайдов из родителя
    },
  },
  mounted() {
    this.updateTotalSmallDots();
    window.addEventListener('resize', this.updateTotalSmallDots);
    this.startAnimation();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateTotalSmallDots);
    clearInterval(this.intervalId);
  },
};
</script> -->

<template>
    <div class="progress-bar">
      <div class="dot-container" v-for="index in 5" :key="index">
        <div
          :class="{'large-dot': true, 'filled-border': isFilled(index)}"
          @click="handleDotClick(index)"
          @keydown="none"
        ></div>
        <div class="small-dots">
          <span v-for="dot in totalSmallDots" :key="dot"
            :class="{'active-dot': isActive(dot, index)}"></span>
        </div>
      </div>
      <div
        :class="{'large-dot': true, 'last-dot': true, 'filled-border': isFilled(6)}"
        @click="handleDotClick(6)"
        @keydown="none"
      ></div>
    </div>
  </template>

<script>
export default {
  props: {
    autoplay: {
      type: Number,
      default: 3000, // Значение по умолчанию
    },
    goToSlide: {
      type: Function,
      required: true,
    },
    isPlay: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data() {
    return {
      filledDots: 0,
      totalSmallDots: 15,
      intervalId: null,
      smallDotInterval: 0,
    };
  },
  methods: {
    isActive(dot, index) {
      const activeDotCount = this.filledDots - (index - 1) * (this.totalSmallDots + 1);
      return activeDotCount > 0 && activeDotCount >= dot;
    },
    isFilled(index) {
      const threshold = (index - 1) * (this.totalSmallDots + 1);
      return this.filledDots >= threshold && this.filledDots < threshold + this.totalSmallDots + 1;
    },
    updateProgress() {
      const maxDots = (this.totalSmallDots + 1) * 6;
      if (this.filledDots < maxDots) {
        this.filledDots += 1;
      } else {
        this.filledDots = 0; // Зацикливаем анимацию
      }
    },
    startAnimation() {
      this.smallDotInterval = this.autoplay / this.totalSmallDots;
      this.intervalId = setInterval(this.updateProgress, this.smallDotInterval);
    },
    resetAnimationFrom(index) {
      clearInterval(this.intervalId);
      this.filledDots = (index - 1) * (this.totalSmallDots + 1);
      this.startAnimation();
    },
    handleDotClick(index) {
      this.goToSlide(index - 1); // Переключаем слайд
      this.resetAnimationFrom(index); // Сбрасываем анимацию и начинаем с этой точки
    },
    updateTotalSmallDots() {
      const screenWidth = window.innerWidth;
      if (screenWidth < 600) {
        this.totalSmallDots = 5;
      } else if (screenWidth < 900) {
        this.totalSmallDots = 10;
      } else {
        this.totalSmallDots = 15;
      }
    },
  },
  mounted() {
    if (this.isPlay) {
      this.updateTotalSmallDots();
      window.addEventListener('resize', this.updateTotalSmallDots);
      this.startAnimation();
    }
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateTotalSmallDots);
    clearInterval(this.intervalId);
  },
};
</script>

  <style scoped>
  /* Стили остаются такими же, как и в вашем примере */
  </style>

  <style scoped>
  .progress-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    /* width: 100%; */
  }

  .dot-container {
    display: flex;
    align-items: center;
    flex: 1;
    position: relative;
    margin-right: 8px;
  }

  .large-dot {
    width: 10px;
    height: 10px;
    background-color: #ffcc00;
    border-radius: 50%;
    transition: border 0.5s ease-in-out, padding 0.5s ease-in-out;
    cursor: pointer;
  }

  .filled-border {
    border: 2px solid #ffcc00;
    padding: 2px;
  }

  .small-dots {
    display: flex;
    margin: 0 8px;
    justify-content: space-evenly;
    width: 100%;
  }

  .small-dots span {
    width: 3px;
    height: 3px;
    background-color: #ccc;
    border-radius: 50%;
    margin: 0 2px;
    transition: background-color 0.5s ease-in-out;
  }

  .small-dots span.active-dot {
    background-color: #ffcc00 !important;
  }

  .last-dot {
    margin-left: 8px;
    flex-shrink: 0;
    cursor: pointer;
  }
  </style>
