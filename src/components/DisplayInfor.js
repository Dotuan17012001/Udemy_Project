import React from "react";

class DisplayInfor extends React.Component {
      
      render() {  
        const {listUsers} = this.props;
        console.log(listUsers);
        return(
            <div>
                {listUsers.map((user)=>{
                  return (
                    <ul key={user.id}>
                       <li>My name is {user.name}</li>
                       <li>And I'm {user.age}</li>
                    </ul>
                  )
                })}
            </div>
        )
      }
}

export default DisplayInfor;