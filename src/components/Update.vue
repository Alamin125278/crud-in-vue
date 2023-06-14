<template>
  <main>
    <Header />
    <div class="my-24">
      <h1 class="font-extrabold">
        Hello user, Welcome on Update Restaurant page
      </h1>
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
          @click="UPDATE"
        >
          Update Restaurant
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
  name: "Update",
  data() {
    return {
      restaurant: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  methods: {
    async UPDATE() {
      const result = await axios.put(
        "http://localhost:3000/restaurants/" + this.$route.params.id,
        {
          name: this.restaurant.name,
          address: this.restaurant.address,
          contact: this.restaurant.contact,
        }
      );
      if (result.status == 200) {
        this.$router.push({ name: "Home" });
      }
    },
  },
  components: {
    Header,
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    const result = await axios.get(
      "http://localhost:3000/restaurants/" + this.$route.params.id
    );
    this.restaurant = result.data;
  },
};
</script>
