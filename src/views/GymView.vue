<template>
    <div class="Page Massage">
        <div class="main" ref="mainDiv">
            <video
                playsinline
                autoplay
                loop
                muted
                poster="../assets/images/gym/gymBg.png"
                ref="mainImageBg"
                >
                <source src="../assets/images/gym/Kings–Fitness.mp4" type="video/mp4" />
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
                    <router-link to="/relax">
                        <span>
                            relax
                        </span>
                    </router-link>
                    <SvgIcon name="arrowRight" size="medium"/>
                    <span>
                        fitness
                    </span>
                </div>
                <h1>
                    24/7
                </h1>
                <h1 class="colorTitle">
                    GYM
                </h1>
                <p class="description">
                    Reach new heights!
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
                                00:00 –  23:00
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
        <div class="aboutMassage">
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
        </div>
        <RoomsCarusel tittleName="King's palace room"/>
    </div>

</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue';
import useAnimations from '@/animations/useAnimations';
import PrimaryButton from '@/components/Buttons/PrimaryButton.vue';
import RoomsCarusel from '@/components/RoomsCarusel.vue';

export default {
  name: 'MassagesView',
  components: {
    SvgIcon,
    PrimaryButton,
    RoomsCarusel,
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
    .Massage{
       @include pageStyle;
        .main{
           position: relative;
           overflow: hidden;
           .mainImage, video{
            @include mainBg;
            }
            video::-webkit-media-controls {
            display: none !important;
            }

            video::-webkit-media-controls-enclosure {
            display: none !important;
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
                .description{
                    @include mainDescription;
                }
                .PrimaryButton{
                    max-width: 180px;
                }
            }
        }
        .infoBlock{
            @include blockMargin;
            display: flex;
            justify-content: space-between;
            align-items: stretch;
            gap: 20px;
            .infoCard{
                @include cardStyles;
                background: var(--color-white);
                h3{
                    @include text(var(--color-black), 28px, uppercase, 500);
                }
                ul{
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    list-style-type: none;
                    gap: 20px;
                    li{
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                        gap: 10px;
                        .openingDescription{
                            display: flex;
                            justify-content: space-between;
                            width: 100%;
                        }
                        .timeAvailable{
                            padding-right: 10%;
                        }
                        span{
                            @include text(var(--color-black), 20px, unset, 400);
                        }
                    }
                }

            }
        }
        .aboutMassage{
            @include blockStyles;
            background: var(--color-white);
            // padding: 60px;
            .preTitle{
                @include text(var(--color-gold), 14px, uppercase, 500);
            }
            .title{
                margin: 8px 0 32px;
                @include text(var(--color-black), 40px, uppercase, 500);
            }
            .description{
                @include text(var(--color-black), 20px, unset, 400);
            }
            .imageWrapper{
                position: relative;
                overflow: hidden;
                margin-top: 40px;
                img{
                    max-width: 100%;
                }
            }
        }
    }
</style>
