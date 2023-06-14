<template>
  <main>
    <Header />
    <div class="my-24">
      <h1 class="font-bold text-3xl text-yellow-200 my-5">
        Hello {{ name }}, Welcome on Home page
      </h1>
      <table class="mx-auto m-2">
        <tr class="bg-slate-600 text-white">
          <th class="border border-solid w-40 h-10">Id</th>
          <th class="border border-solid w-40 h-10">Name</th>
          <th class="border border-solid w-40 h-10">Contact</th>
          <th class="border border-solid w-40 h-10">Address</th>
          <th class="border border-solid w-40 h-10">Actions</th>
        </tr>
        <tr
          :class="
            i % 2 == 0 || i == 0 ? 'bg-cyan-800 text-white' : 'bg-cyan-100'
          "
          v-for="(item, i) in restaurant"
          :key="item.id"
        >
          <td class="border border-solid w-40 h-10">{{ i + 1 }}</td>
          <td class="border border-solid w-40 h-10">{{ item.name }}</td>
          <td class="border border-solid w-40 h-10">{{ item.contact }}</td>
          <td class="border border-solid w-40 h-10">{{ item.address }}</td>
          <td class="border border-solid w-40 h-10">
            <router-link
              class="mx-1 p-1.5 bg-green-800 text-white rounded-lg"
              :to="'/update-restaurant/' + item.id"
              >Update</router-link
            >
            <button
              class="mx-1 bg-red-800 text-white p-1.5 rounded-lg"
              @click="DELETE(item.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </table>
    </div>
  </main>
</template>
<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
  components: { Header },
  name: "Home",
  data() {
    return {
      name: "",
      restaurant: [],
    };
  },
  components: {
    Header,
  },
  methods: {
    async DELETE(id) {
      console.log(id);
      let result = await axios.delete(
        "http://localhost:3000/restaurants/" + id
      );
      console.warn(result);
      if (result.status == 200) {
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem("user-info");
      if (!user) {
        this.$router.push({ name: "SignUp" });
      }
      this.name = JSON.parse(user).name;
      let result = await axios.get("http://localhost:3000/restaurants");
      this.restaurant = result.data;
    },
  },

  mounted() {
    this.loadData();
  },
};
</script>
