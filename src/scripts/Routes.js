import React from 'react'
import {Switch, Route} from "react-router-dom";

// Components
import Dashboard from "./components/todos/Dashboard"

// General
function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/projects" component={Dashboard}/>
            <Route path="/stats" component={Dashboard}/>
            <Route path="/calendar" component={Dashboard}/>
            <Route path="/settings" component={Dashboard}/>
            <Route path="/questions" component={Dashboard}/>
            <Route path="/auth" component={Dashboard}/>
        </Switch>
    )
}

export default Routes