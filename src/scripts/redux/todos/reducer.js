import TYPES from "./types";

const initialState = {
    data: [],
    isLoading: false,
    error: null,
    item: {
        isLoading: false,
        error: null,
    }
}

function todos(state = initialState, action) {
    switch (action.type) {
        // Todos
        case TYPES.TODOS_LOADING:
            return {
                ...state,
                isLoading: true,
            }

        case TYPES.TODOS_LOADED:
            return {
                ...state,
                data: [...state.data, ...action.payload],
                isLoading: false,
                error: null
            }

        case TYPES.TODOS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        case TYPES.TODOS_REBOOT:
            return {
                ...state,
                data: []
            }

        // Todo
        case TYPES.TODO_LOADING:
            return {
                ...state,
                item: {
                    ...state.item,
                    isLoading: true
                }
            }

        case TYPES.TODO_ADD:
            return {
                ...state,
                data: [...state.data, action.payload],
                item: {
                    error: null,
                    isLoading: false
                }
            }

        case TYPES.TODO_FAILURE:
            return {
                ...state,
                item: {
                    error: action.payload,
                    isLoading: false
                }
            }

        // Default
        default:
            console.error(`Redux error: can't find action type - ${action.type}`)
            return state

    }
}

export default todos