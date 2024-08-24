<template>
    <div class="Page Massage">
        <div class="main" ref="mainDiv">
            <video
                playsinline
                autoplay
                loop
                muted
                :poster="posterImg"
                ref="mainImageBg"
                >
                <source src="../assets/images/relax/Kings-Wellness.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div class="textBlock" ref="textBlock">
                <div class="path">
                    <router-link to="/">
                        <span>
                            Homepage
                        </span>
                    </router-link>
                    <SvgIcon name="arrowRight" size="medium"/>
                    <span>
                        relax
                    </span>
                </div>
                <h1>
                    Relax
                </h1>
                <h1 class="colorText">
                  like A King

                </h1>
                <p class="description">
                    Take time out to harmonize your body, mind and spirit
                </p>
            <PrimaryButton buttonText="contact"/>
            </div>
        </div>
        <div class="infoBlock">
            <div class="infoCard openingCard">
                <h3>
                    Opening hours
                </h3>
                <ul>
                    <li>
                        <SvgIcon name="clock" size="small"/>
                        <div class="openingDescription">
                            <span>
                                Monday – Sunday
                            </span>
                            <span class="timeAvailable">
                                11:00 –  00:00
                            </span>
                        </div>
                    </li>
                    <li>
                        <SvgIcon name="clock" size="small"/>
                        <div class="openingDescription">
                            <span>
                                Friday
                            </span>
                            <span class="timeAvailable">
                                12:00 - 00:00
                            </span>
                        </div>
                    </li>
                </ul>

            </div>
            <div class="infoCard contactCard">
                <h3>
                    reservation
                </h3>
                <ul>
                    <li>
                        <SvgIcon name="envelope" size="small"/>
                        <span>
                            stay@kings-palace.com
                        </span>
                    </li>
                    <li>
                        <SvgIcon name="phone" size="small"/>
                        <span>
                            +420 604 689 933
                        </span>
                    </li>
                    <li>
                        <SvgIcon name="whatsup" size="small"/>
                        <SvgIcon name="telegram" size="small"/>
                        <SvgIcon name="viber" size="small"/>

                    </li>
                </ul>
            </div>
        </div>
        <div class="ourSpecialist" v-for="(item, index) in relaxItems" :key="index">
          <div class="specialistWrapper" v-if="item.revert">
            <div class="infoBlock">
                <h2>
                    {{ item.name }}
                </h2>
                <p>
                    {{ item.description }}
                </p>
                <router-link to="/relax/wellness" v-if="item.hasBtn">
                    <PrimaryButton buttonText="More info"/>
                </router-link>
            </div>
            <div class="imageBlock">
              <!-- <img :src="require(`@/assets/images/relax/${item.img}`)" alt="massage"> -->
                <picture>
                  <source
                    :srcset="require(`@/assets/images/relax/mob/${item.img}`)"
                    type="image/webp">
                  <img
                    :src="require(`@/assets/images/relax/${item.img}`)"
                    alt="retreat"
                  >
                </picture>
            </div>
          </div>
          <div class="specialistWrapper" v-else>
            <div class="imageBlock">
              <picture>
                  <source
                    :srcset="require(`@/assets/images/relax/mob/${item.img}`)"
                    type="image/webp">
                  <img
                    :src="require(`@/assets/images/relax/${item.img}`)"
                    alt="retreat"
                  >
                </picture>
            </div>
            <div class="infoBlock">
                <h2>
                    {{ item.name }}
                </h2>
                <p>
                    {{ item.description }}
                </p>
                <router-link to="/relax/wellness" v-if="item.hasBtn">
                    <PrimaryButton buttonText="More info"/>
                </router-link>
            </div>
          </div>
        </div>
        <!-- <div class="ourSpecialist">
            <div class="imageBlock">
                <img src="../assets/images/relax/massage.png" alt="massage">
            </div>
            <div class="infoBlock">
                <h2>
                    THAI MASSAGE
                </h2>
                <p>
                    Certified Thai masseuses will make sure you're ready for your next step.
                </p>
                <router-link to="/relax/massages">
                    <PrimaryButton buttonText="More info"/>
                </router-link>
            </div>
        </div>
        <div class="ourSpecialist">
            <div class="infoBlock">
                <h2>
                    REACH NEW HEIGHTS
                </h2>
                <p>
                    Our gym has 24/7 accessibility with a well-maintained
                    selection of free weights and machines.
                </p>
                <router-link to="/relax/gym">
                    <PrimaryButton buttonText="More info"/>
                </router-link>
            </div>
            <div class="imageBlock">
                <img src="../assets/images/relax/gym.png" alt="gym">
            </div>
        </div>
        <div class="ourSpecialist">
            <div class="imageBlock">
                <img src="../assets/images/relax/barber.png" alt="barber">
            </div>
            <div class="infoBlock">
                <h2>
                    Barber shop
                </h2>
                <p>
                    Barber Karel Cavalier won the GBBB (the Great British Barber Bash) in
                    Amsterdam and is one of the best barbers in Europe.  After opening barber
                    shops in Pilsen and Prague, he has opened his third barber shop at King's
                    Palace.
                </p>
            </div>
        </div> -->
    </div>

</template>

