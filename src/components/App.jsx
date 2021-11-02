//Exercise 1

import { returnStatement } from 'babel-types';
import render from 'dom-serializer';
import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = [
            {firstName: 'Reggie'},
            {lastName: 'White'}
        ]; 
    }

    render(){
        return(
            <h1>this.state</h1>
        )
    }

}

export default App