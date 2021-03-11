<template>
  <div id="group-menu">
    <button
      class="group-items"
      v-for="(item, index) in items"
      :key="item.id"
      @click="updateGroup(index)"
    >
      <div class="group-item-bar">
        <div
          class="group-toggle-zone"
          v-if="item.tags"
          @click="toggle(item.id)"
        ></div>
        <div
          class="group-highlight-selected"
          v-if="isSelected(item.text)"
        ></div>
        <div class="group-highlight-unselected" v-else></div>
        <img
          :class="[
            item.isActive
              ? 'group-items-icon-active'
              : 'group-items-icon-inactive',
          ]"
          :src="item.image"
        />
        <p class="group-items-text">{{ item.text }}</p>
      </div>
      <div class="group-item-tags" v-if="item.isActive">
        <p
          :class="'group-item-tag-' + tag.type"
          v-for="tag in item.tags"
          :key="tag.id"
        >
          {{ tag.value }}
        </p>
      </div>
    </button>
  </div>
</template>

<script>
import bus from "./Bus";
export default {
  name: "GroupMenu",
  data() {
    return {
      items: [
        {
          id: 0,
          text: "All Articles",
          image: require("../assets/side-panel/all-articles.svg"),
        },
        {
          id: 1,
          text: "Read Later",
          image: require("../assets/side-panel/read-later.svg"),
        },
        {
          id: 2,
          text: "Knowledge Graph",
          image: require("../assets/side-panel/arrow-right.svg"),
          isActive: false,
          tags: [
            { value: "Knowledge Graph", type: 1 },
            { value: "Nature Language Processing", type: 1 },
            { value: "Database", type: 1 },
            { value: "Cited Index", type: 1 },
            { value: "Omar Alonso", type: 2 },
            { value: "Co-word Visualization", type: 1 },
            { value: "Minjun Zhao", type: 2 },
            { value: "Graph Neighborhood", type: 1 },
            { value: "AAMAS'19", type: 3 },
            { value: "CHI'20", type: 3 },
            { value: "Intelligent Question and Answering System", type: 1 },
            { value: "Information Retrieval", type: 1 },
          ],
        },
        {
          id: 3,
          text: "Data Vis",
          image: require("../assets/side-panel/arrow-right.svg"),
          isActive: false,
          tags: [
            { value: "Image Analysis", type: 1 },
            { value: "Data Mining", type: 1 },
            { value: "Chih-Jen Lin", type: 2 },
            { value: "Martin A. Fischler", type: 2 },
            { value: "Robert C. Bolles", type: 2 },
            { value: "SIGMOD'19", type: 3 },
            { value: "ICSE'18", type: 3 },
            { value: "Cite Space", type: 1 },
            { value: "Mining Association Rules", type: 1 },
            { value: "Library", type: 1 },
            { value: "Key Cryptosystems", type: 1 },
          ],
        },
      ],
      selectedItem: 0,
    };
  },
  methods: {
    updateGroup(index) {
      this.selectedItem = index;
      bus.emit("updateGroup", this.selectedItem);
    },
    toggle(id) {
      console.log("toggle id: " + id);
      this.items[id].isActive = !this.items[id].isActive;
    },
    isSelected(text) {
      if (text == this.items[this.selectedItem].text) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
/* Group Menu */

#group-menu {
    position: absolute;
    top: 14vh;
    width: 100%;
}

#group-title {
    color: #333;
    margin: 2vh 0;
}

.group-items {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border: none;
    background-color: #f6f7f8;
    padding-left: 0;
}

.group-item-bar {
    height: 60px;
    width: 100%;
    margin: 5px 0;
    display: flex;
    align-items: center;
}

.group-item-bar:focus {
    outline: 0;
}

.group-item-bar:hover {
    background-color: #eee;
}

.group-toggle-zone {
    display: block;
    position: absolute;
    width: 2vw;
    height: 3vh;
    left: 2vw;
    z-index: 999;
}

.group-highlight-selected {
    background-color: #4fc3f7;
    height: 100%;
    width: 0.2vw;
}

.group-highlight-unselected {
    height: 100%;
    width: 0.2vw;
}

.group-items-icon-active {
    height: 1.3vw;
    margin-left: 2vw;
    transform: rotate(90deg);
    transition: 0.2s;
}

.group-items-icon-inactive {
    height: 1.3vw;
    margin-left: 2vw;
    transform: rotate(0deg);
    transition: 0.2s;
}

.group-items-text {
    padding-left: 6%;
    font-size: 1.4rem;
    font-weight: 600;
    color: #424242;
}

.group-item-tags {
    display: flex;
    flex-flow: wrap;
    padding: 0.5vh 1.5vw;
}

.group-item-tag-1 {
    width: fit-content;
    padding: 0.3vh 0.6vw 0.4vh 0.6vw;
    margin: 0.8vh 0.5vw;
    border-radius: 0.5vh;
    font-size: 0.9rem;
    font-weight: 600;
    background-color: #b3e5fc;
    color: #0269a8;
}

.group-item-tag-2 {
    width: fit-content;
    padding: 0.3vh 0.6vw 0.4vh 0.6vw;
    margin: 0.8vh 0.5vw;
    border-radius: 0.5vh;
    font-size: 0.9em;
    font-weight: 600;
    background-color: #ffcdd2;
    color: #e62639;
}

.group-item-tag-3 {
    width: fit-content;
    padding: 0.3vh 0.6vw 0.4vh 0.6vw;
    margin: 0.8vh 0.5vw;
    border-radius: 0.5vh;
    font-size: 0.9rem;
    font-weight: 600;
    background-color: #c8e6c9;
    color: #0e6911;
}

</style>