import React, { Component } from 'react';

class Button extends Component {
    state = {
        clicked: false,
    }
    render() { 
        return ( 
            <div class='btn'>
                Button
            </div>
         )
    }
}
 
export default Button;
