import axios from 'axios'

const TODO_URL = 'http://localhost:8080/todo';

class TodoService {

    executeGetService() {
        return axios.get(TODO_URL);
    }

    executePostService(todo) {
        return axios.post(TODO_URL, todo);
    }

    executeDeleteService(id) {
        return axios.delete(TODO_URL + "/" + id);
    }

}

export default new TodoService()