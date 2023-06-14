<template>
  <main>
    <div class="">
      <img class="mx-auto" src="../assets/logo.png" />
      <h1 class="text-lg font-semibold mb-2">Login</h1>
      <div>
        <input
          class="w-72 h-10 pl-5 block mb-7 mx-auto border-2 border-solid border-cyan-700 rounded"
          type="email"
          placeholder="Enter Email"
          v-model="email"
        />
        <input
          class="w-72 h-10 pl-5 block mb-7 mx-auto border-2 border-solid border-cyan-700 rounded"
          type="password"
          placeholder="Enter password"
          v-model="password"
        />
        <button
          class="w-72 h-10 block text-cyan-50 cursor-pointer border-0 mx-auto bg-cyan-700 rounded"
          @click="Login"
        >
          Login
        </button>
        <p>
          <router-link to="/sign-up">Sign Up</router-link>
        </p>
      </div>
    </div>
  </main>
</template>
<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async Login() {
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ name: "Home" });
      }
      console.warn(result);
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
