<template>
  <div class="card">
    <div class="box" v-for="(user, i) in users" :key="i">
      <nuxt-link :to="`/user/${user.id}`"> <img :src="user.picture" /> </nuxt-link>
      <p>{{ user.firstName }}</p>
      <p>{{ user.lastName }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    }
  },
  async mounted() {
    this.$axios
      .get('https://dummyapi.io/data/api/user', {
        headers: { 'app-id': '605e26b8fde940b961ce5c10' },
      })
      .then((response) => {
        this.users = response.data.data
      })
  },
}
</script>

<style scooped>
.card {
  max-width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
}
.box {
  border: 2px solid black;
  margin: 5px;
  text-align: center;
}
</style>