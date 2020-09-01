import React from "react";
import { Consumer } from "./context";
import './validation_javascript'



class Stage1 extends React.Component{
    
    constructor(props){
        
        super(props);
        
        this.validation_stage1 = this.validation_stage1.bind(this)
        
        
        this.state = {
            data: this.props.value.data1,
            valid1: 'none'
            
            
        }
        
        
    }
    
    parm_set(e){
        
        
        
        const name = e.target.name;
        const value = e.target.value;
        const data = this.state.data;
        
        
        switch (name) {
            
            case 'first_name':
            
            data.first_name = value;
            
            this.setState({
                data: data
            })
            
            break;
            
            case 'last_name':
            
            data.last_name = value;
            
            this.setState({
                data: data
            })
            
            break;  
            
            
            
            case 'national_id':
            
            data.national_id = value;
            
            this.setState({
                data: data
            })
            break;     
            
            case 'tel':
            
            data.tel = value;
            
            this.setState({
                data: data
            })
            
            break;
            
            case 'mobile':
            
            data.mobile = value;
            
            this.setState({
                data: data
            })
            break;   
            
            
            
            case 'city':
            
            data.city = value;
            
            this.setState({
                data: data
            })
            
            break; 
            
            
            case 'postal_code':
            
            data.postal_code = value;
            
            this.setState({
                data: data
            })
            
            break;  
            
            
            
            case 'address':
            
            data.address = value;
            
            this.setState({
                data: data
            })
            
            break;  
            
            
            case 'description':
            
            data.description = value;
            
            this.setState({
                data: data
            })
            
            break;  
            
            
            default:
            break;
        }
        
    }
    
    
    validation_stage1(){
        
        
        const val = this.state.data;
        
        
        
        const first_name = val.first_name !== ''
        const last_name = val.last_name !== ''
        const national_id = val.national_id !== '' && val.national_id.length === 10
        
        const tel = val.tel !== '' && val.tel.length === 11
        const mobile = val.mobile !== '' && val.mobile.length === 11
        
        const city = val.city !== ''
        const postal_code = val.postal_code !== '' && val.postal_code.length === 10
        const address = val.address !== ''
        
        const result = first_name && last_name && national_id && tel && mobile && city && postal_code && address;
        
        this.setState({
            valid1: result
        })
        
        
    }
    
    
    
    
    render(){
        
        const data = this.state.data ;
        const valid = this.state.valid1;
        
        return(
            
            <Consumer>
            
            {({next_stage}) => (  
                
                                    
                <div>
                        
                <form id="form_request" className={`needs-validation ${(valid) ? ('') : ('was-validated') }`} noValidate autoComplete="off" style={{padding: '10px'}} >
                    
                    
                    <div className="form-group row ">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                            <label htmlFor="first_name" className="col-form-label">
                                نام * 
                            </label>
                            
                            <input type="text" name="first_name" className="form-control" id="first_name" value={data.first_name } onChange={e=>this.parm_set(e)} required/>
                            <div className="invalid-feedback">
                                نام را وارد نمایید 
                            </div>
                        </div>
                        
                        <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                            <label htmlFor="last_name" className="col-form-label">
                                نام خانوادگی * 
                            </label>
                            
                            <input type="text" name="last_name" className="form-control" id="last_name" value={data.last_name} onChange={e=>this.parm_set(e)} required/>
                            <div className="invalid-feedback">
                                نام خانوادگی را وارد نمایید 
                            </div>
                            
                        </div>
                        
                        <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                            <label htmlFor="national_id" className="col-form-label">
                                کد ملی *
                            </label>
                            
                            <input type="text" name="national_id" className="form-control" pattern="[0-9]{10}" id="national_id" maxLength='10'  value={data.national_id} onChange={e=>this.parm_set(e)} required/>
                            <div className="invalid-feedback">
                                کد ملی را وارد نمایید 
                            </div>
                            
                        </div>
                        
                        
                    </div>
                    
                    <div className="form-group row ">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                            <label htmlFor="tel" className="col-form-label">
                                تلفن ثابت *
                            </label>
                            
                            <input type="tel" name="tel" className="form-control" id="tel" maxLength="11" pattern="[0-9]{11}" value={data.tel} onChange={e=>this.parm_set(e)} required/>
                            <div className="invalid-feedback">
                                تلفن ثابت را وارد نمایید 
                            </div>
                        </div>
                        
                        <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                            <label htmlFor="mobile" className="col-form-label">
                                تلفن همراه *
                            </label>
                            
                            <input type="tel" name="mobile" className="form-control" id="mobile" pattern="[0-9]{11}" maxLength="11" value={data.mobile} onChange={e=>this.parm_set(e)}  required/>
                            <div className="invalid-feedback">
                                تلفن همراه را وارد نمایید 
                            </div>
                        </div>
                        
                    </div>
                    
                    
                    <div className="form-group row ">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                            <label htmlFor="city" className="col-form-label">
                                شهر *
                            </label>
                            
                            <input type="text" name="city" className="form-control" id="city" value={data.city} onChange={e=>this.parm_set(e)} required/>
                            <div className="invalid-feedback">
                                نام شهر را وارد نمایید 
                            </div>
                        </div>
                        
                        <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                            <label htmlFor="postal_code" className="col-form-label">
                                کدپستی *
                            </label>
                            
                            <input type="text" name="postal_code" className="form-control" id="postal_code" pattern="[0-9]{10}" maxLength="10" value={data.postal_code } onChange={e=>this.parm_set(e)}  required/>
                            <div className="invalid-feedback">
                                کدپستی را وارد نمایید 
                            </div>
                        </div>
                        
                        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                            <label htmlFor="address" className="col-form-label">
                                آدرس *
                            </label>
                            
                            <input type="text" name="address" className="form-control" id="address" value={data.address} onChange={e=>this.parm_set(e)}  required/>
                            <div className="invalid-feedback">
                                آدرس را وارد نمایید 
                            </div>
                        </div>
                    </div>
                    
                    <div className="form-group row col-6">
                        <label className="col-form-label" htmlFor="description">توضیحات</label>
                        <textarea className="form-control" name="description" id="description" rows="3" value={data.description} onChange={e=>this.parm_set(e)}></textarea>
                    </div>
                    
                    
                    
                </form>
                
                
                <div className="row">
                    
                    
                    <div className="col-6">
                        
                        
                    </div>
                    
                    {valid ? (
                        <div className="col-6" style={{textAlign: 'left'}}>
                            
                            <button className="btn btn-primary" id="sbmbutton" type="click" onMouseDown={this.validation_stage1} onClick={(data1,valid1) => next_stage (data,true)}  >
                                بعد
                            </button>
                        </div>
                        ): (
                        <div className="col-6" style={{textAlign: 'left'}}>
                            
                            <button className="btn btn-primary" id="sbmbutton" type="click" onMouseDown={this.validation_stage1} onClick={(data1,valid1) => next_stage (data,false)}  >
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
        
        export default Stage1