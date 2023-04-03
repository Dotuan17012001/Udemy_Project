import React from "react";
class AddUserInfor extends React.Component {
    state = {
        name: "",
        channel: "Hoi dan IT",
        age: "",
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
        this.props.handleAddnewUser({
              id: Math.floor((Math.random() *100 ) +1)  + '-random', 
              name: this.state.name,
              age: this.state.age
      });
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

export default AddUserInfor;
