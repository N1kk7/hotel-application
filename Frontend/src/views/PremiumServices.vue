<template>
   <div class="Page Services">
        <div class="main" ref="mainDiv">
            <picture>
                <source
                    srcset="../assets/images/premium-services/mob/main.png"
                    media="(max-width: 768px)"
                >
                <img
                    src="../assets/images/premium-services/main.png"
                    alt="Header Image" class="mainImage"
                    ref="mainImageBg"
                />
            </picture>
            <div class="textBlock" ref="textBlock">
                <h1 class="colorTitle">Premium </h1>
                <h1>
                    Services
                </h1>
            </div>
            <div class="path">
                <router-link to="/">
                    <span>
                        Homepage
                    </span>
                </router-link>
                <SvgIcon name="arrowRight" size="medium"/>
                <span>
                    premium-services
                </span>
            </div>
        </div>
        <div class="golfClubs">
            <div class="topTittle">
                <h4 class="preTittle">
                    Premium
                </h4>
                <h2>
                    Available Services
                </h2>
            </div>
            <p>
                Our team is always ready to provide a range of special services:
                do not hesitate to contact us.
            </p>
            <div class="clubsWrapper">
                <div class="club" v-for="service in servicesItems" :key="service.id">
                    <picture>
                        <source
                            :srcset="
                                require(`@/assets/images/premium-services/mob/${service.pathImg}`)"
                            media="(max-width: 768px)"
                        >
                        <img
                            :src="require(`@/assets/images/premium-services/${service.pathImg}`)"
                            alt="services">
                    </picture>
                    <h4 class="nameClub">
                         {{ service.tittle }}

                    </h4>
                    <p>
                        {{ service.description }}
                    </p>
                </div>
            </div>
            <PrimaryButton buttonText="more golf clubs"/>
        </div>
        <RoomsCarusel tittleName="King's palace room"/>
   </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue';
import useAnimations from '@/animations/useAnimations';
import RoomsCarusel from '@/components/RoomsCarusel.vue';

export default {
  name: 'Premium-services',
  components: {
    SvgIcon,
    RoomsCarusel,
  },
  data() {
    return {
      servicesItems: [
        {
          id: 1,
          pathImg: 'serv1.png',
          tittle: 'Airport Transfer',
          description: 'We will drive you home safely and on time',
        },
        {
          id: 2,
          pathImg: 'serv2.png',
          tittle: 'Rent a car',
          description: 'We will help you with your car rental',
        },
        {
          id: 3,
          pathImg: 'serv3.png',
          tittle: 'Early Check-In',
          description: 'Early check-in upon availability',
        },
        {
          id: 4,
          pathImg: 'serv4.png',
          tittle: 'Laundry Service',
          description: 'Laundry Service',
        },
      ],
    };
  },
  setup() {
    const {
      mainDiv,
      textBlock, pageBlock, blockWrapper, mainImageBg, animatedTitle,
    } = useAnimations();
    return {
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
    .Services{
        @include pageStyle;
        .main{
           position: relative;
           overflow: hidden;
           .mainImage{
            @include mainBg;
            }
            .textBlock{
                @include mainTextBlock;
                .colorTitle{
                    color: var(--color-gold);
                }
                h1{
                    @include mainTitle;
                }
            }
            .path{
                    @include alignPath;
                }
        }
        .golfClubs{
            @include blockStyles;
            background: var(--color-white);
            display: flex;
            flex-direction: column;
            gap: 40px;
            .preTittle{
                @include text(var(--color-gold), 14px, uppercase, 500);
                padding-bottom: clamp(5px, 4vw, 10px);
            }
            h2{
                @include text(var(--color-gold), clamp(18px, 4vw, 40px), uppercase, 500);
            }
            p{
                @include text(#454545, clamp(16px, 4vw, 28px), normal, 400);
            }
            .clubsWrapper{
                display: grid;
                grid-template-columns: 1fr 1fr;
                column-gap: 40px;
                // row-gap: 60px;
                row-gap: clamp(30px, 5vw, 60px);
                .club{
                    overflow: hidden;
                    img{
                        width: 100%;
                        height: auto;
                        object-fit: cover;
                    }
                    h4{
                        @include text(var(--color-gold), clamp(14px, 4vw, 30px), uppercase, 500);
                        padding: clamp(11px, 4vw, 22px) 0;
                    }
                    p{
                        @include text(#454545, clamp(12px, 4vw, 24px), normal, 400);
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
    @media screen and (max-width: 768px) {
        .Services{
            .golfClubs {
                    padding: 30px;
                    margin: 30px;
                    gap: 20px;

                    .clubsWrapper {
                    grid-template-columns: 1fr;
                    }
                }
        }
    }
    @media (max-width: 480px) {
        .Services{
            .golfClubs {
                    padding: 20px;
                    margin: 20px;
                    gap: 20px;

                    .clubsWrapper {
                    grid-template-columns: 1fr;
                    }
                }
        }
    }
    @media (max-width: 320px) {
        .Services{
            .golfClubs {
                    padding: 10px;
                    margin: 10px;
                    gap: 15px;

                    .clubsWrapper {
                    grid-template-columns: 1fr;
                    }
                }
        }
    }
</style>
