const app = {
    setup() {  
        const message = 'Hello Vue 3!';

        return {
            message,
            product: {
                title: 'Product Title',
                description: 'Product Description',
                image: './assets/images/filme1.jpg',
            }
        }
    }
};

const { createApp, ref } = Vue;

createApp(app).mount('#app');