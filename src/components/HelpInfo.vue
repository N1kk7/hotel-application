<template>
    <div class="contactPopup">
            <div class="item">
                <div class="avatar">
                    <img src="../assets/images/home-page/person.png" alt="person">
                    <div class="onlinePin"></div>
                </div>
                <span>
                    We can help you with any questions or information
                </span>
            </div>
            <div class="item">
                <div class="mail">
                    <SvgIcon name="envelope" size="medium"/>
                    <span>
                        stay@kings-palace.com
                    </span>
                </div>
                <PrimaryButton buttonText="contact"/>
            </div>
        </div>
</template>

<script>
import PrimaryButton from '@/components/Buttons/PrimaryButton.vue';

export default {
  name: 'HelpInfo',
  components: {
    PrimaryButton,
  },
};
</script>

<style scoped lang="scss">
    @import '@/style/mixins.scss';
.contactPopup{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 80vw;
            background: var(--color-white);
            padding: 40px;
            position: absolute;
            bottom: -20px;
            .item{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 5px;
                .avatar{
                    position: relative;
                    width: fit-content;
                    margin-right: 35px;
                    img{
                        width: 64px;
                        height: 64px;
                        border-radius: 50%;
                    }
                    .onlinePin{
                        width: 10px;
                        height: 10px;
                        background: green;
                        border-radius: 50%;
                        position: absolute;
                        bottom: 10px;
                        right: 5px;
                    }
                }
                .mail{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 5px;
                }
                span{
                    @include text(#3F3F3F, 20px, unset, 400);
                }
            }
        }
    @media (max-width: 768px) {
        .contactPopup{
            flex-direction: column;
            margin-inline: auto;
            border-radius: 10px;
            position: relative;
            width: 80vw;
            gap: 10px;
            span{
                        text-align: center;
                    }
            .item{
                flex-direction: column;
                gap: 10px;
                .avatar{
                    margin-right: 0;
                }
                button{
                    width: -webkit-fill-available;
                }
            }
        }
    }
</style>
