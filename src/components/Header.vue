<template>
  <main>
    <div class="bg-slate-950 overflow-hidden">
      <router-link
        class="float-left text-white px-4 py-3 text-center text-md mr-1"
        to="/"
        >Home</router-link
      >
      <router-link
        class="float-left text-white px-4 py-3 text-center text-md mr-1"
        to="/add-restaurant"
        >Add Restaurant</router-link
      >
      <!-- <router-link
        class="float-left text-white px-4 py-3 text-center text-md mr-1"
        to="/update-restaurant"
        >Update Restaurant</router-link
      > -->
      <a
        class="float-left text-white px-4 py-3 text-center text-md mr-1"
        href="#"
        @click="logout"
        >Logout</a
      >
    </div>
  </main>
</template>
<script>
export default {
  name: "Header",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
