<template>
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Vue 3 with Vuex 3</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!-- no link navigation -->
        </ul>
        <UserAuth></UserAuth>
      </div>
    </div>
  </nav>
</template>

<script>
import UserAuth from '@/components/UserAuth.vue';

export default {
  name: 'Navigation',
  components: {
    UserAuth,
  },
};
</script>

<style scoped>

</style>
