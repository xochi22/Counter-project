import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import 'semantic-ui-css/semantic.min.css'

import Button from './Button';
import Count from './Count';

class App extends Component{

    state = {

        count:0
    }

    incrementCount = id => {
        this.setState(prevState => {
            return{
              count: prevState.count +id  
            }
        })
    }

    render(){
        return(
            <div style= {{textAlign : 'center'}}>
                <br/>
              <Count counter={this.state.count}/>
                <br/>
                
              <Button incrementCount={this.incrementCount} value={1}/>
              <Button incrementCount={this.incrementCount} value={2}/>
              <Button incrementCount={this.incrementCount} value={5}/>
              <Button incrementCount={this.incrementCount} value={10}/>
              <Button incrementCount={this.incrementCount} value={50}/>
              <Button incrementCount={this.incrementCount} value={100}/>
              <Button incrementCount={this.incrementCount} value={500}/>
              <Button incrementCount={this.incrementCount} value={1000}/>
            </div>
        );
    };
};
ReactDOM.render
(<App/>, document.querySelector('#root')
    );