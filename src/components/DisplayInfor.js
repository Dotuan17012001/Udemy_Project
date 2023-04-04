import React from "react";
import './DisplayInfor.scss';
import logo from '../logo.svg';

//stateless vs statefull
// class DisplayInfor extends React.Component {
//   render() {
//     const { listUsers } = this.props;
//     console.log('>>> Render : called')
//     return (
//       <div className="display-infor-container">
//         <img src={logo}/>
        

//         {true && (
//           <>
//             {listUsers.map((user) => {
//               return (
//                 <ul key={user.id} className={+user.age > 26 ? "red" : "green"}>
//                   <li style={{color:'blue',paddingTop:'20px'}}>Toi ten la {user.name}</li>
//                   <li>Tuoi cua toi la {user.age}</li>
//                   <button onClick={()=>{this.props.handleDeleteUser(user.id)}}>Delete</button>
//                   <hr />
//                 </ul>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfor = (props) =>{
    const { listUsers } = props;
    return (
      <div className="display-infor-container">
        <img src={logo}/>
        
        {true && (
          <>
            {listUsers.map((user) => {
              return (
                <ul key={user.id} className={+user.age > 26 ? "red" : "green"}>
                  <li style={{color:'blue',paddingTop:'20px'}}>Toi ten la {user.name}</li>
                  <li>Tuoi cua toi la {user.age}</li>
                  <button onClick={()=>{props.handleDeleteUser(user.id)}}>Delete</button>
                  <hr />
                </ul>
              );
            })}
          </>
        )}
      </div>
    );
}

export default DisplayInfor;
