// class Component
import React from "react";

class MyComponent extends React.Component {
    state ={
        name:'Harrry',
        channel:'Hoi dan IT',
        age:'26'
    }

    render() {
          return(
            <div>
                My name is:
                {this.state.name}
                and i'm from 
                {this.state.channel}
            </div>
          )
    }
}

export default MyComponent;