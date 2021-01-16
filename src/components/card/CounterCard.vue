<template>
  <BaseCard class="w-100">
    <h3 class="card-title">Counter</h3>
    <p class="card-text">Counter Value: <span>{{ counter }}</span></p>
    <div>
      <button class="btn btn-success" style="margin-right: 5px;" @click="addOne">Add One</button>
      <button class="btn btn-danger" @click="subtractOne">Subtract One</button>
    </div>
  </BaseCard>
</template>

<script>
import BaseCard from '@/components/card/BaseCard.vue';

import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'CounterCard',
  components: { BaseCard },
  computed: {
    ...mapState(['counter']),
    ...mapGetters({
      getCounter: 'getCounter',
    }),
  },
  methods: {
    ...mapActions({
      addOne: 'addOne',
      subtractOne: 'subtractOne',
    }),
  },
};
</script>

<style scoped>

</style>
