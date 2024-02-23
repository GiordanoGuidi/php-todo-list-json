const { createApp } = Vue;
console.log('Vue ok', Vue);
const endpoint = 'http://localhost:8888/boolean/php-todo-list-json/api/script.php';
const app = createApp({
    data: () => ({
        tasks: [],
        newTask: "",
    }),
    methods: {
        addTask() {
            console.log('ciao')
            const data = { task: this.newTask }
            const config = { headers: { 'Content-type': 'multipart/form-data' } }
            axios.post(endpoint, data, config).then(res => {
                console.log(res.data)
                this.tasks = res.data;
                this.newTask = '';
            })
        }
    },
    created() {
        axios.get(endpoint).then(res => {
            this.tasks = res.data;
        })
    }

});
app.mount('#app');