<template>
    <span class="distance">
        <span class="meters">
            {{ distance }}
        </span>
        <span class="description">
            {{ meters }}
        </span>
    </span>
</template>

<script>
export default {
  name: 'DistanceComponent',
  props: {
    distance: {
      type: String,
      require: true,
    },
    meters: {
      type: String,
      require: true,
    },
  },
};
</script>

<style scoped lang="scss">
    .distance{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 2px solid #D7B154;
        border-radius: 10px;
        padding: 5px;
        color: #D7B154;
        max-width: fit-content;
        .meters{
            text-align: center;
            font-family: var(--font-text-reg);
            font-size: 15px;
            font-style: normal;
            font-weight: 700;
            line-height: 100%; /* 20px */
            color: #D7B154;
        }
        .description{
        font-family: var(--font-text-reg);
        font-size: 13px;
        font-style: normal;
        font-weight: 600;
        line-height: 100%; /* 12px */
        color: #D7B154;
        }
    }

</style>
