import Http from "../../Http"
import types from  "./types"
import data from "./data"

function loadTodos() {
    const loading = () => ({type:types.TODOS_LOADING})
    const loaded = payload => ({type:types.TODOS_LOADED, payload})
    const error = payload => ({type:types.TODOS_ERROR, payload})

    return (dispatch) => {
        dispatch(loading())

        Http.send("/", "GET")
            .then(response => response.json)
            .then(json => {
                setTimeout(() => dispatch(loaded(data)), 300)
            })
            .catch(e => {
                dispatch(error(e))
            })
    }
}

export default loadTodos