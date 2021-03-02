const app = Vue.createApp({
    data() {
        return {
            firstName: 'James',
            lastName: 'Doe',
            email: 'james@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        getUser() {
            console.log(this.firstName)
        }
    }
})

app.mount('#app')