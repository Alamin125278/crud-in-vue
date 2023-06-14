<template>
  <main>
    <Header />
    <div class="my-24">
      <h1 class="font-extrabold">Hello user, Welcome on Add Restaurant page</h1>
      <form class="m-4">
        <input
          class="w-72 h-10 pl-5 block mb-7 mx-auto border-2 border-solid border-cyan-700 rounded"
          type="text"
          placeholder="Enter Name"
          v-model="restaurant.name"
        />
        <input
          class="w-72 h-10 pl-5 block mb-7 mx-auto border-2 border-solid border-cyan-700 rounded"
          type="text"
          placeholder="Enter Address"
          v-model="restaurant.address"
        />
        <input
          class="w-72 h-10 pl-5 block mb-7 mx-auto border-2 border-solid border-cyan-700 rounded"
          type="number"
          placeholder="Enter Contact"
          v-model="restaurant.contact"
        />
        <button
          class="w-72 h-10 block text-cyan-50 cursor-pointer border-0 mx-auto bg-cyan-700 rounded"
          type="button"
          @click="ADD"
        >
          Add New Restaurant
        </button>
      </form>
    </div>
  </main>
</template>
<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
  components: { Header },
  name: "Add",
  data() {
    return {
      restaurant: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  components: {
    Header,
  },
  methods: {
    async ADD() {
      const result = await axios.post("http://localhost:3000/restaurants", {
        name: this.restaurant.name,
        address: this.restaurant.address,
        contact: this.restaurant.contact,
      });
      if (result.status == 201) {
        this.$router.push({ name: "Home" });
      }

      this.restaurant.name = "";
      this.restaurant.address = "";
      this.restaurant.contact = "";
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>
