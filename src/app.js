import React from 'react';
import View from './view';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: 'This is TEXT!'
        }
    }
    render(){
        let text = this.state.text;
        return(<View text={text}/>)
    }
}

export default App;