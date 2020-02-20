<template lang="pug">
  #app
    div(v-for="user in users" :key="user.id")
      p {{user.name}}
      .img
        img(v-if="user.pics" :src="user.pics[0]")
</template>
<script>
import { firestore } from '@/auth';

export default {
  firestore() {
    return {
      users: firestore.collection('users'),
    };
  },
};
</script>
<style lang="sass">
  .img
    width: 50px
    height: 50px
  img
    max-width: 100%
    height: auto
</style>
