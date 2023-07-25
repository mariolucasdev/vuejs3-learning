const app = {
    setup() {  
        const message = 'Hello Vue 3!';

        return {
            message,
            product: {
                title: 'Product Title',
                description: 'Product Description',
                image: './assets/images/filme1.jpg',
                stars: 5,
            },
            product2: {
                title: 'Product Title',
                description: 'Product Description',
                image: './assets/images/filme2.jpg',
                stars: 0,
            }
        }
    }
};

const { createApp, ref } = Vue;

createApp(app).mount('#app');