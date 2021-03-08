app.component('group-menu', {
    template:
    /*html*/
        `
    <div id="group-menu">
        <button class="group-items" v-for="(item,index) in items" @click="updateGroup(index)">
            <div class="group-highlight-selected" v-if="isSelected(item.text)"></div>
            <div class="group-highlight-unselected" v-else></div>
            <img class="group-items-icon" :src="item.image">
            <p class="group-items-text">{{item.text}}</p>
        </button>
    </div>
    `,
    data() {
        return {
            items: [{
                    text: 'All Articles',
                    image: './assets/side-panel/all-articles.svg'
                },
                {
                    text: 'Read Later',
                    image: './assets/side-panel/read-later.svg'
                },
                {
                    text: 'Knowledge Graph',
                    image: './assets/side-panel/arrow-right.svg',
                    tags: [
                        { value: 'Knowledge Graph', type: 1 },
                        { value: 'Nature Language Processing', type: 1 },
                        { value: 'Database', type: 1 },
                        { value: 'Cited Index', type: 1 },
                        { value: 'Omar Alonso', type: 2 }
                    ]
                },
                {
                    text: 'Data Vis',
                    image: './assets/side-panel/arrow-right.svg'
                }
            ],
            selectedItem: 0,
        }
    },
    methods: {
        updateGroup(index) {
            this.selectedItem = index;
            console.log(this.selectedItem);
            this.$emit('update-group', this.selectedItem);
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