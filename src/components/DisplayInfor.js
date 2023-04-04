import React from "react";
import './DisplayInfor.scss';
import logo from '../logo.svg';

class DisplayInfor extends React.Component {
  state = {
    isShowListUser: true,
  };
  handleShowHide = () => {
    this.setState({ isShowListUser: !this.state.isShowListUser });
  };
  // handleDeleteUserq = (user) => {
  //       this.props.handleDeleteUser(user.id);
  // };
  render() {
    const { listUsers } = this.props;
    return (
      <div className="display-infor-container">
        <img src={logo}/>
        <div>
          <span onClick={this.handleShowHide} style={{cursor:'pointer'}}>
           
            {this.state.isShowListUser === true? 'Hide list user':'Show List User'}

          </span>
        </div>

        {this.state.isShowListUser && (
          <>
            {listUsers.map((user) => {
              return (
                <ul key={user.id} className={+user.age > 26 ? "red" : "green"}>
                  <li style={{color:'blue',paddingTop:'20px'}}>Toi ten la {user.name}</li>
                  <li>Tuoi cua toi la {user.age}</li>
                  <button onClick={()=>{this.props.handleDeleteUser(user.id)}}>Delete</button>
                  <hr />
                </ul>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

export default DisplayInfor;
