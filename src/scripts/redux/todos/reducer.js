import types from  "./types"

// Todos
const initialState = {
    data: [],
    isLoading: true
}

function todos(state = initialState, action) {
    switch (action.type) {
        case types.TODOS_LOADING:
            return {
                data: state.data,
                isLoading: true,
            }

        case types.TODOS_LOADED:
            return {
                data: [...state.data, ...action.payload],
                isLoading: false,
            }

        case types.TODOS_ERROR:
            return {
                data: state.data,
                isLoading: false,
                error: action.payload,
            }

        default:
            return state

    }
}

export {todos}