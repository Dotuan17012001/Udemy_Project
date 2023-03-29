// class Component
import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Harrry",
    channel: "Hoi dan IT",
    age: "26",
  };
  
  handleChange = (event) => {
   
    this.setState({
      name: event.target.value
    })
  };
  
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
  };

  render() {
    return (
      <div>
        My name is:
        {this.state.name} and i'm from {this.state.channel}
        i'm {this.state.age}
        
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}/>
          <button>Submit</button>
        </form>
       
      </div>
    );
  }
}

export default MyComponent;
