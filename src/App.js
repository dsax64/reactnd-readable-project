import React, { Component } from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import Home from './Views/Home';
import Category from './Views/Category';
import Post from './Views/Post';
import CreateOrEditPost from './Views/CreateOrEditPost';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/edit/post/:id" component={CreateOrEditPost} />
                <Route path="/category/:id" component={Category} />
                <Route path="/post/:id" component={Post} />
                <Route path="/" component={Home} />
            </Switch>
        );
    }
}

export default App;
