<template>
    <div class="Page Massage">
        <div class="main" ref="mainDiv">
            <picture>
                <source
                    :srcset="require('@/assets/images/massage/mob/massageBg.png')"
                    media="(max-width: 768px)"
                >
                <img
                    :src="require('@/assets/images/massage/massageBg.png')"
                    alt="Header Image" class="mainImage"
                    ref="mainImageBg"
                />
            </picture>
            <div class="textBlock" ref="textBlock">
                <h1>
                    Massages &
                </h1>
                <h1 class="colorTitle"> treatments </h1>
                <p class="description">
                    Slow down
                </p>
                <PrimaryButton buttonText="contact"/>
            </div>
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
                    massages
                </span>
            </div>
        </div>
        <div class="infoBlock">
            <div class="infoCard openingCard">
                <h3>
                    Opening hours
                </h3>
                <ul>
                    <li>
                        <SvgIcon name="clock" size="small" strokeWidth="0"/>
                        <div class="openingDescription">
                            <span>
                                Monday – Thursday
                            </span>
                            <span class="timeAvailable">
                                12:00 – 23:00
                            </span>
                        </div>
                    </li>
                    <li>
                        <SvgIcon name="clock" size="small" strokeWidth="0"/>
                        <div class="openingDescription">
                            <span>
                                Friday
                            </span>
                            <span class="timeAvailable">
                                12:00 – 00:00
                            </span>
                        </div>
                    </li>
                    <li>
                        <SvgIcon name="clock" size="small" strokeWidth="0"/>
                        <div class="openingDescription">
                            <span>
                                Saturday – Sunday
                            </span>
                            <span class="timeAvailable">
                                11:00 – 00:00
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
                THAI MASSAGES
            </h3>
            <h2 class="title">
                Relish in a Thai massage
            </h2>
            <p class="description">
                Professional Thai massage therapists will help you relax and unwind.
            </p>
            <div class="imageWrapper">
                <picture>
                    <source
                        :srcset="require('@/assets/images/massage/mob/sliderImg1.png')"
                        media="(max-width: 768px)"
                    >
                    <img
                        :src="require('@/assets/images/massage/sliderImg1.png')"
                        alt="slider1"
                    >
                </picture>
            </div>
        </div>
        <div class="ourSpecialist">
            <div class="infoBlock">
                <h3>
                    certified masseuses
                </h3>
                <h2>
                    Excellent combination
                </h2>
                <p>
                    Our certified Thai massage therapists combine pressure from fingers,
                    palms, elbows, knees and feet with stretching and acupressure techniques.
                </p>
            </div>
            <div class="imageBlock">
                <img src="../assets/images/massage/massagists.png" alt="massagists">
            </div>
        </div>
        <RoomsCarusel tittleName="AcCommodations" pathImg="."/>
    </div>

</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue';
// import PrimaryButton from '@/components/Buttons/PrimaryButton.vue';
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
                .description{
                    @include mainDescription;
                }
                .PrimaryButton{
                    max-width: 180px;
                }
            }
            .path{
                @include alignPath;
            }
        }
        .infoBlock{
            display: flex;
            justify-content: space-between;
            @include blockMargin;
            align-items: stretch;
            gap: 20px;
            .infoCard{
                @include cardStyles;
                background: var(--color-white);
                h3{
                    @include text(var(--color-textGrey), clamp(18px, 2.5vw, 28px), uppercase, 500);
                }
                ul{
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    list-style-type: none;
                    margin-top: 20px;
                    gap: 20px;
                    li{
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                        position: relative;
                        gap: 10px;
                        .openingDescription{
                            display: flex;
                            justify-content: space-between;
                            width: 100%;
                            gap: 10px;
                            span{
                            white-space: nowrap;

                            }
                        }
                        .timeAvailable{
                            position: absolute;
                            right: 0;
                            @media (max-width: 768px) {
                                position: relative;
                                right: unset;
                            }
                        }
                        span{
                            @include text(
                                var(--color-textGrey), clamp(14px, 2.3vw, 20px), unset, 400);
                        }
                    }
                    @media (max-width: 768px) {
                        width: fit-content;
                    }
                }

            }
            @media (max-width: 768px) {
                flex-direction: column;
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
                margin: 8px 0 clamp(24px, 2.5vw, 32px);
                @include text(var(--color-textGrey), clamp(24px, 3.5vw, 40px), uppercase, 500);
            }
            .description{
                @include text(var(--color-textGrey), clamp(14px, 2.3vw, 20px), unset, 400);
            }
            .imageWrapper{
                position: relative;
                overflow: hidden;
                margin-top: clamp(20px, 3vw, 40px);
                img{
                    max-width: 100%;
                }
            }
        }
        .ourSpecialist{
            @include blockStyles;
            background: var(--color-white);
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: clamp(20px, 3vw, 40px);
            .infoBlock{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                margin: 0;
                max-width: 50%;

                h3{
                    @include text(var(--color-gold), 14px, uppercase, 500);
                }
                h2{
                    @include text(var(--color-textGrey), clamp(24px, 3.5vw, 40px), uppercase, 500);
                }
                p{
                    @include text(var(--color-textGrey), clamp(14px, 2.3vw, 20px), unset, 400);
                }
            }
            .imageBlock{
                overflow: hidden;
                position: relative;
                img{
                    width: 100%;
                }
            }

            @media (max-width: 768px) {
                flex-direction: column;
                .infoBlock{
                    max-width: 100%;
                }
            }
        }
    }
</style>
