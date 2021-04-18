import React, {useEffect, useState} from "react";

// Components
import Todo from "./Todo";
import Toolbar from "./DashboardToolbar";

// Actions
import {Loader} from "rsuite";
import Http from "../../Http";
import data from "./data"

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
                    isLoading ? loading : todos.length === 0 ? noTodos : todos.map(todo => <Todo key={todo.id}
                                                                                                 todo={todo}/>)
                }
            </div>
        </div>
    )
}


function Dashboard() {

    // Init state
    const initialState = {
        isLoading: false,
        data: []
    }

    const [state, setState] = useState(initialState)

    // Get todos

    const getTodos = page => {
        setState({
            isLoading: true,
            data: [...state.data]
        })

        Http.send(`https://jsonplaceholder.typicode.com/todos/${page}`)
            .then(response => {
                return response.json()
            })
            .then(json => {
                setTimeout(() => setState({
                    isLoading: false,
                    data: [...state.data, ...data]
                }), 1000)
            })
            .catch(e => {
                setState({
                    isLoading: false,
                    error: e,
                    data: [...state.data]
                })
            })
    }

    useEffect(() => {
        getTodos(1)
    }, [])

    // Filter
    const filter = type => state.data.filter(todo => todo.type === type)

    // View
    return (
        <div className="ttd-dashboard">
            <div className="ttd-dashboard__headline">
                <div className="ttd-dashboard__headline-title">
                    Dashboard
                </div>
                <Toolbar/>
            </div>
            <div className="ttd-dashboard__columns">
                <div className="ttd-dashboard__columns-inner">
                    <Column isLoading={state.isLoading} title="To do" todos={filter("todo")}/>
                    <Column isLoading={state.isLoading} title="In progress" todos={filter("in_progress")}/>
                    <Column isLoading={state.isLoading} title="Completed" todos={filter("completed")}/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard