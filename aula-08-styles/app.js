const app = {
    data() {  
        return {
            title: "Curso Vue 3",
            name: "Mário Lucas",
            lastName: "de Oliveira Régis",
            products: [
                {
                    title: 'Product Title',
                    description: 'Product Description',
                    image: './assets/images/filme1.jpg',
                    stars: 5,
                },
                {
                    title: 'Product Title',
                    description: 'Product Description',
                    image: './assets/images/filme2.jpg',
                    stars: 0,
                }
            ],
            cart: [],
            styles: {
                color: '#fff',
                backgroundColor: '#000',
            },
            themeBlack: true,
        }
    },

    computed: {
        fullName() {
            return this.name + ' ' + this.lastName
        }
    },

    methods: {
        addCart(product) {
            this.cart.push(product);
        },

        inCart(product) {
            return this.cart.indexOf(product) != -1;
        },

        removeCart(product) {
            this.cart = this.cart.filter(product => product != product);
        },

        toggleTheme() {
            this.themeBlack = !this.themeBlack;

            this.styles.color = this.themeBlack ? '#fff' : '#000';
            this.styles.backgroundColor = this.themeBlack ? '#000' : '#fff';
        }, 
    },
};

const { createApp, ref } = Vue;

createApp(app).mount('#app');