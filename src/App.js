import React from 'react';

class App extends React.Component{
  state={
    bIsLoading:true
  };
  componentDidMount(){
    //this.setState(current=>({bIsLoading:current.bIsLoading=false}));
    setTimeout(
      ()=>{
        this.setState({bIsLoading:false});
      },
      6000
    );
  }
  render (){
    const {bIsLoading}=this.state;
    return (
    <div>
      {bIsLoading? "Loading...":"We Are Ready"}
    </div>
    )
  }
}
export default App;