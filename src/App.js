import React from 'react';
import './App.css';
import Form from './multi-stage_form'

export default class App extends React.Component {

  render(){

    return(
         <div>
           <Form value={this.props.value}/>
         </div>
    )
  }


}

