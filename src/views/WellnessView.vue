<template>
    <div class="Massage">
        <div class="main">
            <img
                src="../assets/images/wellness/wellnessBg.png"
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
                <h1>
                    Massages &
                </h1>
                <h1 class="colorTitle"> treatments </h1>
                <p class="description">
                    Slow down
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
                                Monday – Thursday
                            </span>
                            <span class="timeAvailable">
                                11:00 – 00:00
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
                                12:00 – 00:00
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
                sauna
            </h3>
            <h2 class="title">
                RECHARGE
            </h2>
            <p class="description">
                Take a soothing Finnish sauna or steam bath.
            </p>
            <div class="imageWrapper">
                <img src="../assets/images/wellness/slider1.png" alt="slider1">
            </div>
        </div>
        <div class="ourSpecialist">
            <div class="infoBlock">
                <h3>
                    pool
                </h3>
                <h2>
                    DIVE
                </h2>
                <p>
                    Take a dip in the pool with a serene view of the Bohemian Forest!
                </p>
            </div>
            <div class="imageBlock">
                <img src="../assets/images/wellness/aboutImg.png" alt="massagists">
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
    .Massage{
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
                    z-index: 4;
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
                .colorTitle{
                    color: var(--color-gold);
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
                .description{
                    color: var(--color-white);
                    font-family: var(--font-text-reg);
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 150%; /* 30px */
                }
                .PrimaryButton{
                    max-width: 180px;
                }
            }
        }
        .infoBlock{
            margin: 60px;
            display: flex;
            justify-content: space-between;
            align-items: stretch;
            gap: 20px;
            .infoCard{
                width: -webkit-fill-available;
                padding: 40px 60px;
                background: var(--color-white);
                h3{
                    color: var(--color-black);
                    font-family: var(--font-text-reg);
                    font-size: 28px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 130%; /* 36.4px */
                    text-transform: uppercase;
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
                            color: var(--color-black);
                            font-family: var(--font-text-reg);
                            font-size: 20px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 150%; /* 30px */
                        }
                    }
                }

            }
        }
        .aboutMassage{
            margin-inline: 60px;
            margin-bottom: 70px;
            background: var(--color-white);
            padding: 60px;
            .preTitle{
                color: var(--color-gold);
                font-family: var(--font-text-reg);
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: 150%; /* 21px */
                text-transform: uppercase;
            }
            .title{
                margin: 8px 0 32px;
                color: var(--color-black);
                /* [desk]/H2 */
                font-family: var(--font-text-reg);
                font-size: 40px;
                font-style: normal;
                font-weight: 500;
                line-height: 120%; /* 48px */
                text-transform: uppercase;
            }
            .description{
                color: var(--color-black);
                font-family: var(--font-text-reg);
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%; /* 30px */
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
        .ourSpecialist{
            padding: 40px;
            margin: 70px 60px;
            background: var(--color-white);
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 40px;
            .infoBlock{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                margin: 0;
                max-width: 50%;

                h3{
                    color: var(--color-gold);
                    font-family: var(--font-text-reg);
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 150%; /* 21px */
                    text-transform: uppercase;
                }
                h2{
                    color: var(--color-black);
                    font-family: var(--font-text-reg);
                    font-size: 40px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 120%; /* 48px */
                    text-transform: uppercase;
                }
                p{
                    color: var(--color-black);
                    font-family: var(--font-text-reg);
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 150%; /* 30px */
                }
            }
            .imageBlock{
                overflow: hidden;
                position: relative;
                img{
                    width: 100%;
                }
            }
        }
    }
</style>
