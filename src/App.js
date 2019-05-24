import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Dashboard from './containers/Dashboard';
import Book from './containers/Book';

function App() {
    return (
        <Provider store={configureStore()}>
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route exact path="/book/:id?" component={Book} />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
