<template>
    <div class="Page Golf">
        <div class="main">
            <img
                src="../assets/images/golf-page/main-golf.png"
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
                        Golf
                    </span>
                </div>
                <h1>Golf</h1>
            </div>
        </div>
        <div class="golfClubs">
            <h2>
                nearby golf clubs
            </h2>
            <p>For your convenience, we have a selection of trusted tourist attractions nearby.</p>
            <div class="clubsWrapper">
                <div class="club">
                    <img src="../assets/images/golf-page/golf4.png" alt="">
                    <h4 class="nameClub">
                        MARIÁNSKÉ LÁZNĚ

                    </h4>
                    <p>
                        A national cultural monument and the second
                        largest riding hall in Central Europe.
                    </p>
                </div>
                <div class="club">
                    <img src="../assets/images/golf-page/golf1.png" alt="">
                    <h4 class="nameClub">
                        KYNŽVART

                    </h4>
                    <p>
                        Ruins of the oldest known Czech stone castle.
                    </p>
                </div>
                <div class="club">
                    <img src="../assets/images/golf-page/golf2.png" alt="">
                    <h4 class="nameClub">
                        ALFRÉDOV

                    </h4>
                    <p>
                        Ideal for training and recreational sports.
                    </p>
                </div>
                <div class="club">
                    <img src="../assets/images/golf-page/golf3.png" alt="">
                    <h4 class="nameClub">
                        SOKOLOV

                    </h4>
                    <p>
                        Europe's most important paintball arena.
                    </p>
                </div>
            </div>
            <PrimaryButton buttonText="more golf clubs"/>
        </div>
        <section class="playGolf">
            <div class="playGolf__content">
                <div class="playGolf__text">
                    <h2 class="playGolf__title">Play Some Golf</h2>
                    <p class="playGolf__description">
                    Fancy a game of golf? You have many options to choose from! For example,
                    The Royal Golf Club in Mariánské Lázně is the oldest golf course in the country.
                    Play a round or two, then explore the town's historical center!
                    </p>
                </div>
                <div class="playGolf__imageWrapper">
                    <img class="playGolf__image"
                    src="../assets/images/golf-page/Image.png" alt="Golf Image">

                </div>
            </div>
            <div class="playGolf__details">
                <div class="playGolf__detail">
                    <div class="icon">
                        <SvgIcon name="golfField" size="large" stroke="#D7B154"/>

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
                        <SvgIcon name="golfHole" size="large" stroke="#D7B154"/>

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
      <div class="availableServices__service">
        <img class="availableServices__image"
        src="../assets/images/golf-page/service1.png" alt="Equipment Rental">
        <h3 class="availableServices__serviceTitle">Equipment Rental</h3>
        <p class="availableServices__serviceDescription">Description</p>
      </div>
      <div class="availableServices__service">
        <img class="availableServices__image"
        src="../assets/images/golf-page/service2.png" alt="Golf Lessons">
        <h3 class="availableServices__serviceTitle">Golf Lessons</h3>
        <p class="availableServices__serviceDescription">Description</p>
      </div>
      <div class="availableServices__service">
        <img class="availableServices__image"
        src="../assets/images/golf-page/service3.png" alt="Transfer">
        <h3 class="availableServices__serviceTitle">Transfer</h3>
        <p class="availableServices__serviceDescription">Description</p>
      </div>
    </div>
  </section>
    </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue';
import PrimaryButton from '@/components/Buttons/PrimaryButton.vue';

export default {
  name: 'GolfComponent',
  components: {
    SvgIcon,
    PrimaryButton,
  },
  data() {
    return {
      showImage: true,
      showText: true,
      showClubs: true,
      showPlayGolfContent: true,
      showPlayGolfDetails: true,
      showAvailableServicesHeader: true,
      clubs: [
        { name: 'MARIÁNSKÉ LÁZNĚ', image: '../assets/images/golf-page/golf4.png', description: 'A national cultural monument and the second largest riding hall in Central Europe.' },
        { name: 'KYNŽVART', image: '../assets/images/golf-page/golf1.png', description: 'Ruins of the oldest known Czech stone castle.' },
        { name: 'ALFRÉDOV', image: '../assets/images/golf-page/golf2.png', description: 'Ideal for training and recreational sports.' },
        { name: 'SOKOLOV', image: '../assets/images/golf-page/golf3.png', description: 'Europe\'s most important paintball arena.' },
      ],
      details: [
        { icon: 'golfField', value: '100 HA', label: 'Area of the golf course' },
        { icon: 'lake', value: '10 HA', label: 'Area of the water surface' },
        { icon: 'golfHole', value: '18', label: 'Number of holes' },
      ],
      services: [
        { title: 'Equipment Rental', image: '../assets/images/golf-page/service1.png', description: 'Description' },
        { title: 'Golf Lessons', image: '../assets/images/golf-page/service2.png', description: 'Description' },
        { title: 'Transfer', image: '../assets/images/golf-page/service3.png', description: 'Description' },
      ],
    };
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

        h1 {
          @include mainTitle;
        }
      }
    }

    .golfClubs {
      padding: 60px;
      margin: 60px;
      background: var(--color-white);
      display: flex;
      flex-direction: column;
      gap: 40px;

      h2 {
        @include text(var(--color-black), 40px, uppercase, 500);
      }

      p {
        @include text(var(--color-black), 20px, unset, 400);
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
            @include text(var(--color-black), 30.752px, uppercase, 500);
            padding: 22px 0;
          }

          p {
            @include text(var(--color-black), 21.966px, unset, 400);
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
      margin-inline: 60px;
      margin-bottom: 60px;

      &__content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 40px;
        margin-bottom: 2rem;
        background: var(--color-white);
        padding: 60px 72px;
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
        @include text(var(--color-black), 20px, unset, 400);
      }

      &__imageWrapper {
        flex: 1;
        display: flex;
        justify-content: center;
      }

      &__image {
        width: 100%;
        height: auto;
      }
    }

    .playGolf__details {
      display: flex;
      justify-content: space-around;
      text-align: center;
      padding: 60px;
      background-color: #f9f9f9;
      border-radius: 10px;
    }

    .playGolf__detail {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 20px;

      .icon {
        border: 1px solid #D7B154;
        border-radius: 50%;
        padding: 15px;
      }
    }

    .playGolf__detailValue {
      @include text(var(--color-black), 28px, uppercase, 500);
    }

    .playGolf__detailLabel {
      @include text(#3F3F3F, 20px, unset, 400);
    }

    .availableServices {
      margin-inline: 60px;
      margin-bottom: 60px;
      padding: 60px 72px;
      background-color: #fff;

      &__header {
        text-align: left;
        margin-bottom: 60px;
      }

      &__title {
        @include text(var(--color-black), 40px, uppercase, 500);
      }

      &__description {
        margin-top: 40px;
        @include text(var(--color-black), 20px, unset, 400);
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
        @include text(var(--color-black), 28px, uppercase, 500);
      }

      &__serviceDescription {
        margin-top: 20px;
        @include text(var(--color-black), 20px, unset, 400);
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
        margin-inline: 30px;
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
        margin-inline: 30px;
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
          gap: 15px;
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
        padding: 10px;
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
          padding: 10px;
          gap: 10px;
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
