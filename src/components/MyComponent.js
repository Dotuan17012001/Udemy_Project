// class Component
import React from "react";
import DisplayInfor from "./DisplayInfor";
import UserInfor from "./UserInfor";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      {id:1, name: 'John', age: 21},
      {id:2, name: 'Cenna', age: 30},
      {id:3, name: 'Wick', age: 53},
    ],
  };
  render() {
    const myInfor = ['Hello', 'world','LOLOGY']
    return (
      <div>
        <UserInfor/>
        <br />
        <hr />
        <DisplayInfor listUsers={this.state.listUsers}/>
      </div>
    );
  }
}

export default MyComponent;
