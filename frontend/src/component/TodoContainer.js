import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MenuComponent from './MenuComponent'
import AddTodoComponent from './AddTodoComponent';
import TodoComponent from './TodoComponent';

class HelloWorldApp extends Component {
    render() {
        return (
            <>
                <Router>
                    <>
                        <MenuComponent />
                        <div className="container">
                            <Switch>
                                <Route path="/" exact component={TodoComponent} />
                                <Route path="/todo" component={TodoComponent} />
                                <Route path="/add-todo" component={AddTodoComponent} />
                            </Switch>
                        </div>
                    </>
                </Router>
            </>
        )
    }
}

export default HelloWorldApp;