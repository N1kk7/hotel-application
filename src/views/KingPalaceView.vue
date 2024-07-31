<template>
    <div class="Page KingPalace">
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
@import '@/style/mixins.scss';
@import '@/style/main.scss';
    .KingPalace{
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
        .pageBlock{
            padding: 60px;
            margin: 60px;
            background: var(--color-white);
            display: flex;
            flex-direction: column;
            gap: 40px;
            h2{
                @include text(var(--color-black), 40px, uppercase, 500);
            }
            p{
                @include text(#454545, 20px, unset, 400);
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
                        @include text(var(--color-black), 30px, uppercase, 500);
                        padding: 22px 0;
                    }
                    p{
                        @include text(#454545, 21px, unset, 400);
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
