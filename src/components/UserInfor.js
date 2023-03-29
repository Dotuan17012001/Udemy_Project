import React from "react";

class UserInfor extends React.Component {
    state = {
        name: "Harrry",
        channel: "Hoi dan IT",
        age: "26",
      };
    
      handleChange = (event) => {
        this.setState({
          name: event.target.value,
        });
      };
    
      handleChangeAge = (event) => {
        this.setState({
          age: event.target.value,
        });
      };
    
      handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
      };
    render() {
    return (
      <div>
        My name is:
        {this.state.name} and i'm from {this.state.channel}
        i'm {this.state.age}
        <form onSubmit={this.handleSubmit}>
          <label>Your name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <label>Your age</label>
          <input
            type="text"
            value={this.state.age}
            onChange={this.handleChangeAge}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default UserInfor;
