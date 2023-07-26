const app = {
    data() {  
        const message = 'Hello Vue 3!';

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
        }
    },
};

const { createApp, ref } = Vue;

createApp(app).mount('#app');