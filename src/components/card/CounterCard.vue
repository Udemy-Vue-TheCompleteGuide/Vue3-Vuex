<template>
  <BaseCard class="w-100">
    <h3 class="card-title">Counter</h3>
    <p class="card-text">Counter Value: <span>{{ counterCounter }}</span></p>
    <div>
      <button class="btn btn-success" style="margin-right: 5px;" @click="addOne">Add One</button>
      <button class="btn btn-danger" @click="subtractOne">Subtract One</button>
    </div>
  </BaseCard>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import BaseCard from '@/components/card/BaseCard.vue';
import { COUNTER_ADD_ONE, COUNTER_SUBTRACT_ONE } from '@/store/storeTypes/action_types';
import { COUNTER_GETCOUNTER } from '@/store/storeTypes/getter_types';

export default {
  name: 'CounterCard',
  components: { BaseCard },
  computed: {
    ...mapState({
      rootCounter: (state) => state.counter,
    }),
    ...mapState({
      counterCounter: (state) => state.counter.counter,
    }),
    ...mapGetters({
      getCounter: COUNTER_GETCOUNTER,
    }),
  },
  methods: {
    ...mapActions({
      addOne: COUNTER_ADD_ONE,
      subtractOne: COUNTER_SUBTRACT_ONE,
    }),
  },
};
</script>

<style scoped>

</style>
