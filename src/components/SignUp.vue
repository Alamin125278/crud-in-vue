<template>
  <img class="mx-auto" src="../assets/logo.png" />
  <h1 class="text-lg font-semibold mb-2">Sign Up</h1>
  <div>
    <input
      class="w-72 h-10 pl-5 block mb-7 mx-auto border-2 border-solid border-cyan-700 rounded"
      type="text"
      placeholder="Enter Name"
      v-model="name"
    /><input
      class="w-72 h-10 pl-5 block mb-7 mx-auto border-2 border-solid border-cyan-700 rounded"
      type="email"
      placeholder="Enter Email"
      v-model="email"
    /><input
      class="w-72 h-10 pl-5 block mb-7 mx-auto border-2 border-solid border-cyan-700 rounded"
      type="password"
      placeholder="Enter password"
      v-model="password"
    />
    <button
      class="w-72 h-10 block text-cyan-50 cursor-pointer border-0 mx-auto bg-cyan-700 rounded"
      @click="signUp"
    >
      Sign Up
    </button>
    <p>
      <router-link to="/login">Login</router-link>
    </p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "SingUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:3000/users", {
        email: this.email,
        password: this.password,
        name: this.name,
      });
      console.log(result);
      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "Home" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>
