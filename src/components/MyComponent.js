// class Component
import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Harrry",
    channel: "Hoi dan IT",
    age: "26",
  };
  
  handleClick = () => {
    console.log("Click to help",this.state.age);

    this.setState({
      name: "Ericcc ",
      age: Math.floor((Math.random()*100)+1),
    });

  };

  handleOver = (e) => {
    console.log(e.pageX);
  };

  render() {
    return (
      <div>
        My name is:
        {this.state.name} and i'm from {this.state.channel}
        i'm {this.state.age}
        <button onClick={this.handleClick}>Click me</button>
        <button onMouseOver={this.handleOver}>Hover me</button>
      </div>
    );
  }
}

export default MyComponent;
