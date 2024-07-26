<template>
    <div class="KingPalace">
        <div class="main">
            <img
                src="../assets/images/king-palace/mainBg.png"
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
                        king-palace
                    </span>
                </div>
                <h1 class="colorTitle">King </h1>
                <h1>
                    Palace
                </h1>
            </div>
        </div>
        <div class="pageBlock">
            <h1 style="background-color: red;">OLOLO TAG HERE</h1>
            <h2>
                nearby tourist attractionS and activities
            </h2>
            <p>
                For your convenience, we have a selection of trusted tourist attractions nearby.
            </p>
            <div class="blockWrapper">
                <div class="item">
                    <img src="../assets/images/king-palace/item1.png" alt="services">
                    <h4 class="nameBlock">
                        Sports Facilities IN TACHOV

                    </h4>
                    <p>
                        Ideal for training and recreational sports.
                    </p>
                </div>
                <div class="item">
                    <img src="../assets/images/king-palace/item2.png" alt="services">
                    <h4 class="nameBlock">
                        Světce RIDING HALL

                    </h4>
                    <p>
                        A national cultural monument and the second
                        largest riding hall in Central Europe.
                    </p>
                </div>
                <div class="item">
                    <img src="../assets/images/king-palace/item3.png" alt="services">
                    <h4 class="nameBlock">
                        Přimda castle

                    </h4>
                    <p>
                        Ruins of the oldest known Czech stone castle.
                    </p>
                </div>
                <div class="item">
                    <img src="../assets/images/king-palace/item4.png" alt="services">
                    <h4 class="nameBlock">
                        Gotcha Spielfeld

                    </h4>
                    <p>
                        Europe's most important paintball arena.
                    </p>
                </div>
                <div class="item">
                    <img src="../assets/images/king-palace/item5.png" alt="services">
                    <h4 class="nameBlock">
                        PLEYSTEIN

                    </h4>
                    <p>
                        Ruins of the oldest known Czech stone castle.
                    </p>
                </div>
                <div class="item">
                    <img src="../assets/images/king-palace/item6.png" alt="services">
                    <h4 class="nameBlock">
                        TACHOV

                    </h4>
                    <p>
                        Europe's most important paintball arena.
                    </p>
                </div>
                <div class="item">
                    <img src="../assets/images/king-palace/item7.png" alt="services">
                    <h4 class="nameBlock">
                        WAIDHAUS

                    </h4>
                    <p>
                        Ruins of the oldest known Czech stone castle.
                    </p>
                </div>
                <div class="item">
                    <img src="../assets/images/king-palace/item8.png" alt="services">
                    <h4 class="nameBlock">
                        PŘIMDA

                    </h4>
                    <p>
                        Europe's most important paintball arena.
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
  name: 'King-palace',
  components: {
    SvgIcon,
  },
};
</script>

<style scoped lang="scss">
    .KingPalace{
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
            }
        }
        .pageBlock{
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
            .blockWrapper{
                display: grid;
                grid-template-columns: 1fr 1fr;
                column-gap: 40px;
                row-gap: 60px;
                .item{
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
    @media (max-width: 768px) {
        .KingPalace{
            .pageBlock {
                padding: 30px;
                margin: 30px;
                gap: 20px;

                h2 {
                font-size: 30px;
                }

                p {
                font-size: 18px;
                }

                .blockWrapper {
                grid-template-columns: 1fr;
                }
            }
        }
    }
    @media (max-width: 468px) {
        .KingPalace{
            .pageBlock {
                padding: 20px;
                margin: 20px;
                gap: 15px;

                h2 {
                font-size: 25px;
                }

                p {
                font-size: 16px;
                }

                .blockWrapper {
                grid-template-columns: 1fr;
                }
            }
        }
    }
    @media (max-width: 320px) {
        .KingPalace{
            .pageBlock {
                padding: 10px;
                margin: 10px;
                gap: 10px;

                h2 {
                font-size: 20px;
                }

                p {
                font-size: 14px;
                }

                .blockWrapper {
                grid-template-columns: 1fr;
                }
            }
        }
    }

</style>
