<template>
    <div class="Golf">
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

};
</script>

<style scoped lang="scss">
    .Golf{
        width: 100%;
        height: fit-content;
        background: var(--color-light);
        .main{
           position: relative;
           .mainImage{
            width: 100%;
            height: 100%;
            min-height: 100vh;
            object-fit: cover;
            }
            .textBlock{
                position: absolute;
                bottom: 15%;
                max-width: 40vw;
                left: 10%;
                display: flex;
                flex-direction: column;
                gap: 16px;
                .path{
                    display: flex;
                    justify-content: flex-start;
                    gap: 10px;
                    align-items: center;
                    position: relative;
                    z-index: 5;
                    a{
                        text-decoration: none;
                        cursor: pointer;
                    }
                    span{
                        color: var(--color-white);
                        text-align: center;
                        font-family: var(--font-text-reg);
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 150%; /* 21px */
                        text-transform: uppercase;
                    }
                }
                h1{
                    color: var(--color-white);
                    font-family: var(--font-grot-reg);
                    font-size: clamp(45px, 10vw, 80px);
                    font-style: normal;
                    font-weight: 420;
                    line-height: 100%; /* 80px */
                    text-transform: uppercase;
        }
            }
        }
        .golfClubs{
            padding: 60px;
            margin: 60px;
            background: var(--color-white);
            display: flex;
            flex-direction: column;
            gap: 40px;
            h2{
                color: var(--color-black);
                /* [desk]/H2 */
                font-family: var(--font-text-reg);
                font-size: 40px;
                font-style: normal;
                font-weight: 500;
                line-height: 120%; /* 48px */
                text-transform: uppercase;
            }
            p{
                color: #454545;
                font-family: var(--font-text-reg);
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%; /* 30px */
            }
            .clubsWrapper{
                display: grid;
                grid-template-columns: 1fr 1fr;
                column-gap: 40px;
                row-gap: 60px;
                .club{
                    overflow: hidden;
                    img{
                        width: 100%;
                        height: auto;
                        object-fit: cover;
                    }
                    h4{
                        color: var(--color-black);
                        font-family: var(--font-text-reg);
                        font-size: 30.752px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 130%; /* 39.978px */
                        text-transform: uppercase;
                        padding: 22px 0;
                    }
                    p{
                        color: #454545;
                        font-family: var(--font-text-reg);
                        font-size: 21.966px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 150%; /* 32.949px */
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
      color: var(--color-black);
        font-family: var(--font-text-reg);
        font-size: 40px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%; /* 48px */
        text-transform: uppercase;
    }

    &__description {
      margin-bottom: 1rem;
      color: #3F3F3F;
        font-family: var(--font-text-reg);
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 30px */
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

  &__details {
    display: flex;
    justify-content: space-around;
    text-align: center;
    padding: 60px;
    background-color: #f9f9f9;
    border-radius: 10px;

  }
  &__detail {
      flex: 1;
      display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 20px;
        .icon{
            border: 1px solid #D7B154;
            border-radius: 50%;
            padding: 15px;
        }

    }
    &__detailValue {
        color: var(--color-black);
        font-family: var(--font-text-reg);
        font-size: 28px;
        font-style: normal;
        font-weight: 500;
        line-height: 130%; /* 36.4px */
        text-transform: uppercase;
      }

      &__detailLabel {
        color: #3F3F3F;
        font-family: var(--font-text-reg);
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 30px */
      }
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
        color: var(--color-black);
        font-family: var(--font-text-reg);
        font-size: 40px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%; /* 48px */
        text-transform: uppercase;
    }

    &__description {
        margin-top: 40px;
        color: #3F3F3F;
        font-family: var(--font-text-reg);
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 30px */
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
        color: var(--color-black);
        font-family: var(--font-text-reg);
        font-size: 28px;
        font-style: normal;
        font-weight: 500;
        line-height: 130%; /* 36.4px */
        text-transform: uppercase;
      }

      &__serviceDescription {
        margin-top: 20px;
        color: #3F3F3F;
        font-family: var(--font-text-reg);
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 30px */
      }
}
    }
</style>
