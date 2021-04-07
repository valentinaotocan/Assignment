<template>
<div class="profile">
  <div class="details">
    <img :src="user.picture" />
    <p>Title: {{ user.title }}</p>
    <h1>Name: {{ user.firstName }}</h1>
    <p>Surname: {{ user.lastName }}</p>
    <p>User id:{{ user.id }}</p>
    <p>Gender: {{ user.gender }}</p>
    <p>email: {{ user.email }}</p>
    <p>Date of birth: {{ user.dateOfBirth }}</p>
    <p>Register date: {{ user.registerDate }}</p>
    <p>tel: {{ user.phone }}</p>
    <p>Location: </p>
    <p>City: {{ user.location.city }}</p>
    <p>Country: {{ user.location.country }}</p>
    <p>State: {{ user.location.state }}</p>
    <p>Street: {{ user.location.street }}</p>
    <p>Timezone: {{ user.location.timezone }}</p>
  </div>
  <nuxt-link to="/user" class="btn"> Back </nuxt-link>
</div>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const user = await $axios.$get(
      `https://dummyapi.io/data/api/user/${params.id}`,
      {
        headers: { "app-id": "605e26b8fde940b961ce5c10" },
      }
    );
    return { user };
  },
};
</script>

<style scoped>
.profile {
  margin: 5px auto;
  max-width: 450px;
  overflow: hidden;
  border: 2px solid #000;
  text-align: center;
}
.details {
  padding: 5px;
  text-align: center;
  padding: 10px;
}
.btn {
  display: inline-block;
  text-align: center;
  padding: 8px;
  color: #3b8070;
}
</style>