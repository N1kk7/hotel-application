<template>
    <div class="Page Golf">
        <div class="main" ref="mainDiv">
            <picture>
              <source
                srcset="@/assets/images/golf-page/mob/main-golf.png" media="(max-width: 768px)">
              <img
                  src="@/assets/images/golf-page/main-golf.png"
                  alt="Header Image" class="mainImage"
                  ref="mainImageBg"
              />
            </picture>
            <div class="textBlock" ref="textBlock">
                <h1 class="colorTitle">Golf</h1>
            </div>
            <div class="path">
                <router-link to="/">
                    <span>
                        Homepage
                    </span>
                </router-link>
                <SvgIcon name="arrowRight" size="medium"/>
                <span>
                    Golf
                </span>
            </div>
        </div>
        <div class="golfClubs">
            <h2>
                nearby golf clubs
            </h2>
            <p>For your convenience, we have a selection of trusted tourist attractions nearby.</p>
            <div class="clubsWrapper">
                <div class="club" v-for="(club, index) in clubs" :key="index">
                    <picture>
                      <source
                        :srcset="require(`@/assets/images/golf-page/mob/${club.image}`)"
                        media="(max-width: 768px)"
                      >
                      <img
                        :src="require(`@/assets/images/golf-page/${club.image}`)"
                        alt="club"
                      >
                    </picture>
                    <h4 class="nameClub">
                         {{ club.name }}

                    </h4>
                    <p>
                        {{ club.description }}
                    </p>
                </div>
            </div>
            <PrimaryButton buttonText="more golf clubs"/>
        </div>
        <section class="playGolf">
            <div class="playGolf__content">
                <div class="playGolf__text">
                    <h2 class="playGolf__title">Play Some
                      <span style="color: var(--color-gold)">Golf</span>
                    </h2>
                    <p class="playGolf__description">
                    Fancy a game of golf? You have many options to choose from! For example,
                    The Royal Golf Club in Mariánské Lázně is the oldest golf course in the country.
                    Play a round or two, then explore the town's historical center!
                    </p>
                </div>
                <div class="playGolf__imageWrapper">
                  <swiper
                    @swiper="onSwiper"
                    :autoplay="{ delay: 3000 }"
                    :modules="modules"
                    :slides-per-view="'auto'"
                    class="mySwiper"
                  >
                    <swiper-slide v-for="player in playGolf" :key="player.id">
                      <picture>
                        <source
                        :srcset="require(`@/assets/images/golf-page/mob/${player.pathImg}`)">
                        <img class="playGolf__image"
                        :src="require(`@/assets/images/golf-page/${player.pathImg}`)"
                        alt="Golf Image"/>
                      </picture>
                    </swiper-slide>
                  </swiper>
                  <div class="buttonWrapper">
                    <SvgIcon name="arrowLeft" size="medium" stroke="#D7B154" @click="slidePrev"/>

                    <SvgIcon name="arrowRight" size="medium" stroke="#D7B154" @click="slideNext"/>
                  </div>
                </div>
            </div>
            <div class="playGolf__details">
                <div class="playGolf__detail">
                    <div class="icon">
                        <SvgIcon name="golfField" size="large" stroke="#D7B154" strokeWidth="1"/>

                    </div>
                    <span class="playGolf__detailValue">100 HA</span>
                    <span class="playGolf__detailLabel">Area of the golf course</span>
                </div>
                <div class="playGolf__detail">
                    <div class="icon">
                        <SvgIcon name="lake" size="large" stroke="#D7B154"/>
                    </div>
                    <span class="playGolf__detailValue">10 HA</span>
                    <span class="playGolf__detailLabel">Area of the water surface</span>
                </div>
                <div class="playGolf__detail">
                    <div class="icon">
                        <SvgIcon name="golfHole" size="large" stroke="#D7B154" strokeWidth="0"/>

                    </div>
                    <span class="playGolf__detailValue">18</span>
                    <span class="playGolf__detailLabel">Number of holes</span>
                </div>
            </div>
        </section>
        <section class="availableServices">
    <div class="availableServices__header">
      <h2 class="availableServices__title">Available</h2>
      <h2 class="availableServices__title">Services</h2>
      <p class="availableServices__description">
        Our team is always ready to provide a range of special
        services: do not hesitate to contact us.
      </p>
    </div>
    <div class="availableServices__services">
      <div class="availableServices__service" v-for="(services, index) in servicesArray"
      :key="index">
        <picture>
          <source :srcset="require(`@/assets/images/golf-page/mob/${services.image}`)
          " media="(max-width: 768px)">
          <img class="availableServices__image"
          :src="require(`@/assets/images/golf-page/${services.image}`)"
          alt="Equipment Rental">
        </picture>
        <h3 class="availableServices__serviceTitle">{{ services.tittle }}</h3>
        <p class="availableServices__serviceDescription">{{ services.description }}</p>
      </div>
    </div>
        </section>
        <RoomsCarusel tittleName="King's palace room"/>
    </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import SvgIcon from '@/components/SvgIcon.vue';
