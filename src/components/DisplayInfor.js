import React from "react";

class DisplayInfor extends React.Component {
     
      render() {
        console.log(this.props);
        const {name,age} = this.props;
        return(
            <div>
                <div>Name la {name}</div>
                <div>Age la {age}</div>
            </div>
        )
      }
}

export default DisplayInfor;