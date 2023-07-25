const app = {
    setup() {  
        const message = 'Hello Vue 3!';

        return {
            message
        }
    }
};

const { createApp, ref } = Vue;

createApp(app).mount('#app');