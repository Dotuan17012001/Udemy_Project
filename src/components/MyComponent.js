// class Component
import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Harrry",
    channel: "Hoi dan IT",
    age: "26",
  };

  handleClick = () => {
    console.log("Click to help");
  };

  handleOver = (e) => {
    console.log(e.pageX);
  };

  render() {
    return (
      <div>
        My name is:
        {this.state.name}
        and i'm from
        {this.state.channel}
        <button onClick={this.handleClick}>Click me</button>
        <button onMouseOver={this.handleOver}>Hover me</button>
      </div>
    );
  }
}

export default MyComponent;
