const app = Vue.createApp({
    data() {
        return {
            firstName: 'James',
            lastName: 'Doe',
            email: 'james@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    }
})

app.mount('#app')