import React from 'react';
import Book from './Books.jsx';
import Home from './Home.jsx';
import HP from './HP.jsx';
import Music from './Music.jsx';
import {Link} from 'react-router';

class HomePageBox extends React.Component{
  
  render(){
    return(
      <div>
        <h4>Main Library Page</h4>
        <ul>
          <button><Link to='/music'>Music Library</Link></button>
          <button><Link to='/book'>Book Library</Link></button>
          <button><Link to='/harryPotter'>Harry Potter Library</Link></button>
          <button><Link to='/'>Home</Link></button>
        </ul>
        {this.props.children}
      </div>
      )
  }

}

export default HomePageBox;
