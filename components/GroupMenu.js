app.component('group-menu', {
    template:
    /*html*/
        `
    <div id="group-menu">
        <button class="group-items" v-for="(item,index) in items" @click="updateGroup(index)">
            <div class="group-item-bar">
                <div class="group-toggle-zone" v-if="item.tags" @click="toggle(item.id)"></div>
                <div class="group-highlight-selected" v-if="isSelected(item.text)"></div>
                <div class="group-highlight-unselected" v-else></div>
                <img :class="[item.isActive? 'group-items-icon-active' : 'group-items-icon-inactive']" :src="item.image">
                <p class="group-items-text">{{item.text}}</p>
            </div>
            <div class="group-item-tags" v-if="item.isActive">
                <p :class="'group-item-tag-'+tag.type" v-for="tag in item.tags">{{tag.value}}</p>
            </div>
        </button>
    </div>
    `,
    data() {
        return {
            items: [{
                    id: 0,
                    text: 'All Articles',
                    image: './assets/side-panel/all-articles.svg'
                },
                {
                    id: 1,
                    text: 'Read Later',
                    image: './assets/side-panel/read-later.svg'
                },
                {
                    id: 2,
                    text: 'Knowledge Graph',
                    image: './assets/side-panel/arrow-right.svg',
                    isActive: false,
                    tags: [
                        { value: 'Knowledge Graph', type: 1 },
                        { value: 'Nature Language Processing', type: 1 },
                        { value: 'Database', type: 1 },
                        { value: 'Cited Index', type: 1 },
                        { value: 'Omar Alonso', type: 2 },
                        { value: 'Co-word Visualization', type: 1 },
                        { value: 'Minjun Zhao', type: 2 },
                        { value: 'Graph Neighborhood', type: 1 },
                        { value: "AAMAS'19", type: 3 },
                        { value: "CHI'20", type: 3 },
                        { value: 'Intelligent Question and Answering System', type: 1 },
                        { value: 'Information Retrieval', type: 1 }
                    ]
                },
                {
                    id: 3,
                    text: 'Data Vis',
                    image: './assets/side-panel/arrow-right.svg',
                    isActive: false,
                    tags: [
                        { value: 'Image Analysis', type: 1 },
                        { value: 'Data Mining', type: 1 },
                        { value: 'Chih-Jen Lin', type: 2 },
                        { value: 'Martin A. Fischler', type: 2 },
                        { value: 'Robert C. Bolles', type: 2 },
                        { value: "SIGMOD'19", type: 3 },
                        { value: "ICSE'18", type: 3 },
                        { value: "Cite Space", type: 1 },
                        { value: 'Mining Association Rules', type: 1 },
                        { value: 'Library', type: 1 },
                        { value: 'Key Cryptosystems', type: 1 }
                    ]
                }
            ],
            selectedItem: 0,
        }
    },
    methods: {
        updateGroup(index) {
            this.selectedItem = index;
            console.log('update group:' + this.selectedItem);
            this.$emit('update-group', this.selectedItem);
        },
        toggle(id) {
            console.log('toggle id: ' + id);
            this.items[id].isActive = !this.items[id].isActive;
        },
        isSelected(text) {
            if (text == this.items[this.selectedItem].text) {
                return true;
            } else {
                return false;
            }
        }
    }
})