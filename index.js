var navBar = Vue.createApp({
    data() {
        return {
            logo: {
                image: "./assets/logo.png"
            },

            items: [{
                    index: 1,
                    name: 'Subs',
                    image: "./assets/nav-bar-menu/1-subs.svg"
                },
                {
                    index: 2,
                    name: 'Notes',
                    image: "./assets/nav-bar-menu/2-note.svg"
                },
                {
                    index: 3,
                    name: 'Canvas',
                    image: "./assets/nav-bar-menu/3-canvas.svg"
                },
                {
                    index: 4,
                    name: 'Analysis',
                    image: "./assets/nav-bar-menu/4-analysis.svg"
                }
            ]
        }
    }
})

var groupMenu = Vue.createApp({
    data() {
        return {
            items: [{
                    index: 1,
                    text: 'All Articles',
                    image: './assets/side-panel/all-articles.svg'
                },
                {
                    index: 2,
                    text: 'Read Later',
                    image: './assets/side-panel/read-later.svg'
                },
                {
                    index: 3,
                    text: 'Knowledge Graph',
                    image: './assets/side-panel/arrow-right.svg'
                },
                {
                    index: 2,
                    text: 'Data Vis',
                    image: './assets/side-panel/arrow-right.svg'
                }
            ]
        }
    }
})

var articlesGroup = Vue.createApp({
    data() {
        return {
            articles: [{
                    index: 1,
                    type: "Journal Article",
                    author: "Andy Extance",
                    date: "October 2019",
                    position: "Nature-VOL 56-Toolbox",
                    title: 'How AI Technology can tame the scientific literature',
                    description: 'description of article1',
                    image: ''
                },
                {
                    index: 2,
                    title: 'How AI Technology can tame the scientific literature',
                    description: 'description of article2',
                    image: ''
                }
            ]
        }
    }
})