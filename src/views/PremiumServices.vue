<template>
   <div class="Page Services">
        <div class="main">
            <img
                src="../assets/images/premium-services/main.png"
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
                        premium-services
                    </span>
                </div>
                <h1 class="colorTitle">Premium </h1>
                <h1>
                    Services
                </h1>
            </div>
        </div>
        <div class="golfClubs">
            <h2>
                Available Services
            </h2>
            <p>
                Our team is always ready to provide a range of special services:
                do not hesitate to contact us.
            </p>
            <div class="clubsWrapper">
                <div class="club">
                    <img src="../assets/images/premium-services/serv1.png" alt="services">
                    <h4 class="nameClub">
                        Airport Transfer

                    </h4>
                    <p>
                        We will drive you home safely and on time
                    </p>
                </div>
                <div class="club">
                    <img src="../assets/images/premium-services/serv2.png" alt="services">
                    <h4 class="nameClub">
                        Rent a car

                    </h4>
                    <p>
                        We will help you with your car rental
                    </p>
                </div>
                <div class="club">
                    <img src="../assets/images/premium-services/serv3.png" alt="services">
                    <h4 class="nameClub">
                        Early Check-In

                    </h4>
                    <p>
                        Early check-in upon availability
                    </p>
                </div>
                <div class="club">
                    <img src="../assets/images/premium-services/serv4.png" alt="services">
                    <h4 class="nameClub">
                        Laundry Service

                    </h4>
                    <p>
                        Laundry Service
                    </p>
                </div>
            </div>
            <PrimaryButton buttonText="more golf clubs"/>
        </div>
   </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue';

export default {
  name: 'Premium-services',
  components: {
    SvgIcon,
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
           .mainImage{
            @include mainBg;
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
                font-family: var(--font-text-reg);
                font-size: 40px;
                font-style: normal;
                font-weight: 500;
                line-height: 120%;
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
    }
    @media screen and (max-width: 768px) {
        .Services{
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
        }
    }
    @media (max-width: 480px) {
        .Services{
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
        }
    }
    @media (max-width: 320px) {
        .Services{
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
        }
    }
</style>
