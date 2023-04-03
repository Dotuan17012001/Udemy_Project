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
          <div>
            {listUsers.map((user) => {
              return (
                <ul key={user.id} className={+user.age > 26 ? "red" : "green"}>
                  <li style={{color:'blue',paddingTop:'20px'}}>Toi ten la {user.name}</li>
                  <li>Tuoi cua toi la {user.age}</li>
                  <hr />
                </ul>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfor;
