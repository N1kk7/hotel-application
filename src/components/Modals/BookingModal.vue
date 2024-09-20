<!-- eslint-disable vue/no-unused-vars -->
<template>
    <div class="Modal">
        <div class="ModalWrapper">
            <div class="ModalTop">
                <div class="closeBtn">
                    <SvgIcon
                        name="closeBurger"
                        size="small"
                        @click="closeModal"
                    />
                </div>
            </div>
            <div class="ModalContent">
                <div class="section">
                    <div class="optionsWrapper">
                        <div class="option">
                            <div
                              :class="{head: true, headActive: roomTypeState}"
                              @click="manageHeaderOptions('roomType', 'active')"
                              @blur="manageHeaderOptions('roomType', 'close')"
                              @keydown="none"
                            >
                              <span>
                                Room type:

                              </span>
                              <span class="accentText">{{ roomType }}</span>
                              <SvgIcon name="arrowDown" size="medium"/>
                            </div>
                            <ul :class="{subList: true, activeSubList: roomTypeState}" >
                              <li
                                @click="manageHeaderOptions('roomType', 'close'),
                                setRoomType('Luxury')"
                                @keydown="none"
                              >
                                <span>
                                  Luxury
                                </span>
                              </li>
                              <li
                                @click="manageHeaderOptions('roomType', 'close'),
                                setRoomType('Deluxe')"
                                @keydown="none"
                              >
                                <span>
                                  Deluxe
                                </span>
                              </li>
                              <li
                                @click="manageHeaderOptions('roomType', 'close'),
                                setRoomType('Comfort')"
                                @keydown="none"
                              >
                                <span>
                                  Comfort
                                </span>
                              </li>
                              <li
                                @click="manageHeaderOptions('roomType', 'close'),
                                setRoomType('Everybody')"
                                @keydown="none"
                              >
                                <span>
                                  Everybody
                                </span>
                              </li>
                              <li
                                @click="manageHeaderOptions('roomType', 'close'),
                                setRoomType('Basic')"
                                @keydown="none"
                              >
                                <span>
                                  Basic
                                </span>
                              </li>
                            </ul>
                        </div>
                        <div class="checkOption option">
                            <span>
                                Check In:
                            </span>
                            <!-- <span class="checkDate" v-if="checkInDate">
                              {{ checkInDate }}
                            </span> -->
                        </div>
                        <div class="checkOption option">
                            <span>
                                Check Out:
                            </span>
                            <!-- <span class="checkDate" v-if="checkOutDate">
                              {{ checkOutDate }}
                            </span> -->
                        </div>
                        <div class="option">
                          <div
                            :class="{head: true, headActive: headServicesState}"
                            @click="manageHeaderOptions('servicesHead', 'active')"
                            @blur="manageHeaderOptions('servicesHead', 'close')"
                            @keydown="none"
                          >
                            <span>
                                Additional
                                <span class="accentText">
                                  services:

                                </span>
                            </span>
                            <SvgIcon name="arrowDown" size="medium"/>

                          </div>
                          <ul :class="{subList: true, activeSubList: headServicesState}" >
                              <li
                                v-for="(service, index) in services"
                                :key="index"
                                @click="toggleCheckMark(index)"
                                @keydown="none"
                                class="servicesItem"
                              >
                                <span>
                                  {{ service.name }}
                                <!-- :class="{ checked: service.checked }" -->
                                </span>
                                <div v-if="service.checked">
                                  <SvgIcon
                                    name="checkMark"
                                    strokeWidth="0"
                                    size="micro"
                                    fill="var(--color-gold)"
                                    stroke="var(--color-gold)"
                                  />
                                </div>
                              </li>
                              <li class="listButtons">
                                <TertiaryButton buttonText="cancel" textColor="white"
                                class="cancelBtn"
                                @click="resetCheckMarks"
                              />
                                <SecondaryButton buttonText="confirm"
                                  textColor="white"
                                  @click="manageHeaderOptions('servicesHead', 'close')"
                                />
                              </li>
                            </ul>
                        </div>
                    </div>
                    <div class="subOptions">
                      <div class="item">
                        <span>
                          Price per night: &nbsp;
                        </span>
                        <span class="textAccent">
                          {{ pricePerNight }}
                        </span>
                      </div>
                      <div class="item">
                        <span class="checkDate" v-if="checkInDate">
                          {{ checkInDate }}
                        </span>
                      </div>
                      <div class="item">
                        <span class="checkDate" v-if="checkOutDate">
                          {{ checkOutDate }}
                        </span>
                      </div>
                      <div class="item">
                        <span>
                          Total price:
                        </span>
                        <span class="textAccent">
                          {{ totalPrice}}
                        </span>
                      </div>
                    </div>
                    <div class="calendar">
                        <div class="calendarWrapper">
                            <Calendar
                                v-model:selection="selectedDates"
                                :attributes="calendarAttributes"
                                @update:pages="onMonthChanged"
                            >
                              <template v-slot:day-content="{ day, attributes }">
                                <div class="dayContent" @click="handleDayClick(day)"

                                :class="getDayClass(attributes)"
                                @keydown="none">
                                  <!-- <div>{{ console.log(attributes[1]) }}

                                :class="attributes.customData?.cssClass"

                                  </div> -->
                                  <div class="dayLabel">
                                    {{ day.label }}
                                  </div>

                                  <div
                                    v-for="attr in attributes"
                                    :key="attr.dates.toString()"
                                    class="roomAvailable"
                                  >
                                      <span class="description">
                                          Available rooms:
                                      </span>
                                      <span :style="{color: attr.customData.color}">
                                          {{attr.customData.freeRooms}}
                                      </span>
                                  </div>

                                </div>
                              </template>
                            </Calendar>
                        </div>
                    </div>
                    <div class="sumInformation">
                        <div class="information">

                        </div>
                        <div class="resetDateBtn">
                          <TertiaryButton
                            buttonText="reset dates"
                            textColor="white"
                            @click="resetDates"
                          />
                        </div>
                        <div class="orderBtn">
                            <SecondaryButton buttonText="order room"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import useModalStore from '@/store/useModalStore';
