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
            this.firstName = 'Sam'
            this.lastName = 'Smith'
            this.email = 'sam@gmail.com'
            this.gender = 'female'
            this.picture = 'https://randomuser.me/api/portraits/women/10.jpg'
        },
    }
})

app.mount('#app')