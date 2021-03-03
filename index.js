var counter = new Vue({
    el: '#counter',
    data: {
        counter: 0
    },
    mounted() {
        this.timer = setInterval(() => {
            this.counter++
        }, 1000)
    },
    methods: {
        stopCounter() {
            clearInterval(this.timer);
        }
    }
})

var watch = new Vue({
    el: '#watch',
    data: {
        message: 'Hello Vue!'
    }
})
watch.$watch('message', (newVal, oldVal) => {
    console.log('Val Change:', oldVal, '=>', newVal);
})
watch.message = 'watch';

var app2 = new Vue({
    el: '#app2',
    data: {
        message: '页面加载于' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app3',
    data: {
        seen: true
    },
    methods: {
        switchVis: function () {
            this.seen = !this.seen;
        }
    }
})

var app4 = new Vue({
    el: '#app4',
    data: {
        list: [
            { text: 'line1' },
            { text: 'line2' },
            { text: 'line3' }
        ]
    }
})

var app5 = new Vue({
    el: '#app5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverse() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app6',
    data: {
        message: 'app6: Hello Vue.js'
    }
})

Vue.component('button-counter', {
    data: function () {
        return { count: 0 } // 这里data只能函数不能对象
    },
    template: `
    <button v-on:click="count++">Click {{count}} Times</button>
    `
})

var app7 = new Vue({
    el: '#app7'
})
