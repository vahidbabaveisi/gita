import React from "react";
import {Consumer } from "./context";



class Stage2 extends React.Component{
    
    constructor(props){
        super(props);
        
        this.addrow = this.addrow.bind(this);
        this.removeRow = this.removeRow.bind(this);
        this.validation_stage2 = this.validation_stage2.bind(this);
        this.state = {
            
            data2: this.props.value.data2,
            valid2: 'none'
            
        }
        
        
    }
    
    parm_set(e){
        
        
        
        const name = e.target.name;
        const value = e.target.value;
        const data = this.state.data2;
        const id = e.target.id;
        
        
        switch (name) {
            
            case 'university':
            
            data[id].university = value;
            
            this.setState({
                data2: data
            })
            
            break;
            
            case 'field':
            
            data[id].field = value;
            
            this.setState({
                data2: data
            })
            
            break;  
            
            
            
            case 'sub_field':
            
            data[id].sub_field = value;
            
            this.setState({
                data2: data
            })
            break;  
            
            
            case 'grade':
            
            data[id].grade = value;
            
            this.setState({
                data2: data
            })
            break;           
            
            case 'year':
            
            data[id].year = value;
            
            this.setState({
                data2: data
            })
            break;             
            
            default:
            break;
        }
        
        
    } 
    
    addrow(){
        const data = this.state.data2;
        this.setState({
            data2: [...data, {university: '', field: '', sub_field: '', grade: '', year: ''}]
        })
        
    }
    
    removeRow(e){
        
        const data = this.state.data2;
        const id_row = e.target.id;
        
        data[id_row] = []
        data.splice(id_row, 1)
        
        
        this.setState({
            data2: data
        })
        
    }
    
    validation_stage2(){
        
        const val = this.state.data2;
        
        
        const university = val.filter(itm =>  itm.university === '')
        const field = val.filter(itm =>  itm.field === '')
        const sub_field = val.filter(itm =>  itm.sub_field === '')
        const grade = val.filter(itm =>  itm.grade === '')
        const year = val.filter(itm =>  itm.year === '')
        
        const result = university.length + field.length + sub_field.length + grade.length + year.length;
        
        if (result > 0)
        this.setState({
            valid2: false
        })
        else{
            this.setState({
                valid2: true
            })  
        }
        
        
    }
    
    
    
    
    render(){
        
        const data =  this.state.data2;
        const valid =  this.state.valid2;
        
        return(
            
            
            <Consumer>
            
            {({previous_stage, next_stage}) => (  

<div>
<h3> سوابق تحصیلی</h3>
<hr/>

<h4>
    <i className="fa fa-plus" aria-hidden="true" onClick={this.addrow}></i>
    <span style={{marginRight: '10px'}} >افزودن</span>  
</h4>


{Object.keys(data).map((itm,index) => 
    
    
    
    <div id={`accordion`}>
        <div className="card">
            <div className="card-header" id={`heading${index}`}>
                
                <h5 className="mb-0">

                {index !==0 ? (
                            <span >  
                       
                                <i id= {index} onClick={this.removeRow} className="fa fa-minus" aria-hidden="true"></i>
                            
                            </span>
                            
                            ):('')} 
                    
                    <button className="btn btn-link btn-degree" data-toggle="collapse" data-target={`#degree${index}`} aria-expanded="true" aria-controls={`degree${index}`}>
                    
                      <span id="title_degree" style={{marginRight: '10px'}}>{`سابقه تحصیلی ${index + 1}`}</span>

                    </button> 

  
                    </h5>
                </div>
                
                <div id={`degree${index}`} className={`collapse ${(this.state.valid2 !== '') ? ('show'): ('')}`} aria-labelledby={`heading${index}`} data-parent="#accordion">
                    <div className="card-body">
                        
                        
                        
                        
                        <form id="form_request" className={`needs-validation ${(valid) ? ('') : ('was-validated') }`} noValidate autoComplete="off" style={{padding: '10px'}}>
                            
                            
                            <div className="form-group row ">
                                <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                                    <label htmlFor="university" className="col-form-label">
                                        دانشگاه * 
                                    </label>
                                    
                                    <input type="text" name="university" className="form-control" id={index} value={data[index].university} onChange={e=>this.parm_set(e)}  required/>
                                    <div className="invalid-feedback">
                                        نام دانشگاه را وارد نمایید 
                                    </div>
                                </div>
                                
                                <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                                    <label htmlFor="field" className="col-form-label">
                                        رشته تحصیلی * 
                                    </label>
                                    
                                    <input type="text" name="field" className="form-control" id={index} value={data[index].field} onChange={e=>this.parm_set(e)} required/>
                                    <div className="invalid-feedback">
                                        رشته تحصیلی را وارد نمایید 
                                    </div>
                                    
                                </div>
                                
                                <div className="col-xl-2 col-lg-2 col-md-2 col-12">
                                    <label htmlFor="sub_field" className="col-form-label">
                                        گرایش * 
                                    </label>
                                    
                                    <input type="text" name="sub_field" className="form-control" id={index} value={data[index].sub_field} onChange={e=>this.parm_set(e)} required/>
                                    <div className="invalid-feedback">
                                        گرایش را وارد نمایید 
                                    </div>
                                    
                                </div>
                                
                                <div className="col-xl-2 col-lg-2 col-md-2 col-12">
                                    <label htmlFor="grade" className="col-form-label">
                                        معدل * 
                                    </label>
                                    
                                    <input type="text" name="grade" className="form-control" id={index} value={data[index].grade} onChange={e=>this.parm_set(e)}  style={{direction: 'ltr'}} required/>
                                    <div className="invalid-feedback">
                                        معدل را وارد نمایید 
                                    </div>
                                </div>
                                
                                <div className="col-xl-2 col-lg-2 col-md-2 col-12">
                                    <label htmlFor="year" className="col-form-label">
                                        سال پایان * 
                                    </label>
                                    
                                    <input type="text" name="year" className="form-control" id={index} value={data[index].year} onChange={e=>this.parm_set(e)} required style={{direction: 'ltr'}}/>
                                    <div className="invalid-feedback">
                                        سال پایان را وارد نمایید 
                                    </div>
                                </div>
                            </div>
                            
                            
                        </form>
                        
                        
                    </div>
                </div>
            </div>
            
            
        </div>
                
                
                
                )}
                
                
                
                
                <div className="row" style={{marginTop: '10px'}}>
                
                
                <div className="col-6">
                
                
                <button className="btn btn-primary" type="click"  onClick={() => previous_stage(data)} >
                قبلی
                </button>
                
                </div>
                
                {(valid === true) ? (  
                    
                    <div className="col-6" style={{textAlign: 'left'}}>
                    
                    <button className="btn btn-primary" id="sbmbutton" type="click" onMouseDown={this.validation_stage2} onClick={(data2,valid2) => next_stage(data,true)}  >
                    بعد
                    </button>
                    </div>
                    ): (
                        
                        <div className="col-6" style={{textAlign: 'left'}}>
                        
                        <button className="btn btn-primary" id="sbmbutton" type="click" onMouseDown={this.validation_stage2}  onClick={(data2,valid2) => next_stage(data,false)} >
                        بعد
                        </button>
                        </div>
                        
                        
                        
                        )}                
                        </div>       
                        
                        
                        </div>  
                        
                        
                        )}
                        </Consumer>  
                        
                        
                        
                        
                        
                        )
                    }
                    
                }
                
                export default Stage2