import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component{
  state={
    count:0
  };
  add=()=>{
    this.setState({count:this.state.count +1});
  };
  minus=()=>{
    this.setState({count:this.state.count -1});
  };
  render (){
    return (
    <div>
      <h1>
         안녕 난 {this.state.count}만큼잘생긴 평강이야!
      </h1>
      <button onClick={this.add}>+</button> 
      <button onClick={this.minus}>-</button>
    </div>
    )
  }
}
export default App;