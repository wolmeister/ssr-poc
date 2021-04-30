<template>
  <div class="container">
    <img :src="user.avatarUrl" alt="user-avatar" class="avatar" />
    <span>{{ user.name }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

type User = { name: string; avatarUrl: string };

export default Vue.extend({
  head() {
    return {
      title: 'SSR POC - Nuxt',
    };
  },

  async asyncData({ $http }) {
    // Simulate a request to an external server
    const user: User = await $http.$get('http://localhost:3000/api/users/me');
    return { user };
  },
});
</script>

<style>
body {
  margin: 0;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  flex-direction: column;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 8px;
}
</style>
