import React from 'react';
import ReactDOM from 'react-dom';
import HomePageBox from './components/HomePageBox.jsx';
import Book from './components/Books.jsx';
import Home from './components/Home.jsx';
import HP from './components/HP.jsx';
import Music from './components/Music.jsx';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

window.onload = () => {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/' component={HomePageBox}>
        <IndexRoute component={Home} />
        <Route path="music" component={Music} />
        <Route path="book" component={Book} />
        <Route path="harryPotter" component={HP} />
      </Route>
    </Router>,
    document.getElementById('app')
    );
}