<template>
  <div>
    <button class="btn link-dark" v-if="!isAuthenticated" @click="login">Login</button>
    <button class="btn link-dark" v-if="isAuthenticated" @click="logout">Logout</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { USERAUTH_LOGIN, USERAUTH_LOGOUT } from '@/store/storeTypes/action_types';

export default {
  name: 'UserAuth',
  // data() {
  //   return {
  //     isAuthenticated: false,
  //   };
  // },
  computed: {
    ...mapState({
      isAuthenticated: (state) => state.userAuth.isAuthenticated,
    }),
  },
  methods: {
    // login() {
    //   this.isAuthenticated = true;
    // },
    // logout() {
    //   this.isAuthenticated = false;
    // },
    ...mapActions({
      login: USERAUTH_LOGIN,
      logout: USERAUTH_LOGOUT,
    }),
  },
};
</script>

<style scoped>

</style>
