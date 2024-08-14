<!-- eslint-disable max-len -->
<!-- eslint-disable max-len -->
<!-- <template>
    <div class="Page KingPalace">
        <div class="main">
            <img
                src="../assets/images/king-palace/mainBg.png"
                alt="Header Image" class="mainImage"
            />
            <div class="textBlock">
                <div class="path">
                    <router-link to="/">
                        <span>
                            Homepage
                        </span>
                    </router-link>
                    <SvgIcon name="arrowRight" size="medium"/>
                    <span>
                        king-palace
                    </span>
                </div>
                <h1 class="colorTitle">King </h1>
                <h1>
                    Palace
                </h1>
            </div>
        </div>
        <div class="pageBlock">
            <h1 style="background-color: red;">OLOLO TAG HERE</h1>
            <h2>
                nearby tourist attractionS and activities
            </h2>
            <p>
                For your convenience, we have a selection of trusted tourist attractions nearby.
            </p>
            <div class="blockWrapper">
                <div class="item">
                    <img src="../assets/images/king-palace/item1.png" alt="services">
                    <h4 class="nameBlock">
                        Sports Facilities IN TACHOV

                    </h4>
                    <p>
                        Ideal for training and recreational sports.
                    </p>
                </div>
                <div class="item">
                    <img src="../assets/images/king-palace/item2.png" alt="services">
                    <h4 class="nameBlock">
                        Světce RIDING HALL

                    </h4>
                    <p>
                        A national cultural monument and the second
                        largest riding hall in Central Europe.
                    </p>
                </div>
                <div class="item">
                    <img src="../assets/images/king-palace/item3.png" alt="services">
                    <h4 class="nameBlock">
                        Přimda castle

                    </h4>
                    <p>
                        Ruins of the oldest known Czech stone castle.
                    </p>
                </div>
                <div class="item">
                    <img src="../assets/images/king-palace/item4.png" alt="services">
                    <h4 class="nameBlock">
                        Gotcha Spielfeld

                    </h4>
                    <p>
                        Europe's most important paintball arena.
                    </p>
                </div>
                <div class="item">
                    <img src="../assets/images/king-palace/item5.png" alt="services">
                    <h4 class="nameBlock">
                        PLEYSTEIN

                    </h4>
                    <p>
                        Ruins of the oldest known Czech stone castle.
                    </p>
                </div>
                <div class="item">
                    <img src="../assets/images/king-palace/item6.png" alt="services">
                    <h4 class="nameBlock">
                        TACHOV

                    </h4>
                    <p>
                        Europe's most important paintball arena.
                    </p>
                </div>
                <div class="item">
                    <img src="../assets/images/king-palace/item7.png" alt="services">
                    <h4 class="nameBlock">
                        WAIDHAUS

                    </h4>
                    <p>
                        Ruins of the oldest known Czech stone castle.
                    </p>
                </div>
                <div class="item">
                    <img src="../assets/images/king-palace/item8.png" alt="services">
                    <h4 class="nameBlock">
                        PŘIMDA

                    </h4>
                    <p>
                        Europe's most important paintball arena.
                    </p>
                </div>
            </div>
            <PrimaryButton buttonText="more golf clubs"/>
        </div>
    </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue';

export default {
  name: 'King-palace',
  components: {
    SvgIcon,
  },
};
</script>

