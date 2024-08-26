<template>
  <div class="Page KingPalace">
    <div class="main" ref="mainDiv">
      <picture>
        <source srcset="../assets/images/king-palace/mob/mainBg.png" media="(max-width: 768px)">
        <img
          src="../assets/images/king-palace/mainBg.png"
          alt="Header Image"
          class="mainImage"
          ref="mainImageBg"
        />
      </picture>
      <div class="textBlock" ref="textBlock">
        <div class="titleBlock" ref="titleBlock">
          <h1 class="colorTitle">King</h1>
          <h1>Palace</h1>
        </div>
      </div>
      <div class="path">
        <router-link to="/">
          <span>Homepage</span>
        </router-link>
        <SvgIcon name="arrowRight" size="medium" />
        <span>king-palace</span>
      </div>
    </div>

    <div class="pageBlock" ref="pageBlock">
      <div class="tags">
        <ul>
          <li >
            <span> restaurants </span>
          </li>
          <li >
            <span> bars </span>
          </li>
          <li >
            <span> shopping spree </span>
          </li>
          <li >
            <span> historic heritage </span>
          </li>
          <li >
            <span> swimming pools</span>
          </li>
        </ul>
    </div>
      <h2 class="animated-title" ref="animatedTitle">
        <span class="letter" v-for="(letter, index) in titleLetters"
        :key="index">{{ letter }}</span>
      </h2>
      <p class="animated-text">
        For your convenience, we have a selection of trusted tourist attractions nearby.
      </p>
      <div class="blockWrapper" ref="blockWrapper">
        <div class="item" v-for="(item, index) in items" :key="index">
          <picture>
            <source :srcset="require(`@/assets/images/king-palace/mob/${item.imgSrc}`)"
            media="(max-width: 768px)">
            <img :src="require(`@/assets/images/king-palace/${item.imgSrc}`)" alt="services" />
          </picture>
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
import SvgIcon from '@/components/SvgIcon.vue';
import useAnimations from '@/animations/useAnimations';
import PrimaryButton from '../components/Buttons/PrimaryButton.vue';

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

  mounted() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

      .colorTitle {
        color: var(--color-gold);
      }

      h1 {
        @include mainTitle;
        span {
          display: inline-block;
          font-size: inherit;
          font-weight: inherit;
          color: inherit;
          letter-spacing: inherit;
        }
      }
    }
    .path {
      @include alignPath;

    }
  }

  .pageBlock {
    @include blockStyles;
    background: var(--color-white);
    display: flex;
    flex-direction: column;
    gap: 40px;
    .tags{
      margin-bottom: 10px;
      ul{
        list-style-type: none;
        display: flex;
        padding: 0;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 10px;
        width: 100%;
        max-width: fit-content;
        margin: 0 auto;
        li{
            padding: 5px 7px;
            border-radius: 20px;
            background: var(--color-light);
            width: fit-content;
            @include text(var(--color-gold), 12px, uppercase, 700);
            cursor: pointer;
            white-space: nowrap;
            border: 1px solid var(--color-gold);
            z-index: 4;
            &:hover{
                background: var(--color-gold);
                color: var(--color-white);
            }
        }
        @media (max-width: 768px) {
          &{
            margin: unset;
          }
        }
      }
    }

    h2 {
      @include text(var(--color-gold), clamp(18px, 4vw, 40px), uppercase, 500);
    }

    p {
      @include text(#454545, clamp(16px, 4vw, 28px), normal, 400);
      &.animated-text span {
        display: inline-block;
        opacity: 0;
      }
    }

    .blockWrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 40px;
      row-gap: clamp(20px, 5vw, 60px);

      .item {
        overflow: hidden;

        img {
          width: 100%;
          height: auto;
          object-fit: cover;
        }

        h4 {
          @include text(var(--color-gold), clamp(14px, 4vw, 30px), uppercase, 500);
          padding: clamp(11px, 4vw, 22px) 0;
        }

        p {
          @include text(#454545, clamp(12px, 4vw, 24px), normal, 400);
          &.animated-text span {
            display: inline-block;
            opacity: 0;
          }
        }
      }

      // @media (max-width: 768px) {
      //   &{

      //   }
      // }
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

      .blockWrapper {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>
