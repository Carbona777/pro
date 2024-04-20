import React from "react";

class Welcome extends React.Component {
  constructor(props) {
    console.log("constructor Phase");
    super(props);
    this.state = {
      Fname: "Youssef",
      Lname: "Mhamed",
    };
    this.changeName = this.changeName.bind(this);
  }

  componentDidMount() {
  
    console.log("componentDidMount Phase");
  }
  changeName =()=>{
    
        this.setState({
          Lname: "Mohameddf",
        });
              
  }

  render() {
    console.log("render Phase");
    console.log(this.props);
    console.log(this.state);
    return (
      <>
        <h1>Class Component, {this.props.name}</h1>
        <p>Age: {this.props.age}</p>
        <p>Title: {this.props.title}</p>
        <button onClick={this.changeName} > change my name</button>
        <h6>Created by {this.state.Fname} {this.state.Lname}</h6>
      </>
    );
  }
}

export default Welcome;
