import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from './context'



export default class Apps extends React.Component {
  constructor(props){
    super(props)
    
    this.previous_stage = this.previous_stage.bind(this);
    this.next_stage = this.next_stage.bind(this);
    this.previous_stage = this.previous_stage.bind(this);
    
    
    
    
    
    this.state = {
      stage_no: 1,
      valid1: false,
      valid2: false,
      data1: {
        first_name: '',
        last_name: '',
        national_id: '',
        tel: '',
        mobile: '',
        city: '',
        address: '',
        postal_code: '',
        description: ''
      },
      data2:[{university: '', field: '', sub_field: '', grade: '', year: ''}],
      next_stage: (data1, valid1) => this.next_stage (data1,valid1),
      previous_stage: (data) => this.previous_stage(data),
      
    };
    
    
  }
  
  
  
  
  next_stage(data,valid1){
    
    const stage_no = this.state.stage_no;
    
    
    if (valid1){
      
      this.setState({
        valid1: true
      })
      
      if (stage_no === 1) {
        
        
        
        this.setState({
          stage_no: 2,
          data1: data
        })
      }
      
      if (stage_no === 2) {
        
        this.setState({
          stage_no: 3,
          data2: data
        })
      }
      
    }
  } 
  
  
  
  previous_stage(data){
    
    this.setState({
      data2: data
    })
    
    const stage_no = this.state.stage_no;
    
    if (stage_no === 2) {
      
      this.setState({
        stage_no: 1,
        
      })
    }
    
    if (stage_no === 3) {
      
      this.setState({
        stage_no: 2
      })
    }
    
  }
  
  render() {
    
    return (
      
      <Provider value={this.state}>
      
      <App value={this.state} />
      
      </Provider>
      );
    }
  }
  
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(
    <div>
    <Apps />
    </div>
    , rootElement);
    