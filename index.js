const emitter = mitt(); //Global Mitt Set-up

var app = Vue.createApp({
    methods: {
        receiveUpdateGroup(selectedItem) {
            console.log('test' + selectedItem);
            this.selectedGroup = selectedItem;
            console.log('Article group change: ' + this.selectedGroup);
        }
    }
})