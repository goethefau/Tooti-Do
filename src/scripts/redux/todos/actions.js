import TYPES from "./types";
import Http from "../../Http";
import data from "./data"

const step = (type, payload = null) => ({type, payload})

function loadTodos(page) {
    return (dispatch) => {
        dispatch(step(TYPES.TODOS_LOADING))

        Http.send(`https://jsonplaceholder.typicode.com/todos/${page}`, "GET")
            .then(response => {
                return response.json()
            })
            .then(json => {
                setTimeout(() => dispatch(step(TYPES.TODOS_LOADED, data)), 750)
            })
            .catch(e => {
                dispatch(step(TYPES.TODOS_FAILURE, e))
            })
    }
}

function addTodo(obj) {
    return dispatch => {
        dispatch(step(TYPES.TODO_LOADING))

        Http.send(`https://jsonplaceholder.typicode.com/todos`, "POST")
            .then(response => {
                return response.json()
            })
            .then(json => {
                setTimeout(() => dispatch(step(TYPES.TODO_ADD, {
                    ...data[0],
                    ...obj,
                    img: null
                })), 750)
            })
            .catch(e => {
                dispatch(step(TYPES.TODO_FAILURE, e))
            })
    }
}

export {loadTodos, addTodo}

