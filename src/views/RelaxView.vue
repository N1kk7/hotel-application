<template>
    <div class="Page Massage">
        <div class="main">
            <!-- <img
                src="../assets/images/relax/relaxBg.png"
                alt="Header Image" class="mainImage"
            /> -->
            <video
                controls
                autoplay
                loop
                muted
                poster="../assets/images/relax/relaxBg.png"
                >
                <source src="../assets/images/relax/Kings-Wellness.mp4" type="video/mp4" />
                <!-- <source src="path/to/video.webm" type="video/webm" /> -->
                Your browser does not support the video tag.
            </video>
            <div class="textBlock">
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
                    Relax like
                </h1>
                <h1 class="colorText">
                    A King

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
        <!-- <div class="aboutMassage">
            <h3 class="preTitle">
                FITNESS
            </h3>
            <h2 class="title">
                TRAIN LIKE A KING
            </h2>
            <p class="description">
                Our gym is open 24/7 and has a well-maintained selection of
                free weights and machines.
            </p>
            <div class="imageWrapper">
                <img src="../assets/images/gym/slider1.png" alt="slider1">
            </div>
        </div> -->
        <div class="ourSpecialist">
            <div class="infoBlock">
                <h2>
                    RETREAT
                </h2>
                <p>
                    Relax in our Finnish sauna, steam bath or herbal steam bath.
                    Take a few laps in the pool and enjoy the tranquil views of the Bohemian Forest!
                </p>
                <router-link to="/relax/wellness">
                    <PrimaryButton buttonText="More info"/>
                </router-link>
            </div>
            <div class="imageBlock">
                <img src="../assets/images/relax/retreat.png" alt="retreat">
            </div>
        </div>
        <div class="ourSpecialist">
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
        </div>
    </div>

</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue';
// import PrimaryButton from '@/components/Buttons/PrimaryButton.vue';
import PrimaryButton from '@/components/Buttons/PrimaryButton.vue';

export default {
  name: 'MassagesView',
  components: {
    SvgIcon,
    PrimaryButton,
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
    .mainImage, video {
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
    padding: 20px;

    .infoCard {
      padding: 20px;
      border-bottom: 1px solid var(--color-light-grey);
    background: var(--color-white);
    border-radius: 10px;
    width: 100%;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

      &:last-child {
        border-bottom: none;
      }

      h3 {
        color: var(--color-black);
        font-family: var(--font-text-reg);
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 130%;
        text-transform: uppercase;
        margin-bottom: 10px;
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
            color: var(--color-black);
            font-family: var(--font-text-reg);
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
          }
        }
      }
    }
  }

  .ourSpecialist {
    padding: 20px;
    margin: 30px 20px;
    background: var(--color-white);
    align-items: center;
    display: flex;
    gap: 20px;

    .infoBlock {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      max-width: 50%;
      padding: 0;
      flex: 1;

      h2 {
        color: var(--color-black);
        font-family: var(--font-text-reg);
        font-size: 30px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        text-transform: uppercase;
        margin-bottom: 10px;
      }

      p {
        color: var(--color-black);
        font-family: var(--font-text-reg);
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
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
            flex-direction: column;
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
