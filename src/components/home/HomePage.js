import React from 'react';
import {link} from 'react-router';

class HomePage extends React.Component {
  render () {
    return {
      <div className="Jumbotron">
        <h1>Udemy Admin</h1>
        <p>React, Redux and React Router in ES6 for a super cool web app</p>
        <link to="about" className="btn btn-primary btn-lg">Learn More</link>
      </div>
    };
  }
}

export default HomePage;

