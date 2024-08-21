<template>
  <div class="Page KingPalace">
    <div class="main" ref="mainDiv">
      <img
        src="../assets/images/king-palace/mainBg.png"
        alt="Header Image"
        class="mainImage"
        ref="mainImageBg"
      />
      <div class="textBlock" ref="textBlock">
        <div class="path">
          <router-link to="/">
            <span>Homepage</span>
          </router-link>
          <SvgIcon name="arrowRight" size="medium" />
          <span>king-palace</span>
        </div>
        <div class="titleBlock" ref="titleBlock">
          <h1 class="colorTitle">King</h1>
          <h1>Palace</h1>
        </div>
      </div>
    </div>

    <div class="pageBlock" ref="pageBlock">
      <h1>OLOLO TAG HERE</h1>
      <h2 class="animated-title" ref="animatedTitle">
        <!-- Nearby tourist attractions and activities -->
        <span class="letter" v-for="(letter, index) in titleLetters"
        :key="index">{{ letter }}</span>
      </h2>
      <p class="animated-text">
        For your convenience, we have a selection of trusted tourist attractions nearby.
      </p>
      <div class="blockWrapper" ref="blockWrapper">
        <div class="item" v-for="(item, index) in items" :key="index">
          <img :src="require(`@/assets/images/king-palace/${item.imgSrc}`)" alt="services" />

          <h4 class="nameBlock">{{ item.title }}</h4>
          <p class="animated-text">{{ item.description }}</p>
        </div>
      </div>
      <PrimaryButton buttonText="More golf clubs" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
// import { gsap } from 'gsap';
import SvgIcon from '@/components/SvgIcon.vue';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { useAnimations } from '@/animations/useAnimations';
import useAnimations from '@/animations/useAnimations';
import PrimaryButton from '../components/Buttons/PrimaryButton.vue';

// gsap.registerPlugin(ScrollTrigger); // Регистрируем ScrollTrigger

export default {
  name: 'KingPalace',
  components: {
    SvgIcon,
    PrimaryButton,
  },
  setup() {
    const titleLetters = 'Nearby tourist attractions and activities'.split('');

    const {
      mainDiv,
      textBlock, pageBlock, blockWrapper, mainImageBg, animatedTitle,
    } = useAnimations();

    const items = ref([
      { imgSrc: 'item1.png', title: 'Sports Facilities IN TACHOV', description: 'Ideal for training and recreational sports.' },
      { imgSrc: 'item2.png', title: 'Světce RIDING HALL', description: 'A national cultural monument and the second largest riding hall in Central Europe.' },
      { imgSrc: 'item3.png', title: 'Přimda castle', description: 'Ruins of the oldest known Czech stone castle.' },
      { imgSrc: 'item4.png', title: 'Gotcha Spielfeld', description: "Europe's most important paintball arena." },
      { imgSrc: 'item5.png', title: 'PLEYSTEIN', description: 'Ruins of the oldest known Czech stone castle.' },
      { imgSrc: 'item6.png', title: 'TACHOV', description: "Europe's most important paintball arena." },
      { imgSrc: 'item7.png', title: 'WAIDHAUS', description: 'Ruins of the oldest known Czech stone castle.' },
      { imgSrc: 'item8.png', title: 'PŘIMDA', description: "Europe's most important paintball arena." },
    ]);

    return {
      mainDiv,
      textBlock,
      pageBlock,
      blockWrapper,
      items,
      mainImageBg,
      animatedTitle,
      titleLetters,
    };
  },
};
</script>

<style scoped lang="scss">
@import '@/style/mixins.scss';
@import '@/style/main.scss';

.KingPalace {
  @include pageStyle;

  .main {
    position: relative;
    overflow: hidden;

    .mainImage {
      @include mainBg;
    }

    .textBlock {
      @include mainTextBlock;

      .path {
        @include alignPath;

        a {
          text-decoration: none;
          cursor: pointer;
        }

        span {
          @include pathText;
        }
      }

      .colorTitle {
        color: var(--color-gold);
      }

      h1 {
        @include mainTitle;
        // Добавление стилей для span внутри h1
        span {
          display: inline-block;
          font-size: inherit;
          font-weight: inherit;
          color: inherit;
          letter-spacing: inherit;
        }
      }
    }
  }

  .pageBlock {
    @include blockStyles;
    background: var(--color-white);
    display: flex;
    flex-direction: column;
    gap: 40px;

    h2 {
      @include text(var(--color-black), 40px, uppercase, 500);
    }

    p {
      @include text(#454545, 20px, unset, 400);
      &.animated-text span {
        display: inline-block;
        opacity: 0;
      }
    }

    .blockWrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 40px;
      row-gap: 60px;

      .item {
        overflow: hidden;

        img {
          width: 100%;
          height: auto;
          object-fit: cover;
        }

        h4 {
          @include text(var(--color-black), 30px, uppercase, 500);
          padding: 22px 0;
        }

        p {
          @include text(#454545, 21px, unset, 400);
          &.animated-text span {
            display: inline-block;
            opacity: 0;
          }
        }
      }
    }

    button {
      margin: 20px auto 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

@media (max-width: 768px) {
  .KingPalace {
    .pageBlock {
      padding: 30px;
      margin: 30px;
      gap: 20px;

      h2 {
        font-size: 30px;
      }

      p {
        font-size: 18px;
      }

      .blockWrapper {
        grid-template-columns: 1fr;
      }
    }
  }
}

@media (max-width: 468px) {
  .KingPalace {
    .pageBlock {
      padding: 20px;
      margin: 20px;
      gap: 15px;

      h2 {
        font-size: 25px;
      }

      p {
        font-size: 16px;
      }

      .blockWrapper {
        grid-template-columns: 1fr;
      }
    }
  }
}

@media (max-width: 320px) {
  .KingPalace {
    .pageBlock {
      padding: 10px;
      margin: 10px;
      gap: 10px;

      h2 {
        font-size: 20px;
      }

      p {
        font-size: 14px;
      }

      .blockWrapper {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>
