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
                    index: 2,
                    text: 'Data Vis',
                    image: './assets/side-panel/arrow-right.svg'
                }
            ]
        }
    }
})

// group1: Knowledge Graph
// group2: Data Vis
// group3: Others

var articlesGroup = Vue.createApp({
    data() {
        return {
            articles: [{
                    index: 1,
                    group: 3,
                    type: "Journal Article",
                    author: "Andy Extance",
                    date: "October 2019",
                    position: "Nature-VOL 56-Toolbox",
                    title: 'How AI Technology can tame the scientific literature',
                    abstract: 'As artificially intelligent tools for literature and data exploration evolve, developers seek to automate how hypotheses are generated and validated.',
                    image: './assets/main-panel/article-images/article1.png',
                    keywords: ['AI-based', 'Nature Language Processing', 'Knowledge Graph'],
                    cite: 2,
                    comment: 15,
                    trend: 50
                },
                {
                    index: 2,
                    group: 3,
                    type: "Journal Article",
                    author: "Marco Cavallo",
                    date: "January 2019",
                    position: "IEEE Transactions on Visualization and Computer Graphics",
                    title: 'Clustrophile 2: Guided Visual Clustering Analysis',
                    abstract: "Data clustering is a common unsupervised learning method frequently used in exploratory data analysis. However, identifying relevant structures in unlabeled, high-dimensional data is nontrivial, requiring iterative experimentation with clustering parameters as well as data features and instances. The number of possible clusterings for a typical dataset is vast, and navigating in this vast space is also challenging. The absence of ground-truth labels makes it impossible to define an optimal solution, thus requiring user judgment to establish what can be considered a satisfiable clustering result. Data scientists need adequate interactive tools to effectively explore and navigate the large clustering space so as to improve the effectiveness of exploratory clustering analysis. We introduce Clustrophile 2, a new interactive tool for guided clustering analysis. Clustrophile 2 guides users in clustering-based exploratory analysis, adapts user feedback to improve user guidance, facilitates the interpretation of clusters, and helps quickly reason about differences between clusterings. To this end, Clustrophile 2 contributes a novel feature, the Clustering Tour, to help users choose clustering parameters and assess the quality of different clustering results in relation to current analysis goals and user expectations. We evaluate Clustrophile 2 through a user study with 12 data scientists, who used our tool to explore and interpret sub-cohorts in a dataset of Parkinson's disease patients. Results suggest that Clustrophile 2 improves the speed and effectiveness of exploratory clustering analysis for both experts and non-experts.",
                    image: './assets/main-panel/article-images/article2.png',
                    keywords: ['Clustering Tour', 'Guided Data Analysis', 'Unsupervised Learning'],
                    cite: 3,
                    comment: 52,
                    trend: 60
                }
            ]
        }
    }
})