<script>
import { onMounted, ref, onBeforeUnmount } from 'vue';
import SvgIcon from '@/components/SvgIcon.vue';
// import PrimaryButton from '@/components/Buttons/PrimaryButton.vue';
import useAnimations from '@/animations/useAnimations';
import PrimaryButton from '@/components/Buttons/PrimaryButton.vue';
import mainBg from '@/assets/images/relax/relaxBg.png';
import mobileBg from '@/assets/images/relax/mob/relaxBg.png';

export default {
  name: 'MassagesView',
  components: {
    SvgIcon,
    PrimaryButton,
  },
  data() {
    return {
      relaxItems: [
        {
          id: 1,
          name: 'RETREAT',
          description: 'Relax in our Finnish sauna, steam bath or herbal steam bath. Take a few laps in the pool and enjoy the tranquil views of the Bohemian Forest!',
          img: 'retreat.png',
          hasBtn: true,
          revert: false,
        },
        {
          id: 2,
          name: 'THAI MASSAGE',
          description: 'Certified Thai masseuses will make sure you’re ready for your next step.',
          img: 'massage.png',
          hasBtn: true,
          revert: true,
        },
        {
          id: 3,
          name: 'REACH NEW HEIGHTS',
          description: 'Our gym has 24/7 accessibility with a well-maintained selection of free weights and machines.',
          img: 'gym.png',
          hasBtn: true,
          revert: false,
        },
        {
          id: 4,
          name: 'BARBER SHOP',
          description: 'Barber Karel Cavalier won the GBBB (the Great British Barber Bash) in Amsterdam and is one of the best barbers in Europe.  After opening barber shops in Pilsen and Prague, he has opened his third barber shop at King\'s Palace.',
          img: 'barber.png',
          hasBtn: false,
          revert: true,
        },
      ],
    };
  },
  setup() {
    const {
      mainDiv,
      textBlock, pageBlock, blockWrapper, mainImageBg, animatedTitle,
    } = useAnimations();
    const posterImg = ref('');
    const setPosterImg = () => {
      const screen = window.innerWidth;
      if (screen >= 768) {
        posterImg.value = mainBg;
      } else {
        posterImg.value = mobileBg;
      }
    };
    onMounted(() => {
      setPosterImg();
      window.addEventListener('resize', setPosterImg);
    });
    onBeforeUnmount(() => {
      window.removeEventListener('resize', setPosterImg);
    });
    return {
      mainDiv,
      textBlock,
      pageBlock,
      blockWrapper,
      mainImageBg,
      animatedTitle,
      posterImg,
      setPosterImg,
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
.Massage {
@include pageStyle;

  .main {
    position: relative;
    overflow: hidden;
    .mainImage, video {
      @include mainBg;
    }
    video::-webkit-media-controls {
        display: none !important;
        }

        video::-webkit-media-controls-enclosure {
        display: none !important;
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
      .colorText {
        color: var(--color-gold);
      }
      h1 {
        @include mainTitle;
      }
      .description {
        @include mainDescription;
      }
      .PrimaryButton {
        max-width: 180px;
      }
    }
  }

  .infoBlock {
    display: flex;
    gap: 30px;
    @include blockMargin;

    .infoCard {
    @include cardStyles;

      &:last-child {
        border-bottom: none;
      }

      h3 {
        @include text(var(--color-black), 24px, uppercase, 500);
      }

      ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        gap: 15px;

        li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          .openingDescription {
            display: flex;
            flex-direction: column;
            gap: 5px;
            align-items: flex-start;
          }

          .timeAvailable {
            color: var(--color-grey);
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
          }

          span {
            @include text(var(--color-black), 16px, unset, 400);
          }
        }
      }
    }
  }

  .ourSpecialist {
    @include blockStyles;
    background: var(--color-white);
    .specialistWrapper{
      align-items: center;
      display: flex;
      gap: 20px;
    }

    .infoBlock {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      max-width: 50%;
      padding: 0;
      flex: 1;

      h2 {
        @include text(var(--color-black), 30px, uppercase, 500);
      }

      p {
        @include text(var(--color-black), 16px, unset, 400);
      }
    }

    .imageBlock {
      overflow: hidden;
      position: relative;
      width: 100%;
      flex: 1;

      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }
  }
}

@media (max-width: 700px) {
    .Massage {
        .infoBlock{
            flex-direction: column;
            .infoCard{
                max-width: 100%;
                width: unset;
            }
        }
        .ourSpecialist{
          .specialistWrapper{
            flex-direction: column;
          }
            .infoBlock{
                max-width: 100%;
            }
        }
    }
}

@media (max-width: 480px) {
  .Massage {
    .main {
      .textBlock {
        bottom: 5%;
        left: 5%;
        max-width: 90%;
        .path span,
        .description,
        h1 {
          font-size: 12px;
        }
        h1 {
          font-size: clamp(20px, 8vw, 40px);
        }
      }
    }

    .infoBlock {
      margin: 20px;
      .infoCard {
        padding: 20px;
        h3 {
          font-size: 20px;
        }
        span {
          font-size: 16px;
        }
      }
    }

    .ourSpecialist {
      margin: 20px 10px;
      padding: 20px;

      .infoBlock h2 {
        font-size: 24px;
      }

      .infoBlock p {
        font-size: 14px;
      }
    }
  }
}
</style>
