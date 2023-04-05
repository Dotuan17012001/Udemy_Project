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

  // const [name, setName] = useState({ name: "", channel: "Hoi dan IT88", age: "" });
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [channel, setChannel] = useState('Hoi dan IT88');

  const handleChangeName = (event) => {
    setName(event.target.value)
  };

  const handleChangeAge = (event) => {
    setAge(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleAddnewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: name,
      age: age,
    });
  };

  return (
    <div>
      My name is:
      {name} and i'm from {channel}
      i'm {age}
      <form onSubmit={(event)=>handleSubmit(event)}>
        <label>Your name</label>
        <input
          type="text"
          value={name}
          onChange={(event)=>handleChangeName(event)}
        />

        <label>Your age</label>
        <input
          type="text"
          value={age}
          onChange={(event)=>handleChangeAge(event)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default AddUserInfor;