<style scoped lang="scss">
@import '@/style/mixins.scss';
@import '@/style/main.scss';
    .KingPalace{
        @include pageStyle;

        .main{
           position: relative;
           .mainImage{
            @include mainBg;
            }
            .textBlock{
                @include mainTextBlock;
                .path{
                    @include alignPath;
                    a{
                        text-decoration: none;
                        cursor: pointer;
                    }
                    span{
                        @include pathText;
                    }
                }
                .colorTitle{
                    color: var(--color-gold);
                }
                h1{
                    @include mainTitle;
        }
            }
        }
        .pageBlock{
            @include blockStyles;
            background: var(--color-white);
            display: flex;
            flex-direction: column;
            gap: 40px;
            h2{
                @include text(var(--color-black), 40px, uppercase, 500);
            }
            p{
                @include text(#454545, 20px, unset, 400);
            }
            .blockWrapper{
                display: grid;
                grid-template-columns: 1fr 1fr;
                column-gap: 40px;
                row-gap: 60px;
                .item{
                    overflow: hidden;
                    img{
                        width: 100%;
                        height: auto;
                        object-fit: cover;
                    }
                    h4{
                        @include text(var(--color-black), 30px, uppercase, 500);
                        padding: 22px 0;
                    }
                    p{
                        @include text(#454545, 21px, unset, 400);
                    }
                }

            }
            button{
                margin: 20px auto 0;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
    @media (max-width: 768px) {
        .KingPalace{
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
        .KingPalace{
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
        .KingPalace{
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

</style> -->
<!--
<template>
    <div class="Page KingPalace">
        <div class="main">
            <img
                src="../assets/images/king-palace/mainBg.png"
                alt="Header Image"
                class="mainImage"
                ref="mainImage"
            />
            <div class="textBlock" ref="textBlock">
                <div class="path">
                    <router-link to="/">
                        <span>Homepage</span>
                    </router-link>
                    <SvgIcon name="arrowRight" size="medium"/>
                    <span>king-palace</span>
                </div>
                <h1 class="colorTitle">King</h1>
                <h1>Palace</h1>
            </div>
        </div>
        <div class="pageBlock">
            <h1 style="background-color: red;">OLOLO TAG HERE</h1>
            <h2>nearby tourist attractionS and activities</h2>
            <p>For your convenience, we have a selection of trusted tourist attractions nearby.</p>
            <div class="blockWrapper" ref="blockWrapper">
                <div class="item">
                    <img src="../assets/images/king-palace/item1.png" alt="services">
                    <h4 class="nameBlock">Sports Facilities IN TACHOV</h4>
                    <p>Ideal for training and recreational sports.</p>
                </div>
                <div class="item">
                    <img src="../assets/images/king-palace/item2.png" alt="services">
                    <h4 class="nameBlock">Světce RIDING HALL</h4>
                    <p>A national cultural monument and the second largest riding
                        hall in Central Europe.</p>
                </div>
                <div class="item">
                    <img src="../assets/images/king-palace/item3.png" alt="services">
                    <h4 class="nameBlock">Přimda castle</h4>
                    <p>Ruins of the oldest known Czech stone castle.</p>
                </div>
                <div class="item">
                    <img src="../assets/images/king-palace/item4.png" alt="services">
                    <h4 class="nameBlock">Gotcha Spielfeld</h4>
                    <p>Europe's most important paintball arena.</p>
                </div>
                <div class="item">
                    <img src="../assets/images/king-palace/item5.png" alt="services">
                    <h4 class="nameBlock">PLEYSTEIN</h4>
                    <p>Ruins of the oldest known Czech stone castle.</p>
                </div>
                <div class="item">
                    <img src="../assets/images/king-palace/item6.png" alt="services">
                    <h4 class="nameBlock">TACHOV</h4>
                    <p>Europe's most important paintball arena.</p>
                </div>
                <div class="item">
                    <img src="../assets/images/king-palace/item7.png" alt="services">
                    <h4 class="nameBlock">WAIDHAUS</h4>
                    <p>Ruins of the oldest known Czech stone castle.</p>
                </div>
                <div class="item">
                    <img src="../assets/images/king-palace/item8.png" alt="services">
                    <h4 class="nameBlock">PŘIMDA</h4>
                    <p>Europe's most important paintball arena.</p>
                </div>
            </div>
            <PrimaryButton buttonText="more golf clubs"/>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import SvgIcon from '@/components/SvgIcon.vue';

export default {
  name: 'KingPalace',
  components: {
    SvgIcon,
  },
  setup() {
    const mainImage = ref(null);
    const textBlock = ref(null);
    const blockWrapper = ref(null);

    onMounted(() => {
      // Анимация для mainImage
      gsap.from(mainImage.value, { duration: 1, opacity: 0, y: -50 });

      // Анимация для textBlock
      gsap.from(textBlock.value, {
        duration: 1, opacity: 0, x: -50, delay: 0.5,
      });

      // Анимация для элементов внутри blockWrapper
      gsap.from(blockWrapper.value.children, {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        delay: 1,
      });
    });

    return {
      mainImage,
      textBlock,
      blockWrapper,
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
</style> -->

<!--
<template>
  <div class="Page KingPalace">
      <div class="main">
          <img
              src="../assets/images/king-palace/mainBg.png"
              alt="Header Image"
              class="mainImage"
              ref="mainImage"
          />
          <div class="textBlock" ref="textBlock">
              <div class="path">
                  <router-link to="/">
                      <span>Homepage</span>
                  </router-link>
                  <SvgIcon name="arrowRight" size="medium"/>
                  <span>king-palace</span>
              </div>
              <h1 class="colorTitle">King</h1>
              <h1>Palace</h1>
          </div>
      </div>
      <div class="pageBlock" ref="pageBlock">
          <h1 style="background-color: red;">OLOLO TAG HERE</h1>
          <h2>nearby tourist attractionS and activities</h2>
          <p>For your convenience, we have a selection of trusted tourist attractions nearby.</p>
          <div class="blockWrapper" ref="blockWrapper">
              <div class="item" v-for="(item, index) in items" :key="index">
                  <img :src="item.imgSrc" alt="services">
                  <h4 class="nameBlock">{{ item.title }}</h4>
                  <p>{{ item.description }}</p>
              </div>
          </div>
          <PrimaryButton buttonText="more golf clubs"/>
      </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import SvgIcon from '@/components/SvgIcon.vue';

export default {
  name: 'KingPalace',
  components: {
    SvgIcon,
  },
  setup() {
    const mainImage = ref(null);
    const textBlock = ref(null);
    const pageBlock = ref(null);
    const blockWrapper = ref(null);

    const items = ref([
{ imgSrc: '../king-palace/item1.png',
 title: 'Sports Facilities IN TACHOV', description: 'Ideal for training and recreational sports.' },
{ imgSrc: '../king-palace/item2.png',
 title: 'Světce RIDING HALL', description:
 'A national cultural monument and the second largest riding hall in Central Europe.' },
{ imgSrc: '../king-palace/item3.png',
 title: 'Přimda castle', description: 'Ruins of the oldest known Czech stone castle.' },
{ imgSrc: '../king-palace/item4.png',
 title: 'Gotcha Spielfeld', description: "Europe's most important paintball arena." },
{ imgSrc: '../king-palace/item5.png',
 title: 'PLEYSTEIN', description: 'Ruins of the oldest known Czech stone castle.' },
{ imgSrc: '../king-palace/item6.png',
 title: 'TACHOV', description: "Europe's most important paintball arena." },
{ imgSrc: '../king-palace/item7.png',
 title: 'WAIDHAUS', description: 'Ruins of the oldest known Czech stone castle.' },
{ imgSrc: '../king-palace/item8.png',
 title: 'PŘIMDA', description: "Europe's most important paintball arena." },
    ]);

    onMounted(() => {
    // Анимация для mainImage
      gsap.from(mainImage.value, { duration: 1, opacity: 0, y: -50 });

      // Анимация для textBlock
      gsap.from(textBlock.value, {
        duration: 1, opacity: 0, x: -50, delay: 0.5,
      });

      // Анимация для заголовков и абзацев в pageBlock
      gsap.from(pageBlock.value.querySelectorAll('h1, h2, p'), {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        delay: 1,
      });

      // Анимация для элементов внутри blockWrapper
      gsap.from(blockWrapper.value.children, {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        delay: 1.5,
      });
    });

    return {
      mainImage,
      textBlock,
      pageBlock,
      blockWrapper,
      items,
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
</style> -->
<!--
<template>
  <div class="Page KingPalace">
    <div class="main">
      <img
        src="../assets/images/king-palace/mainBg.png"
        alt="Header Image"
        class="mainImage"
        ref="mainImage"
      />
      <div class="textBlock" ref="textBlock">
        <div class="path">
          <router-link to="/">
            <span>Homepage</span>
          </router-link>
          <SvgIcon name="arrowRight" size="medium" />
          <span>king-palace</span>
        </div>
        <h1 class="colorTitle">King</h1>
        <h1>Palace</h1>
      </div>
    </div>
    <div class="pageBlock" ref="pageBlock">
      <h1 style="background-color: red;">OLOLO TAG HERE</h1>
      <h2>nearby tourist attractionS and activities</h2>
      <p class="animated-text">For your convenience, we have a
        selection of trusted tourist attractions nearby.</p>
      <div class="blockWrapper" ref="blockWrapper">
        <div class="item" v-for="(item, index) in items" :key="index">
          <img :src="item.imgSrc" alt="services" />
          <h4 class="nameBlock">{{ item.title }}</h4>
          <p class="animated-text">{{ item.description }}</p>
        </div>
      </div>
      <PrimaryButton buttonText="more golf clubs" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SvgIcon from '@/components/SvgIcon.vue';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'KingPalace',
  components: {
    SvgIcon,
  },
  setup() {
    const mainImage = ref(null);
    const textBlock = ref(null);
    const pageBlock = ref(null);
    const blockWrapper = ref(null);

    const items = ref([
      { imgSrc: '../king-palace/item1.png',
       title: 'Sports Facilities IN TACHOV', description: '
       Ideal for training and recreational sports.' },
      { imgSrc: '../king-palace/item2.png',
       title: 'Světce RIDING HALL', description:
       'A national cultural monument and the second largest riding hall in Central Europe.' },
      { imgSrc: '../king-palace/item3.png',
       title: 'Přimda castle', description: 'Ruins of the oldest known Czech stone castle.' },
      { imgSrc: '../king-palace/item4.png',
       title: 'Gotcha Spielfeld', description: "Europe's most important paintball arena." },
      { imgSrc: '../king-palace/item5.png',
       title: 'PLEYSTEIN', description: 'Ruins of the oldest known Czech stone castle.' },
      { imgSrc: '../king-palace/item6.png',
       title: 'TACHOV', description: "Europe's most important paintball arena." },
      { imgSrc: '../king-palace/item7.png',
       title: 'WAIDHAUS', description: 'Ruins of the oldest known Czech stone castle.' },
      { imgSrc: '../king-palace/item8.png',
       title: 'PŘIMDA', description: "Europe's most important paintball arena." },
    ]);

    const splitText = (element) => {
      const el = element;
      const text = element.innerText;
      const fragment = document.createDocumentFragment(); // Create a document fragment
      el.innerText = ''; // Clear the original text

      text.split('').forEach((char) => {
        const span = document.createElement('span');
        span.innerText = char;
        fragment.appendChild(span); // Append each span to the fragment
      });

      element.appendChild(fragment); // Append the fragment to the element
    };

    onMounted(() => {
      // Анимация для mainImage
      gsap.from(mainImage.value, {
        duration: 1,
        opacity: 0,
        y: -50,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: mainImage.value,
          start: 'top center',
        },
      });

      // Анимация для textBlock
      gsap.from(textBlock.value, {
        duration: 1,
        opacity: 0,
        x: -50,
        ease: 'power3.out',
        delay: 0.3,
        scrollTrigger: {
          trigger: textBlock.value,
          start: 'top center',
        },
      });

      // Анимация для заголовков и абзацев в pageBlock
      gsap.from(pageBlock.value.querySelectorAll('h1, h2'), {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.6,
        scrollTrigger: {
          trigger: pageBlock.value,
          start: 'top center',
        },
      });

      // Анимация для текста описания (появление по буквам)
      pageBlock.value.querySelectorAll('.animated-text').forEach((p) => {
        splitText(p);
        gsap.from(p.children, {
          duration: 1,
          opacity: 0,
          y: 50,
          stagger: 0.02,
          ease: 'power3.out',
          delay: 0.9,
          scrollTrigger: {
            trigger: p,
            start: 'top center',
          },
        });
      });

      // Анимация для элементов внутри blockWrapper
      gsap.from(blockWrapper.value.children, {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 1.2,
        scrollTrigger: {
          trigger: blockWrapper.value,
          start: 'top center',
        },
      });
    });

    return {
      mainImage,
      textBlock,
      pageBlock,
      blockWrapper,
      items,
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
</style> -->
<!--
<template>
  <div class="Page KingPalace">
    <div class="main">
      <img
        src="../assets/images/king-palace/mainBg.png"
        alt="Header Image"
        class="mainImage"
        ref="mainImage"
      />
      <div class="textBlock" ref="textBlock">
        <div class="path">
          <router-link to="/">
            <span>Homepage</span>
          </router-link>
          <SvgIcon name="arrowRight" size="medium" />
          <span>king-palace</span>
        </div>
        <h1 class="colorTitle">King</h1>
        <h1>Palace</h1>
      </div>
    </div>
    <div class="pageBlock" ref="pageBlock">
      <h1 style="background-color: red;">OLOLO TAG HERE</h1>
      <h2>nearby tourist attractionS and activities</h2>
      <p class="animated-text">For your convenience, we have a
        selection of trusted tourist attractions nearby.</p>
      <div class="blockWrapper" ref="blockWrapper">
        <div class="item" v-for="(item, index) in items" :key="index">
          <img :src="item.imgSrc" alt="services" />
          <h4 class="nameBlock">{{ item.title }}</h4>
          <p class="animated-text">{{ item.description }}</p>
        </div>
      </div>
      <PrimaryButton buttonText="more golf clubs" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SvgIcon from '@/components/SvgIcon.vue';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'KingPalace',
  components: {
    SvgIcon,
  },
  setup() {
    const mainImage = ref(null);
    const textBlock = ref(null);
    const pageBlock = ref(null);
    const blockWrapper = ref(null);

    const items = ref([
      { imgSrc: '../king-palace/item1.png',
       title: 'Sports Facilities IN TACHOV', description:
       'Ideal for training and recreational sports.' },
      { imgSrc: '../king-palace/item2.png',
       title: 'Světce RIDING HALL', description:
       A national cultural monument and the second largest riding hall in Central Europe.' },
      { imgSrc: '../king-palace/item3.png',
       title: 'Přimda castle', description: 'Ruins of the oldest known Czech stone castle.' },
      { imgSrc: '../king-palace/item4.png',
       title: 'Gotcha Spielfeld', description: "Europe's most important paintball arena." },
      { imgSrc: '../king-palace/item5.png',
       title: 'PLEYSTEIN', description: 'Ruins of the oldest known Czech stone castle.' },
      { imgSrc: '../king-palace/item6.png',
       title: 'TACHOV', description: "Europe's most important paintball arena." },
      { imgSrc: '../king-palace/item7.png',
       title: 'WAIDHAUS', description: 'Ruins of the oldest known Czech stone castle.' },
      { imgSrc: '../king-palace/item8.png',
       title: 'PŘIMDA', description: "Europe's most important paintball arena." },
    ]);

    const splitText = (element) => {
      const el = element;
      const text = element.innerText;
      const fragment = document.createDocumentFragment();
      el.innerText = '';

      text.split('').forEach((char) => {
        const span = document.createElement('span');
        span.innerText = char;
        fragment.appendChild(span);
      });

      element.appendChild(fragment);
    };

    onMounted(() => {
      // Анимация для mainImage
      gsap.from(mainImage.value, {
        duration: 1,
        opacity: 0,
        y: -50,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: mainImage.value,
          start: 'top center',
        },
      });

      // Анимация для textBlock
      gsap.from(textBlock.value, {
        duration: 1,
        opacity: 0,
        x: -50,
        ease: 'power3.out',
        delay: 0.3,
        scrollTrigger: {
          trigger: textBlock.value,
          start: 'top center',
        },
      });

      // Анимация для заголовков и абзацев в pageBlock
      gsap.from(pageBlock.value.querySelectorAll('h1, h2'), {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.6,
        scrollTrigger: {
          trigger: pageBlock.value,
          start: 'top center',
        },
      });

      // Анимация для текста описания (появление по буквам)
      pageBlock.value.querySelectorAll('.animated-text').forEach((p) => {
        splitText(p);
        gsap.from(p.children, {
          duration: 1,
          opacity: 0,
          y: 50,
          stagger: 0.02,
          ease: 'power3.out',
          delay: 0.9,
          scrollTrigger: {
            trigger: p,
            start: 'top center',
          },
        });
      });

      // Анимация для элементов внутри blockWrapper
      gsap.from(blockWrapper.value.children, {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 1.2,
        scrollTrigger: {
          trigger: blockWrapper.value,
          start: 'top center',
        },
      });

      // Плавное появление блоков с зависимостью от скролла
      gsap.fromTo(
        blockWrapper.value.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: blockWrapper.value,
            start: 'top center',
            scrub: true,
          },
        },
      );
    });

    return {
      mainImage,
      textBlock,
      pageBlock,
      blockWrapper,
      items,
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
</style> -->
<!--
<template>
  <div class="Page KingPalace" data-scroll-container>
      <div class="main" data-scroll-section>
      <img
        src="../assets/images/king-palace/mainBg.png"
        alt="Header Image"
        class="mainImage"
        ref="mainImage"
      />
      <div class="textBlock" ref="textBlock">
        <div class="path">
          <router-link to="/">
            <span>Homepage</span>
          </router-link>
          <SvgIcon name="arrowRight" size="medium" />
          <span>king-palace</span>
        </div>
        <h1 class="colorTitle">King</h1>
        <h1>Palace</h1>
      </div>
    </div>
    <div class="pageBlock" ref="pageBlock" data-scroll-section>
      <h1 style="background-color: red;">OLOLO TAG HERE</h1>
      <h2>nearby tourist attractionS and activities</h2>
      <p class="animated-text">For your convenience, we have a
        selection of trusted tourist attractions nearby.</p>
      <div class="blockWrapper" ref="blockWrapper">
        <div class="item" v-for="(item, index) in items" :key="index">
          <img :src="item.imgSrc" alt="services" />
          <h4 class="nameBlock">{{ item.title }}</h4>
          <p class="animated-text">{{ item.description }}</p>
        </div>
      </div>
      <PrimaryButton buttonText="more golf clubs" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
// import { gsap } from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
import SvgIcon from '@/components/SvgIcon.vue';
import { directive as motion } from '@vueuse/motion';

// import locomotiveScroll from 'locomotive-scroll/src/locomotive-scroll';
// import LocomotiveScroll from 'locomotive-scroll';
// import 'locomotive-scroll/dist/locomotive-scroll.css';

// import "locomotive-scroll/dist/locomotive-scroll.css";
import PrimaryButton from '../components/Buttons/PrimaryButton.vue';

// import locomotiveScroll from 'locomotive-scroll/src/locomotive-scroll.js';
// import 'locomotive-scroll/dist/locomotive-scroll.css';

// gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'KingPalace',
  components: {
    SvgIcon,
    PrimaryButton,
  },
  directives: {
    motion: motion(),
  },
  setup() {
    const mainImage = ref(null);
    const textBlock = ref(null);
    const pageBlock = ref(null);
    const blockWrapper = ref(null);

    const items = ref([
      { imgSrc: '../king-palace/item1.png', title: 'Sports Facilities IN TACHOV', description: 'Ideal for training and recreational sports.' },
      { imgSrc: '../king-palace/item2.png', title: 'Světce RIDING HALL', description: 'A national cultural monument and the second largest riding hall in Central Europe.' },
      { imgSrc: '../king-palace/item3.png', title: 'Přimda castle', description: 'Ruins of the oldest known Czech stone castle.' },
      { imgSrc: '../king-palace/item4.png', title: 'Gotcha Spielfeld', description: "Europe's most important paintball arena." },
      { imgSrc: '../king-palace/item5.png', title: 'PLEYSTEIN', description: 'Ruins of the oldest known Czech stone castle.' },
      { imgSrc: '../king-palace/item6.png', title: 'TACHOV', description: "Europe's most important paintball arena." },
      { imgSrc: '../king-palace/item7.png', title: 'WAIDHAUS', description: 'Ruins of the oldest known Czech stone castle.' },
      { imgSrc: '../king-palace/item8.png', title: 'PŘIMDA', description: "Europe's most important paintball arena." },
    ]);

    // const splitText = (element) => {
    //   const el = element;
    //   const text = element.innerText;
    //   const fragment = document.createDocumentFragment();
    //   el.innerText = '';

    //   text.split('').forEach((char) => {
    //     const span = document.createElement('span');
    //     span.innerText = char;
    //     fragment.appendChild(span);
    //   });

    //   element.appendChild(fragment);
    // };

    onMounted(() => {
      // eslint-disable-next-line new-cap
    //   const scroll = new LocomotiveScroll({
    //     el: document.querySelector('[data-scroll-container]'),
    //     smooth: true,
    //   });
    //   gsap.from(mainImage.value, {
    //     duration: 1,
    //     opacity: 0,
    //     y: -50,
    //     ease: 'power3.out',
    //     scrollTrigger: {
    //       trigger: mainImage.value,
    //       scroller: '[data-scroll-container]',
    //       start: 'top 80%',
    //       end: 'bottom 60%',
    //     },
    //   });

      //   // gsap.from(mainImage.value, {
      //   //   duration: 1,
      //   //   opacity: 0,
      //   //   y: -50,
      //   //   ease: 'power3.out',
      //   // });

      //   // Анимация для textBlock при монтировании компонента
      //   // splitText(textBlock.value.querySelector('.colorTitle'));
      //   // splitText(textBlock.value.querySelector('h1:not(.colorTitle)'));
      //   // gsap.from(textBlock.value.querySelectorAll('span'), {
      //   //   duration: 1.5,
      //   //   opacity: 0,
      //   //   y: 50,
      //   //   stagger: 0.05,
      //   //   ease: 'power3.out',
      //   // });
      //   splitText(textBlock.value.querySelector('.colorTitle'));
      //   splitText(textBlock.value.querySelector('h1:not(.colorTitle)'));
      //   gsap.from(textBlock.value.querySelectorAll('span'), {
      //     duration: 1.5,
      //     opacity: 0,
      //     y: 50,
      //     stagger: 0.05,
      //     ease: 'power3.out',
      //     scrollTrigger: {
      //       trigger: textBlock.value,
      //       scroller: '[data-scroll-container]',
      //       start: 'top 80%',
      //       end: 'bottom 60%',
      //     },
      //   });

      //   // Анимация для заголовков и абзацев в pageBlock
      //   // gsap.from(pageBlock.value.querySelectorAll('h1, h2'), {
      //   //   duration: 1,
      //   //   opacity: 0,
      //   //   y: 50,
      //   //   stagger: 0.2,
      //   //   ease: 'power3.out',
      //   //   delay: 0.6,
      //   // });
      //   gsap.from(pageBlock.value.querySelectorAll('h1, h2, p'), {
      //     scrollTrigger: {
      //       trigger: pageBlock.value,
      //       start: 'top 80%',
      //       end: 'bottom 60%',
      //       scrub: true,
      //     },
      //     opacity: 0,
      //     y: 50,
      //     duration: 1,
      //     stagger: 0.2,
      //     ease: 'power3.out',
      //   });

      //   gsap.from(blockWrapper.value.querySelectorAll('.item'), {
      //     scrollTrigger: {
      //       trigger: blockWrapper.value,
      //       start: 'top 80%',
      //       end: 'bottom 60%',
      //       scrub: true,
      //     },
      //     opacity: 0,
      //     y: 50,
      //     duration: 1,
      //     stagger: 0.2,
      //     ease: 'power3.out',
      //   });
      //   ScrollTrigger.scrollerProxy('[data-scroll-container]', {
      //     scrollTop(value) {
      //       return arguments.length ? scroll.scrollTo(value, 0, 0) :
      // scroll.scroll.instance.scroll.y;
      //     },
      //     getBoundingClientRect() {
      //       return {
      //         top: 0, left: 0, width: window.innerWidth, height: window.innerHeight,
      //       };
      //     },
      // pinType: document.querySelector
      // ('[data-scroll-container]').style.transform ? 'transform' : 'fixed',
      //   });

    //   scroll.on('scroll', ScrollTrigger.update);
    //   ScrollTrigger.addEventListener('refresh', () => scroll.update());
    //   ScrollTrigger.refresh();
    });

    return {
      mainImage,
      textBlock,
      pageBlock,
      blockWrapper,
      items,
    };
  },
};
</script>-->

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
        <span class="letter" v-for="(letter, index) in titleLetters" :key="index">{{ letter }}</span>
      </h2>
      <p class="animated-text">For your convenience, we have a selection of trusted tourist attractions nearby.</p>
      <div class="blockWrapper" ref="blockWrapper">
        <div class="item" v-for="(item, index) in items" :key="index">
    <!-- <img src="../assets/images/king-palace/item1.png" alt="services" /> -->

          <!-- <img :src="item.imgSrc" alt="services" /> -->
          <!-- <img :src="require(`./assets/images/king-palace/${item.imgSrc}`)" alt="services" /> -->
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
import { ref, onMounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import SvgIcon from '@/components/SvgIcon.vue';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PrimaryButton from '../components/Buttons/PrimaryButton.vue';

gsap.registerPlugin(ScrollTrigger); // Регистрируем ScrollTrigger

export default {
  name: 'KingPalace',
  components: {
    SvgIcon,
    PrimaryButton,
  },
  setup() {
    const mainDiv = ref(null);
    const textBlock = ref(null);
    const pageBlock = ref(null);
    const blockWrapper = ref(null);
    const mainImageBg = ref(null);
    const titleBlock = ref(null);
    const animatedTitle = ref(null);

    const titleLetters = 'Nearby tourist attractions and activities'.split('');

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

    // const smoothScroll = (targetY, duration) => {
    //   const startY = window.scrollY;
    //   const distance = targetY - startY;
    //   let startTime = null;

    //   const animation = (currentTime) => {
    //     if (startTime === null) startTime = currentTime;
    //     const timeElapsed = currentTime - startTime;
    //     const progress = Math.min(timeElapsed / duration, 1);
    //     const ease = 1 - (1 - progress) ** 3; // cubic easing

    //     window.scrollTo(0, startY + distance * ease);

    //     if (timeElapsed < duration) {
    //       requestAnimationFrame(animation);
    //     }
    //   };

    //   requestAnimationFrame(animation);
    // };

    onMounted(async () => {
      await nextTick(); // Убедитесь, что DOM полностью отрисован

      // Пример плавной прокрутки к элементу с ref
      mainDiv.value.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // gsap.from(animatedTitle.value.querySelectorAll('.letter'), {
      //   y: -100, // Начальная позиция букв (высота падения)
      //   opacity: 0, // Начальная непрозрачность
      //   duration: 1, // Длительность анимации
      //   stagger: 0.05, // Задержка между анимацией каждой буквы
      //   ease: 'bounce.out', // Эффект анимации
      //   scrollTrigger: {
      //     trigger: pageBlock.value, // Элемент, при прокрутке которого начнётся анимация
      //     start: 'top center', // Настройка начала анимации
      //   },
      // });
      // Сначала устанавливаем начальное состояние
      // Настройка анимации с эффектом падения
      // Устанавливаем начальное состояние для букв
      gsap.set(animatedTitle.value.querySelectorAll('.letter'), {
        y: 100, // Начальное смещение вверх
        opacity: 0, // Начальная прозрачность
      });

      // Анимация падения букв
      gsap.to(animatedTitle.value.querySelectorAll('.letter'), {
        y: 0, // Конечное положение (на месте)
        opacity: 1, // Конечная видимость
        duration: 0.5, // Длительность анимации
        stagger: 0.1, // Задержка между анимацией каждой буквы
        ease: 'power2.out', // Плавное движение
        scrollTrigger: {
          trigger: pageBlock.value, // Блок, при прокрутке до которого начинается анимация
          start: 'top center', // Начало анимации, когда блок появляется в центре экрана
          // toggleActions: 'play none none none', // Анимация запускается один раз
        },
      });

      // Анимация mainImage
      // gsap.to(mainImageBg.value, {
      //   scrollTrigger: {
      //     trigger: mainImageBg.value,
      //     start: 'top top',
      //     scrub: true,
      //   },
      //   scale: 1.2,
      //   duration: 1.5,
      //   // ease: 'power3.out',
      // });

      // gsap.to(mainImageBg.value, {
      //   scale: 1.5, // Конечный масштаб изображения
      //   scrollTrigger: {
      //     trigger: mainImageBg.value,
      //     start: 'top top', // Когда верх изображения достигает верхней части окна
      //     end: 'bottom top', // Когда нижняя часть изображения достигает верхней части окна
      //     scrub: true, // Связь анимации с прокруткой
      //   },
      //   duration: 1.5,
      //   ease: 'none', // Для плавного перехода без резких скачков
      // });
      gsap.from(mainImageBg.value, {
        scale: 1.2,
        scrollTrigger: {
          trigger: mainDiv.value, // Изменяем триггер на основной контейнер
          start: 'top top', // Начало анимации
          end: 'bottom top', // Конец анимации
          scrub: true, // Связь анимации с прокруткой
        },
        ease: 'none',
      });

      gsap.to(textBlock.value, {
        scrollTrigger: {
          trigger: mainDiv.value,
          start: '150 ',
          scrub: true,
        },
        ease: 'none',
        left: '-100%',

      });

      // Анимация mainDiv
      gsap.from(mainDiv.value, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: 'power3.out',
      });

      // Анимация заголовков в textBlock
      gsap.from(textBlock.value.querySelectorAll('h1'), {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });

      // Анимация элементов в pageBlock
      gsap.from(pageBlock.value.querySelectorAll('h1, h2'), {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.6,
        ease: 'power3.out',
      });

      // Анимация элементов в blockWrapper
      gsap.from(blockWrapper.value.querySelectorAll('.item'), {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });
    });

    return {
      mainDiv,
      textBlock,
      pageBlock,
      blockWrapper,
      items,
      mainImageBg,
      titleBlock,
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
