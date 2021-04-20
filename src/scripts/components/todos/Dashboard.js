import React, {useEffect} from "react";

// Components
import Todo from "./Todo";
import Toolbar from "./Toolbar";
import {Loader} from "rsuite";
import {connect} from "react-redux";
import {addTodo, loadTodos} from "../../redux/todos/actions";
import TYPES from "../../redux/todos/types";

// General

function Column({title, isLoading, todos}) {

    const loading = (
        <div className="d-flex align-items-center ttd-text-dark">
            Loading
            <Loader size="xs" className="ms-4"/>
        </div>
    )
    const noTodos = (
        <div>No todos</div>
    )

    return (
        <div className="ttd-dashboard__column">
            <div className="ttd-dashboard__column-headline">
                {title}
                <span className="ttd-dashboard__column-headline__count">( {todos.length} )</span>
            </div>
            <div className="ttd-dashboard__column-inner">
                {
                    isLoading ? loading : todos.length === 0 ? noTodos : todos.map(todo => (
                        <Todo key={todo.id} todo={todo}/>
                    ))
                }
            </div>
        </div>
    )
}


function Dashboard({todos, addTodo, loadTodos, rebootTodos}) {
    const filter = type => todos.data.filter(todo => todo.type === type)

    useEffect(() => {
        rebootTodos()
        loadTodos(1)
    }, [])

    return (
        <div className="ttd-dashboard">
            <div className="ttd-dashboard__headline">
                <div className="ttd-dashboard__headline-title">
                    Dashboard
                </div>
                <Toolbar addTodo={addTodo}/>
            </div>
            <div className="ttd-dashboard__columns">
                <div className="ttd-dashboard__columns-inner">
                    <Column isLoading={todos.isLoading} title="To do" todos={filter("todo")}/>
                    <Column isLoading={todos.isLoading} title="In progress" todos={filter("in_progress")}/>
                    <Column isLoading={todos.isLoading} title="Completed" todos={filter("completed")}/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
        addTodo: obj => dispatch(addTodo(obj)),
        loadTodos: page => dispatch(loadTodos(page)),
        rebootTodos: page => dispatch({type: TYPES.TODOS_REBOOT, payload: null})
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)