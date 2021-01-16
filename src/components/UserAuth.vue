<template>
  <div>
    <button class="btn link-dark" v-if="!isAuthenticated" @click="login">Login</button>
    <button class="btn link-dark" v-if="isAuthenticated" @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'UserAuth',
  data() {
    return {
      isAuthenticated: false,
    };
  },
  methods: {
    login() {
      this.isAuthenticated = true;
    },
    logout() {
      this.isAuthenticated = false;
    },
  },
};
</script>

<style scoped>

</style>
