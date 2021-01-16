<template>
  <div class="container-sm w-50">
    <Navigation class="mb-5"></Navigation>
    <CounterCard></CounterCard>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import CounterCard from '@/components/card/CounterCard.vue';

export default {
  name: 'App',
  components: {
    CounterCard,
    Navigation,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
