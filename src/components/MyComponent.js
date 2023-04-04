// class Component
import React from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "John", age: 26 },
      { id: 2, name: "Cenna", age: 30 },
      { id: 3, name: "Wick", age: 13 },
      { id: 4, name: "Khoa", age: 107 },
    ],
  };

  handleAddnewUser = (userObject) => {
    console.log(userObject);
    this.setState({
      listUsers: [userObject, ...this.state.listUsers],
    });
  };

  handleDeleteUser = (userId) => {
       let listUsersClone = [...this.state.listUsers];
       listUsersClone = listUsersClone.filter(item => item.id !== userId)
       this.setState({
           listUsers: listUsersClone
       });
  };

  render() {
   
    return (

      <>
        <div className="a">
          <AddUserInfor handleAddnewUser={this.handleAddnewUser} />
          <br />
          <hr />
          <DisplayInfor 
                listUsers={this.state.listUsers} 
                handleDeleteUser={this.handleDeleteUser}/>
        </div>
        <div className="b">

        </div>
      </>
    );
  }
}

export default MyComponent;
