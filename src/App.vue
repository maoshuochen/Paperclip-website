<template>
  <div>
    <!-- Navigation Bar -->
    <nav-bar></nav-bar>

    <!-- Side Panel -->
    <div id="side-panel">
      <div id="search-bar">
        <input type="text" id="search-text" />
        <button id="search-button">
          <img id="search-icon" src="./assets/side-panel/search-icon.svg" />
        </button>
      </div>
      <group-menu></group-menu>
    </div>

    <!-- Main Panel -->
    <div id="main-panel">
      <articles-group></articles-group>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import ArticlesGroup from "./components/ArticlesGroup";
import GroupMenu from "./components/GroupMenu";
export default {
  name: "App",
  components: {
    NavBar,
    ArticlesGroup,
    GroupMenu,
  },
};
</script>

<style>
#app {
  font-family: Open Sans, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  height: 100vh;
}

/* Side Panel */
#side-panel {
  position: fixed;
  width: 25vw;
  height: 100%;
  left: 5vw;
  top: 0px;
  background-color: #f6f7f8;
}

/* Search Bar */

#search-bar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 80%;
  margin-left: 10%;
  height: 40px;
  border-radius: 25px;
  margin-top: 6vh;
  background-color: #fafafb;
  border: 1px solid #d8d8d8;
}

#search-text {
  width: 73%;
  height: 50%;
  outline-style: none;
  border: 0px;
  background-color: #fafafb;
  color: #424242;
  font-size: 1rem;
  font-weight: 600;
}

#search-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18%;
  height: 55%;
  margin-left: 2%;
  border: 0px;
  background: none;
}

#search-button:focus {
  outline: none;
}

#search-icon {
  height: 100%;
}

/* Main Panel */
#main-panel {
  width: 60vw;
  padding: 6vh 4vw 0;
  position: absolute;
  left: 30vw;
}
</style>