import useAnimations from '@/animations/useAnimations';
import PrimaryButton from '@/components/Buttons/PrimaryButton.vue';
import RoomsCarusel from '@/components/RoomsCarusel.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import useMainStore from '@/store/useStore';

export default {
  name: 'GolfComponent',
  components: {
    SvgIcon,
    PrimaryButton,
    RoomsCarusel,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      showImage: true,
      showText: true,
      showClubs: true,
      showPlayGolfContent: true,
      showPlayGolfDetails: true,
      showAvailableServicesHeader: true,
      playGolf: [
        {
          id: 1,
          pathImg: 'player1.png',
        },
        {
          id: 2,
          pathImg: 'player2.png',
        },
        {
          id: 3,
          pathImg: 'player3.png',
        },
        {
          id: 4,
          pathImg: 'player4.png',
        },
        {
          id: 5,
          pathImg: 'player5.png',
        },
      ],
      clubs: [
        { name: 'MARIÁNSKÉ LÁZNĚ', image: 'golf4.png', description: 'A national cultural monument and the second largest riding hall in Central Europe.' },
        { name: 'KYNŽVART', image: 'golf1.png', description: 'Ruins of the oldest known Czech stone castle.' },
        { name: 'ALFRÉDOV', image: 'golf2.png', description: 'Ideal for training and recreational sports.' },
        { name: 'SOKOLOV', image: 'golf3.png', description: 'Europe\'s most important paintball arena.' },
      ],
      details: [
        { icon: 'golfField', value: '100 HA', label: 'Area of the golf course' },
        { icon: 'lake', value: '10 HA', label: 'Area of the water surface' },
        { icon: 'golfHole', value: '18', label: 'Number of holes' },
      ],
      servicesArray: [
        { title: 'Equipment Rental', image: 'service1.png', description: 'Description' },
        { title: 'Golf Lessons', image: 'service2.png', description: 'Description' },
        { title: 'Transfer', image: 'service3.png', description: 'Description' },
      ],
    };
  },
  setup() {
    const {
      mainDiv,
      textBlock, pageBlock, blockWrapper, mainImageBg, animatedTitle,
    } = useAnimations();

    const useStore = useMainStore();

    const swiperInstance = ref(null);

    const onSwiper = (swiper) => {
      swiperInstance.value = swiper;
    };
    const slideNext = () => {
      swiperInstance.value.slideNext();
    };
    const slidePrev = () => {
      swiperInstance.value.slidePrev();
    };

    onMounted(() => {
      useStore.setMainHeight(mainDiv.value.clientHeight);
    });

    onBeforeUnmount(() => {
      useStore.setMainHeight(0);
    });

    return {
      modules: [Pagination, Autoplay],
      onSwiper,
      slideNext,
      slidePrev,
      mainDiv,
      textBlock,
      pageBlock,
      blockWrapper,
      mainImageBg,
      animatedTitle,
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

  .Golf {
    @include pageStyle;

    .main {
      position: relative;
      overflow: hidden;
      .mainImage {
        @include mainBg;
      }

      .textBlock {
        @include mainTextBlock;

        h1 {
          @include mainTitle;
          color: #D7B154
        }
      }
      .path {
        @include alignPath;
      }
    }

    .golfClubs {
      @include blockStyles;
      background: var(--color-white);
      display: flex;
      flex-direction: column;
      gap: 40px;

      h2 {
        @include text(var(--color-gold), clamp(18px, 4vw, 40px), uppercase, 500);
      }

      p {
        @include text(#454545, clamp(16px, 4vw, 28px), unset, 400);
      }

      .clubsWrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 40px;
        row-gap: 60px;

        .club {
          overflow: hidden;

          img {
            width: 100%;
            height: auto;
            object-fit: cover;
          }

          h4 {
            @include text(var(--color-gold), clamp(14px, 4vw, 30px), uppercase, 500);
            padding: 22px 0;
          }

          p {
            @include text(#454545, clamp(12px, 4vw, 24px), unset, 400);
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

    .playGolf {
      // margin-inline: 60px;
      margin-bottom: 60px;
      &__content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 40px;
        margin-bottom: 2rem;
        background: var(--color-white);
        @include blockStyles;
        margin: 0;

      }

      &__text {
        flex: 1;
        padding-right: 2rem;
      }

      &__title {
        margin-bottom: 1rem;
        @include text(var(--color-black), 40px, uppercase, 500);
      }

      &__description {
        margin-bottom: 1rem;
        @include text(var(--color-textGrey), 20px, unset, 400);
      }

      &__imageWrapper {
        flex: 1;
        display: flex;
        justify-content: center;
        position: relative;
        .swiper{
          max-width: 100%;
          max-height: 100%;
          .swiper-slide{
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
              display: block;
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
        .buttonWrapper{
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            z-index: 1;
            width: 100%;
            height: 100%;
            svg{
              margin-inline: 20px;
              background: rgba(255,255,255, 0.9);
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 50%;
              cursor: pointer;
            }
          }
      }
    }

    .playGolf__details {
      display: flex;
      justify-content: space-around;
      text-align: center;
      padding: 60px;
      background-color: #f9f9f9;
      border-radius: 10px;
      margin-block: 20px;
    }

    .playGolf__detail {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: clamp(10px, 2vw, 20px);

      .icon {
        border: 1px solid #D7B154;
        border-radius: 50%;
        padding: 15px;
      }
    }

    .playGolf__detailValue {
      @include text(var(--color-gold), clamp(22px, 4vw, 28px), uppercase, 500);
    }

    .playGolf__detailLabel {
      @include text(var(--color-textGrey), clamp(16px, 4vw, 20px), unset, 400);
    }

    .availableServices {
      @include blockStyles;
      background-color: #fff;

      &__header {
        text-align: left;
        margin-bottom: 60px;
      }

      &__title {
        @include text(var(--color-black), clamp(18px, 4vw, 40px), uppercase, 500);
      }

      &__description {
        margin-top: clamp(20px, 3vw, 40px);
        @include text(var(--color-greyText), clamp(16px, 4vw, 28px), unset, 400);
      }

      &__services {
        display: flex;
        justify-content: space-between;
        gap: 40px;
      }

      &__service {
        text-align: start;
        flex: 1;
      }

      &__image {
        width: 100%;
        height: auto;
        margin-bottom: 20px;
      }

      &__serviceTitle {
        @include text(var(--color-gold), clamp(14px, 4vw, 30px), uppercase, 500);
      }

      &__serviceDescription {
        margin-top: clamp(10px, 2vw, 20px);
        @include text(var(--color-textGrey), clamp(12px, 4vw, 24px), unset, 400);
      }
    }
  }

  @media (max-width: 768px) {
    .Golf {
      .main {
        .textBlock {
          bottom: 10%;
          left: 5%;
          max-width: 90vw;
          gap: 10px;
          .path {
            flex-direction: column;
            align-items: flex-start;

            span {
              font-size: 12px;
            }
          }

          h1 {
            font-size: clamp(30px, 8vw, 50px);
          }
        }
      }

      .golfClubs {
        padding: 30px;
        margin: 30px;
        gap: 20px;

        h2 {
          font-size: 30px;
        }

        p {
          font-size: 18px;
        }

        .clubsWrapper {
          grid-template-columns: 1fr;
        }
      }

      .playGolf {
        // margin-inline: 30px;
        margin-bottom: 30px;

        &__content {
          flex-direction: column;
          padding: 30px 36px;
          gap: 20px;
        }

        &__text {
          padding-right: 0;
        }

        &__title {
          font-size: 30px;
        }

        &__description {
          font-size: 18px;
        }

        &__details {
          flex-direction: column;
          padding: 30px;
          gap: 20px;
        }
      }

      .availableServices {
        // margin-inline: 30px;
        margin-bottom: 30px;
        padding: 30px 36px;

        &__header {
          margin-bottom: 30px;
        }

        &__title {
          font-size: 30px;
        }

        &__description {
          font-size: 18px;
        }

        &__services {
          flex-direction: column;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .Golf {
      .main {
        .textBlock {
          bottom: 5%;
          left: 5%;
          max-width: 90vw;
          gap: 8px;
          .path {
            flex-direction: column;
            align-items: flex-start;

            span {
              font-size: 10px;
            }
          }

          h1 {
            font-size: clamp(25px, 6vw, 40px);
          }
        }
      }

      .golfClubs {
        padding: 20px;
        margin: 20px;
        gap: 15px;

        h2 {
          font-size: 25px;
        }

        p {
          font-size: 16px;
        }

        .clubsWrapper {
          grid-template-columns: 1fr;
        }
      }

      .playGolf {
        margin-inline: 20px;
        margin-bottom: 20px;

        &__content {
          flex-direction: column;
          padding: 20px 24px;
          gap: 15px;
        }

        &__text {
          padding-right: 0;
        }

        &__title {
          font-size: 25px;
        }

        &__description {
          font-size: 16px;
        }

        &__details {
          flex-direction: column;
          padding: 20px;
          gap: clamp(15px, 4vw, 25px);
        }
      }

      .availableServices {
        margin-inline: 20px;
        margin-bottom: 20px;
        padding: 20px 24px;

        &__header {
          margin-bottom: 20px;
        }

        &__title {
          font-size: 25px;
        }

        &__description {
          font-size: 16px;
        }

        &__services {
          flex-direction: column;
        }
      }
    }
  }

  @media (max-width: 320px) {
    .Golf {
      .main {
        .textBlock {
          bottom: 3%;
          left: 3%;
          max-width: 94vw;
          gap: 6px;
          .path {
            flex-direction: column;
            align-items: flex-start;

            span {
              font-size: 8px;
            }
          }

          h1 {
            font-size: clamp(20px, 5vw, 30px);
          }
        }
      }

      .golfClubs {
        margin: 10px;
        gap: 10px;

        h2 {
          font-size: 20px;
        }

        p {
          font-size: 14px;
        }

        .clubsWrapper {
          grid-template-columns: 1fr;
        }
      }

      .playGolf {
        margin-inline: 10px;
        margin-bottom: 10px;

        &__content {
          flex-direction: column;
          padding: 10px 12px;
          gap: 10px;
        }

        &__text {
          padding-right: 0;
        }

        &__title {
          font-size: 20px;
        }

        &__description {
          font-size: 14px;
        }

        &__details {
          flex-direction: column;
        }
      }

      .availableServices {
        margin-inline: 10px;
        margin-bottom: 10px;
        padding: 10px 12px;

        &__header {
          margin-bottom: 10px;
        }

        &__title {
          font-size: 20px;
        }

        &__description {
          font-size: 14px;
        }

        &__services {
          flex-direction: column;
        }
      }
    }
  }
</style>
