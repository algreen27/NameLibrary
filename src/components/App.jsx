//Exercise 1
import React, { Component } from 'react';
// import DisplayName from './DisplayName';


class App extends Component {
    constructor(props) {
        super(props);
        this.name = [
            {firstName: 'Reggie'},
            {lastName: 'White'}
        ]; 
        // this.state = {
        //     listNumber = 0
        // };
    }

    render(){
        return(

            <div>
                <h1>{this.name[this.state.listNumber].firstName}</h1>
            </div>
        )
    }

}

export default App