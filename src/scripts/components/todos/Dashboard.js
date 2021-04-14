import React, {useEffect} from "react";
import {connect} from "react-redux";

// Components
import Todo from "./Todo";
import Toolbar from "./DashboardToolbar";

// Actions
import loadTodos from "../../redux/todos/actions";

// General

function Column({title}) {
    return (
        <div className="ttd-dashboard__column">
            <div className="ttd-dashboard__column-headline">
                {title}
                <span className="ttd-dashboard__column-headline__count">( 1 )</span>
            </div>
            <div className="ttd-dashboard__column-inner">
                <Todo
                    img="https://cdn.dribbble.com/users/1187002/screenshots/15378278/media/b12fe4276137f73ea3d629e41c2fd192.png?compress=1&resize=1000x750"
                />
            </div>
        </div>
    )
}

function Dashboard({todos, dispatch}) {

    useEffect(() => {
        dispatch(loadTodos())
    }, [])

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
                    <Column title="To do"/>
                    <Column title="In progress"/>
                    <Column title="Completed"/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({todos: state.todos})
export default connect(mapStateToProps)(Dashboard)