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
import ImgLogo from '../assets/nav-bar/logo.png';
import SvgSubs from '../assets/nav-bar/1-subs.svg';
import SvgNote from '../assets/nav-bar/2-note.svg';
import SvgCanvas from '../assets/nav-bar/3-canvas.svg';
import SvgAnalysis from '../assets/nav-bar/4-analysis.svg';

export default {
  name: 'NavBar',
  props: {
    pageIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      logo: {
        image: ImgLogo,
      },
      items: [
        {
          name: "Subs",
          active: true,
          image: SvgSubs,
        },
        {
          name: "Notes",
          active: false,
          image: SvgNote,
        },
        {
          name: "Canvas",
          active: false,
          image: SvgCanvas,
        },
        {
          name: "Analysis",
          active: false,
          image: SvgAnalysis,
        },
      ],
    };
  },
};
</script>

<style>
/* navigation bar */
#nav-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 5vw;
    height: 100%;
    left: 0px;
    top: 0px;
    background-color: #F9FAFB;
}

#logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    /* 子元素垂直居中 */
    position: absolute;
    width: 5vw;
    height: 5vw;
    left: 0px;
    top: 50px;
}

#logo-image {
    position: absolute;
    width: 40%;
    height: 40%;
}

#nav-bar-menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* 子元素垂直居中 */
    position: absolute;
    width: 100%;
}

.menu-items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* 子元素垂直居中 */
    width: 100%;
    height: 120px;
    background-color: #f9fafb;
    border: none;
}

.menu-items:focus {
    outline: none;
}

.menu-items:hover {
    background-color: #eee;
}

.menu-icons-active {
    width: 1.2vw;
    height: 30%;
}

.menu-icons-inactive {
    width: 1.2vw;
    height: 30%;
    filter: grayscale(100%) opacity(50%);
}

.menu-names-active {
    text-align: center;
    font-size: 0.9rem;
    font-weight: 600;
    margin-top: 1vh;
    color: #424242;
}

.menu-names-inactive {
    text-align: center;
    font-size: 0.9rem;
    font-weight: 600;
    margin-top: 1vh;
    color: #bbb;
}

</style>