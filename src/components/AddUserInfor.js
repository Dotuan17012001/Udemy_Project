import React from "react";
import { useState } from "react";
// class AddUserInfor extends React.Component {
//     state = {
//         name: "",
//         channel: "Hoi dan IT",
//         age: "",
//       };
    
//       handleChange = (event) => {
//         this.setState({
//           name: event.target.value,
//         });
//       };
    
//       handleChangeAge = (event) => {
//         this.setState({
//           age: event.target.value,
//         });
//       };
    
//       handleSubmit = (event) => {
//         event.preventDefault();
//         this.props.handleAddnewUser({
//               id: Math.floor((Math.random() *100 ) +1)  + '-random', 
//               name: this.state.name,
//               age: this.state.age
//       });
//       };
//     render() {
//     return (
//       <div>
//         My name is:
//         {this.state.name} and i'm from {this.state.channel}
//         i'm {this.state.age}
//         <form onSubmit={this.handleSubmit}>
//           <label>Your name</label>
//           <input
//             type="text"
//             value={this.state.name}
//             onChange={this.handleChange}
//           />

//           <label>Your age</label>
//           <input
//             type="text"
//             value={this.state.age}
//             onChange={this.handleChangeAge}
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }
const AddUserInfor = (props) => {

  const [infor, setInfor] = useState({ name: "", channel: "Hoi dan IT88", age: "" });

  const handleChangeName = (event) => {
    setInfor({
      name: event.target.value
    })
  };

  const handleChangeAge = (event) => {
    setInfor({
      age: event.target.value
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleAddnewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: infor.name,
      age: infor.age,
    });
  };

  return (
    <div>
      My name is:
      {infor.name} and i'm from {infor.channel}
      i'm {infor.age}
      <form onSubmit={(event)=>handleSubmit(event)}>
        <label>Your name</label>
        <input
          type="text"
          value={infor.name}
          onChange={(event)=>handleChangeName(event)}
        />

        <label>Your age</label>
        <input
          type="text"
          value={infor.age}
          onChange={(event)=>handleChangeAge(event)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default AddUserInfor;
