const { createApp } = Vue;
console.log('Vue ok', Vue);
const endpoint = 'http://localhost:8888/boolean/php-todo-list-json/api/script.php';
const app = createApp({
    data: () => ({
        tasks: []
    }),
    created() {
        axios.get(endpoint).then(res => {
            this.tasks = res.data;
            console.log(this.tasks)
        })
    }

});
app.mount('#app');