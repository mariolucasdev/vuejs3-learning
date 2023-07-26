const productDetail = {
    template: `
        <p> {{ product.title }} </p>
        <img style="width: 300px" :src="product.image" :alt="product.title">
        <strong v-if="product.stars > 0"> {{ product.stars }} </strong>
        <button :disabled="productInCart"
            v-on:click.prevent="addCart(product)"
            :class="{'button-disabled' : productInCart}">
            ADD CART
        </button>
    `,

    props: {
        product: {
            type: Object,
            required: true,
        },
        productInCart: {
            type: Boolean,
        }
    },

    data() {
        return {
            example: 123
        }
    },

    methods: {
        addCart(product) {
            console.log('Add Cart Product')
        }
    }
}

app.component('product-detail', productDetail)