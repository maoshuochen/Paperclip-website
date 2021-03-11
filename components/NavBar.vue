<template>
  <div id="nav-bar">
    <div id="logo-container">
      <img id="logo-image" :src="logo.image" />
    </div>
    <div id="nav-bar-menu">
      <button class="menu-items" v-for="item in items" :key="item.id">
        <img class="menu-icons-active" :src="item.image" v-if="item.active" />
        <img class="menu-icons-inactive" :src="item.image" v-else />
        <p class="menu-names-active" v-if="item.active">{{ item.name }}</p>
        <p class="menu-names-inactive" v-else>{{ item.name }}</p>
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
  props: {
    pageIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      logo: {
        image: "./assets/nav-bar/logo.png",
      },
      items: [
        {
          name: "Subs",
          active: true,
          image: "./assets/nav-bar/1-subs.svg",
        },
        {
          name: "Notes",
          active: false,
          image: "./assets/nav-bar/2-note.svg",
        },
        {
          name: "Canvas",
          active: false,
          image: "./assets/nav-bar/3-canvas.svg",
        },
        {
          name: "Analysis",
          active: false,
          image: "./assets/nav-bar/4-analysis.svg",
        },
      ],
    };
  },
});
</script>