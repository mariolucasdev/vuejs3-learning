const ExampleForm = {
    template: `
        <form action="#" method="post" @submit.prevent="saveData">
            <label for="name">
                Name
                <input v-model="name" type="text" id="name" name="name" placeholder="name" :value="name">

                <span v-if="errors.name"> {{ errors.name }} </span>
            </label>
            
            <label for="sexo">
                Sexo
                <select v-model="sexo" name="sexo" id="sexo">
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option>
                </select>
            </label>

            <label for="description">
                Descrição
                <textarea v-model="description" name="description" id="description" cols="30" rows="10"></textarea>
            </label>

            <input v-model="agree" type="checkbox" name="agree" id="agree">

            <input type="submit" value="submit">    
        `,

    data() {
        return {
            name: 'Mário Lucas',
            sexo: 'M',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            agree: true,

            errors: {}
        }
    },

    methods: {
        saveData() {
            this.reset()

            if (this.name.length < 3) {
                this.errors.name = 'O nome deve ter pelo menos 3 caracteres'
            }

            console.log(this.name, this.sexo, this.description, this.agree)
        },

        reset() {
            this.errors = {}
        }
    },
}

app.component('example-form', ExampleForm)