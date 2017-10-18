import React, {PropTypes} from 'react';

class App extends React.Component{
  render(){
    return {
      <div className="Container-fluid">
        <p>header...</p>
        {this.props.children}
      </div>
    };
  }
}

App.propTypes = {
    children: propTypes.object.isRequired
  };


export default App;
