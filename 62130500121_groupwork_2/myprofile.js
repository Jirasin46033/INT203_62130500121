const app ={
    data(){
        return{
            name: 'Jirasin',
            text1: 'Hello guys, Nice to meet you!!',
            photos: 9,
            friends: 407,
            imgupper: 'https://wallpaperaccess.com/full/1931304.jpg',
            imgprofile: 'images/me.jpg'
        }
    }
}
var mountedApp = Vue.createApp(app).mount('#app');