import SvgIcon from '@/components/SvgIcon.vue';
import { Calendar } from 'v-calendar';
// import { debounce } from 'lodash';
import 'v-calendar/style.css';
import {
  computed, ref, onMounted, watch,
} from 'vue';
import SecondaryButton from '../Buttons/SecondaryButton.vue';
import TertiaryButton from '../Buttons/TertiaryButton.vue';

export default {
  name: 'BookingModal',
  components: {
    SvgIcon,
    SecondaryButton,
    TertiaryButton,
    // DatePicker,
    Calendar,
  },
  setup() {
    const modalStore = useModalStore();
    const selectedDate = ref(new Date());
    const checkInDate = ref(null);
    const checkOutDate = ref(null);
    const roomTypeState = ref(false);
    const headServicesState = ref(false);
    // const headTypeState = ref(false);
    const roomType = ref('Luxury');
    const calendarAttributes = ref([]);

    // Date
    const currentMonth = ref(null);
    const currentYear = ref(null);
    const daysInMonth = ref([]);

    const totalPrice = ref(0);
    const pricePerNight = ref(0);

    // Services
    const services = ref([
      { name: 'Airport transfer', checked: false },
      { name: 'Rent a car', checked: false },
      { name: 'Early check-in', checked: false },
      { name: 'Late checkout', checked: false },
      { name: 'Laundary service', checked: false },
      { name: 'Pets allowed', checked: false },
    ]);

    const toggleCheckMark = (index) => {
      services.value[index].checked = !services.value[index].checked;
    };

    const manageHeaderOptions = (option, func) => {
      switch (option) {
        case 'roomType':
          if (func === 'active') {
            roomTypeState.value = true;
            headServicesState.value = false;
          } else {
            roomTypeState.value = false;
          }
          break;
        case 'servicesHead':
          if (func === 'active') {
            headServicesState.value = true;
            roomTypeState.value = false;
          } else {
            headServicesState.value = false;
          }
          break;
        default:
          break;
      }
    };

    const resetCheckMarks = () => {
      manageHeaderOptions('servicesHead', 'close');
      services.value = services.value.map((element) => ({
        ...element,
        checked: false,
      }));
    };

    const closeModal = () => {
      modalStore.setBookingModal(false);
    };

    const selectedDates = computed(() => ({
      start: checkInDate.value,
      end: checkOutDate.value,
    }));

    const attributes = computed(() => {
      const attrs = [];
      if (checkInDate.value && checkOutDate.value) {
        attrs.push({
          key: 'highlight-range',
          highlight: true,
          dates: [checkInDate.value, checkOutDate.value],
          style: {
            backgroundColor: '#d0e',
            borderRadius: '0.5rem',
            opacity: 0.5,
          },
        });
      }
      return attrs;
    });

    const handleDayClick = (day) => {
    //   const clickedDay = document
    // getElementsByClassName(`id-${day.id}`)[0].childNodes[2].querySelector('.roomAvailable');

      if (checkInDate.value && checkOutDate.value) {
        return;
      }

      if (!checkInDate.value || (checkInDate.value && checkOutDate.value)) {
        // clickedDay.remove();

        checkInDate.value = day.id;
        checkOutDate.value = null;

        // let roomVariable;
        // let colorVariable;

        // calendarAttributes.value.forEach((elem, index) => {
        //   if (index === +day.label - 1) {
        //     roomVariable = elem.customData.freeRooms;
        //     colorVariable = elem.customData.color;
        //   }
        // });

        calendarAttributes.value.push({
          key: 'selected-start',
          dates: checkInDate.value,
          customData: {
            // freeRooms: roomVariable,
            // color: colorVariable,
            cssClass: 'selectedDate',
          },
        });
      } else if (day.id > checkInDate.value) {
        const reservedDay = +day.id.slice(-2) - +checkInDate.value.slice(-2) + 1;
        totalPrice.value = reservedDay * pricePerNight.value;
        checkOutDate.value = day.id;

        calendarAttributes.value.push({
          key: 'selected-range',
          dates: { start: checkInDate.value, end: checkOutDate.value },
          customData: { cssClass: 'selectedDateRange' },
        });
      } else {
        checkInDate.value = day.id;
        checkOutDate.value = null;

        calendarAttributes.value.push({
          key: 'selected-start',
          dates: checkInDate.value,
          customData: { cssClass: 'selectedDate' },
        });
      }
    };

    const getDayClass = (attribute) => {
      const attr = attribute.find((el) => el.customData?.cssClass);
      return attr ? attr.customData.cssClass : '';
    };

    const resetDates = () => {
      checkInDate.value = null;
      checkOutDate.value = null;
      calendarAttributes.value = calendarAttributes.value.filter((attr) => !['selectedDate', 'selectedDateRange'].includes(attr.customData?.cssClass));
    };

    const getAvailableRoom = async (roomCategory, monthDays) => {
      const occupiedColors = (color) => {
        switch (color) {
          case 1:
            return 'rgba(255, 0, 0, 0.9) ';
          case 2:
            return 'rgba(230, 57, 0, 0.9)';
          case 3:
            return 'rgba(255, 128, 0, 0.8)';
          case 4:
            return 'rgba(255, 179, 26, 0.8)';
          case 5:
            return 'rgba(255, 221, 51, 0.8)';
          case 6:
            return 'rgba(255, 255, 77, 0.8)';
          case 7:
            return 'rgba(153, 255, 51, 0.8)';
          case 8:
            return 'rgba(102, 255, 26, 0.8) ';
          case 9:
            return 'rgba(0, 255, 0, 0.8)';
          case 10:
            return 'rgba(26, 255, 83, 0.8) ';
          case 11:
            return 'rgba(51, 255, 153, 0.8)';
          default:
            return 'transparent';
        }
      };
      try {
        const response = await fetch('https://secret-eyrie-79076-8d2c9b054b1f.herokuapp.com/api/rooms', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          // body: JSON.stringify({
          // checkInDate: checkInDate.value,
          // checkOutDate: checkOutDate.value,
          // }),
        });
        const data = await response.json();

        const responseResult = data.filter(
          (item) => item.type.includes(roomCategory.toLowerCase()),
        );

        pricePerNight.value = responseResult[0].pricePerNight;

        const roomAvailibilityCalendar = responseResult[0].availabilityCalendar;

        const updateCalendarAttributes = (day, roomData) => {
          const existingEntryIndex = calendarAttributes.value.findIndex(
            (attr) => attr.dates.getTime() === day.getTime(),
          );

          const attribute = {
            dates: day,
            // bar: {
            //   style: {
            //     backgroundColor: occupiedColors(roomData),
            //   },
            // },
            customData: {
              freeRooms: roomData,
              color: occupiedColors(roomData),
              cssClass: '',
            },
          };

          if (existingEntryIndex > -1) {
            calendarAttributes.value[existingEntryIndex] = attribute;
          } else {
            calendarAttributes.value.push(attribute);
          }
        };

        monthDays.forEach((day) => {
          const formateDay = day.toLocaleDateString('en-CA');

          if (roomAvailibilityCalendar[formateDay]) {
            const availableRoom = roomAvailibilityCalendar[formateDay].availableRooms;

            updateCalendarAttributes(day, availableRoom);
          } else {
            updateCalendarAttributes(day, 10);
          }
        });
      } catch (e) {
        console.log(e, 'from error');
      }
    };

    const getDaysInMonth = (month, year) => {
      const days = [];
      const lastDay = new Date(year, month + 1, 0).getDate();

      for (let day = 1; day <= lastDay; day += 1) {
        days.push(new Date(year, month, day));
      }

      return days;
    };

    const setRoomType = (value) => {
      roomType.value = value;
      getAvailableRoom(roomType.value, daysInMonth.value);
    };

    watch([currentMonth, currentYear], ([newMonth, newYear]) => {
      if (newMonth !== null && newYear !== null) {
        // calendarAttributes.value = [];
        daysInMonth.value = getDaysInMonth(newMonth, newYear);

        getAvailableRoom(roomType.value, daysInMonth.value);
      }
    });

    const onMonthChanged = (args) => {
      currentYear.value = args[0].year;
      currentMonth.value = args[0].month - 1;

      // getAvailableRoom(roomType.value, numDays);
    };

    onMounted(() => {

      // currentMonth.value = new Date().getMonth();
      // currentYear.value = new Date().getFullYear();
    });

    return {
      getDaysInMonth,
      closeModal,
      selectedDate,
      handleDayClick,
      checkInDate,
      checkOutDate,
      selectedDates,
      attributes,
      getAvailableRoom,
      roomTypeState,
      manageHeaderOptions,
      headServicesState,
      setRoomType,
      roomType,
      calendarAttributes,
      currentMonth,
      currentYear,
      daysInMonth,
      onMonthChanged,
      services,
      toggleCheckMark,
      resetCheckMarks,
      resetDates,
      getDayClass,
      totalPrice,
      pricePerNight,

    };
  },
};
</script>

