const { createApp } = Vue;
console.log('Vue ok', Vue);
const endpoint = 'http://localhost:8888/boolean/php-todo-list-json/api/script.php';
const app = createApp({
    data: () => ({
        tasks: []
    }),
    methods: {
        addTask() {
            const data = { task: this.newTask }
            const config = { headers: { 'Content-type': 'multipart/form-data' } }
            axios.post(endpoint, data, config)
        }

    },
    created() {
        axios.get(endpoint).then(res => {
            this.tasks = res.data;
            console.log(this.tasks)
        })
    }

});
app.mount('#app');