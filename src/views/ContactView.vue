<template>
    <div class="Contact">
        <div class="main">
            <img
                src="../assets/images/contact/mainBg.png"
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
                            contact
                        </span>
                    </router-link>
                </div>
                <h1>
                    Contact us
                </h1>
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
                        <SvgIcon name="location" size="small"/>
                        <div class="openingDescription">
                            <span>
                                King's Palace, Rozvadov 7, Entrance 2, Rozvadov,
                                Plzeňský kraj, Czech Republic
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
        <div class="map">
            <h3>Map</h3>

            <div class="topBlock">
                <div class="title">
                    <h2>
                        Rooms
                    </h2>
                    <h2>
                        RESERVATION
                    </h2>
                </div>
                <div class="topInfo">
                    <span>
                        Opening hours: 08:00 - 16:00
                    </span>
                    <AdditionalBtn buttonText="open in google maps"/>
                </div>
            </div>
            <div class="mapImg">
                <img src="../assets/images/contact/map.png" alt="map">
            </div>
        </div>
        <div class="journeyPlan">
            <h2>
                PLAN YOUR JOURNEY
            </h2>
            <div class="items">
                <div class="item">
                    <div class="icon">
                        <SvgIcon name="car" size="medium"/>
                    </div>
                    <h3>
                        BY CAR
                    </h3>
                    <p>
                        From Prague: 90 min via D5/E50; from Munich: take A9,
                        A93 and then A6 to D5/E50.
                    </p>
                </div>
                <div class="item">
                    <div class="icon">
                        <SvgIcon name="airplane" size="medium"/>
                    </div>
                    <h3>
                        BY PLANE
                    </h3>
                    <p>
                        Take a flight to Prague, Nuremberg or Munich,
                        and then travel by car or with King's shuttle.
                    </p>
                </div>
                <div class="item">
                    <div class="icon">
                        <SvgIcon name="train" size="medium"/>
                    </div>
                    <h3>
                        BY TRAIN
                    </h3>
                    <p>
                        Travel to Planá, Stříbro, Mariánské Lázně,
                        Weiden or Wernberg and further on with King's shuttle.
                    </p>
                </div>
            </div>
        </div>
        <div class="transferBlock">
            <img src="../assets/images/contact/transfer.png" alt="transfer">
            <div class="transferInfo">
                <div class="title">
                    <h2>
                        KING'S TRANSPORT
                    </h2>
                    <h2 class="colorText">
                        SERVICE
                    </h2>
                    <p>
                        Convenient transportation to and from the King's
                        Palace for travelers from European countries
                    </p>
                </div>
                <div class="contacts">
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
                                +420 777 281 804
                            </span>
                        </li>
                        <li>
                            <SvgIcon name="whatsup" size="medium"/>
                            <SvgIcon name="viber" size="medium"/>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </div>

</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue';
import PrimaryButton from '@/components/Buttons/PrimaryButton.vue';
import AdditionalBtn from '@/components/Buttons/AdditionalBtn.vue';

export default {
  name: 'MassagesView',
  components: {
    SvgIcon,
    PrimaryButton,
    AdditionalBtn,
  },
};
</script>

<style scoped lang="scss">
    .Contact{
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
        .map{
            margin: 60px;
            padding: 60px;
            background: var(--color-white);
            display: flex;
            flex-direction: column;
            position: relative;
            h3{
                color: var(--color-gold);
                font-family: var(--font-text-reg);
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: 150%; /* 21px */
                text-transform: uppercase;
            }
            .topBlock{
                position: absolute;
                top: 30px;
                left: 0;
                margin: 60px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: -webkit-fill-available;
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
                .topInfo{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    gap: 30px;
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
            .mapImg{
                text-align: center;
            }
        }
        .journeyPlan{
            margin: 60px;
            padding: 60px;
            background: var(--color-white);
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
            .items{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 60px;
                gap: 40px;
                .item{
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    .icon{
                        svg{
                            border: 1px solid var(--color-gold);
                            border-radius: 50%;
                            padding: 10px;
                        }
                    }
                    h3{
                        color: var(--color-black);
                        font-family: var(--font-text-reg);
                        font-size: 28px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 130%; /* 36.4px */
                        text-transform: uppercase;
                    }
                    p{
                        color: #3F3F3F;
                        font-family: var(--font-text-reg);
                        font-size: 20px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 150%; /* 30px */
                    }
                }
            }
        }
        .transferBlock{
            margin: 60px;
            padding: 60px;
            background: var(--color-white);
            display: flex;
            justify-content: space-between;
            align-items: stretch;
            position: relative;
            gap: 40px;
            img{
                min-width: 50%;
            }
            .transferInfo{
                display: flex;
                flex-direction: column;
                position: relative;
                justify-content: space-between;
                // align-items: stretch;
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
                .colorText{
                    color: var(--color-gold);
                }
                p{
                    margin-top: clamp(20px, 3vw, 40px);
                    color: #3F3F3F;
                    font-family: var(--font-text-reg);
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 150%; /* 30px */
                }
                .contacts{
                    h3{
                        color: var(--color-gold);
                        font-family: var(--font-text-reg);
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 150%; /* 21px */
                        text-transform: uppercase;
                    }
                    ul{
                        list-style-type: none;
                        padding: 0;
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                        li{
                            display: flex;
                            align-items: center;
                            justify-content: flex-start;
                            gap: 10px;
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
        }
    }
</style>
