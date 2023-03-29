// class Component
import React from "react";
import DisplayInfor from "./DisplayInfor";
import UserInfor from "./UserInfor";

class MyComponent extends React.Component {
 
  render() {
    const myInfor = ['Hello', 'world']
    return (
      <div>
        <UserInfor/>
        <DisplayInfor name="Hoi dan MKT" age="777"/>
        <br />
        <hr />
        <DisplayInfor name="Hoi it thoi" age="999" myInfor={myInfor}/>
      </div>
    );
  }
}

export default MyComponent;
