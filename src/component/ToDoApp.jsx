import React, {Component } from 'react';
import { Route ,Switch ,BrowserRouter as Router} from 'react-router-dom';
import ToDoListComponent from './ToDoListComponent';
import LoginComponent from './LoginComponent';
import ToDoComponent from './ToDoComponent';
class ToDoApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1>To-Do Application</h1>
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" exact component={LoginComponent} />
                        <Route  path="/todo" exact component={ToDoListComponent} />
                        <Route  path="/todo/:id" component={ToDoComponent} />
                    </Switch>
                </>
            </Router>
        )
    }
}

export default ToDoApp