<style lang="scss">
    @import '@/style/mixins.scss';

    .Modal{
        @include modalBlock;
        .optionsWrapper{
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            .option{
              position: relative;
            }
            .head{
              display: flex;
              justify-content: space-between;
              align-items: center;
              cursor: pointer;
              border: 1px solid transparent;
              padding: 5px 10px;
              gap: 5px;
              transition: all ease 0.1s;
              .accentText{
                color: var(--color-gold);
              }
            }
            .headActive{
                background-color: var(--color-black);
                border: 1px solid var(--color-gold);
                border-radius: 5px;
                transition: all ease 0.3s;

              }
            .subList{
              display: flex;
              flex-direction: column;
              background-color: rgba(0, 0, 0, 0.8);
              width: 100%;
              height: 0;
              position: absolute;
              z-index: 2;
              overflow: hidden;
              transition: all ease 0.1s;
            }
            .activeSubList{
                transition: all ease 0.3s;
                border: 1px solid var(--color-gold);
                border-top: none;
                height: auto;
                padding: 10px;
                gap: 5px;
                li{
                  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                  transition: all ease 0.3s;
                  padding-inline: 5px;
                  cursor: pointer;
                  span{
                    @include text(var(--color-white), clamp(14px, 1.5vw, 20px), unset, 400);

                  }
                  @media screen and (min-width: 1024px) {
                    &:hover{
                      transition: all ease 0.3s;
                      background-color: rgba(255, 255, 255, 0.2);
                      span{
                        color: var(--color-gold);

                      }
                    }
                  }
                }
                .servicesItem{
                  display: flex;
                  align-items: center;
                  justify-content: space-between
                }
                .listButtons{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 10px;
                    .cancelBtn{
                      border: 1px solid var(--color-white);
                    }
                    button{
                      padding: 0;
                      width: -webkit-fill-available;
                      border: 1px solid var(--color-gold);
                      @media screen and (min-width: 1024px) {
                        &:hover{
                          border: 1px solid var(--color-gold);
                        }
                      }
                    }
                    @media screen and (min-width: 1024px) {
                      &:hover{
                        background: transparent;
                        span{
                          color: white;
                        }
                      }
                    }
                  }
            }
            span{
              @include text(var(--color-white), clamp(14px, 2.3vw, 20px), unset, 600);
            }
        }
        .subOptions{
          display: flex;
          align-items: center;
          justify-content: space-around;
          position: relative;
          .item{
            padding: 5px 10px;
            span{
              @include text(var(--color-white), clamp(14px, 2.3vw, 20px), unset, 600);
            }
            .textAccent{
              color: var(--color-gold);
            }
            .checkDate{
                padding: 5px 10px;
                background: rgba(0,0,0, 0.75);
                border: 1px solid var(--color-gold);
                border-radius: 5px;
                @include text(var(--color-white), clamp(8px, 1vw, 14px), unset, 500);
              }
          }
        }
        .calendar{
          margin: 20px 0 20px;
          .vc-arrow{
            // button{
            border: 1px solid var(--color-gold);
              &:hover{
                background: unset;
              }
              svg{
                stroke: var(--color-gold);

              }
            // }
          }
              .calendarWrapper{
                display: flex;
                align-items: baseline;
                justify-content: center;
                .vc-container{
                  .vc-title-wrapper{
                    span{
                      color: var(--color-white);
                      font-size: clamp(14px, 2vw, 18px);
                    }
                  }
                  width: 90%;
                  // height: 30vh;
                  // min-height: fit-content;
                  background: rgba(0, 0, 0, 0.75);
                  .vc-day{
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    position: relative;
                    height: 4.5vw;
                    overflow: hidden;
                    cursor: pointer;
                    transition: all ease 0.3s;

                    @media screen and (min-width: 1024px) {
                      &:hover{
                        background-color: rgba(255,255,255, 0.15);
                        transition: all ease 0.3s;
                      }
                    }

                    .dayContent{
                      width: 100%;
                      height: 100%;
                      .dayLabel{
                        text-align: end;
                        padding: clamp(2px, 0.2vw, 5px) clamp(5px, 0.2vw, 10px) 0 0;
                        @include text(var(--color-gold), clamp(8px, 1.2vw, 22px), uppercase, 400);
                      }
                      .roomAvailable{
                        display: flex;
                        justify-content: flex-start;
                        align-items: end;
                        gap: clamp(2px, 0.3vw, 10px);
                        border-bottom: 1px solid var(--color-gold);
                        padding-bottom: 5px;
                        position: absolute;
                        bottom: 3px;
                        left: 3px;
                        @include text(var(--color-white), clamp(2px, 1vw, 16px), unset, 400);
                        span{
                          line-height: 110%;
                        }
                        .description{
                          white-space: wrap;
                          max-width: min-content;
                        }
                      }
                    }
                    .selectedDate, .selectedDateRange{
                      border: 1px solid var(--color-gold);
                      // border-right: transparent;
                      background: rgba(255,255,255, 0.15)
                    }
                  }
                  // .vc-bars{
                  //   width: 100%;
                  //   position: relative;
                  //   bottom: 1px;
                  // }
                }
              }
            }
            .sumInformation{
              display: flex;
              align-items: center;
              justify-content: flex-end;
              gap: 20px;
            }
    }
</style>
