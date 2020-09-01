import React from "react";
import { Consumer } from "./context";




class Stage3 extends React.Component{
    
    constructor(props){
        
        super(props);
        
        this.finalize = this.finalize.bind(this);
        
        
        
        
        this.state = {
            
            send_req_result: ''
        }
        
    }
    
    
    
    finalize(e){

        const data1 = this.props.value.data1;
        const data2 = this.props.value.data2;

        let final_data =  {
                first_name: data1.first_name,
                last_name: data1.last_name,
                national_id: data1.national_id,
                tel: data1.tel,
                mobile: data1.mobile,
                city: data1.city,
                address: data1.address,
                postal_code: data1.postal_code,
                description: data1.description,
                degress:data2
            };

  
        e.preventDefault();
                    
              
            fetch('https://reqres.in/api/users', {
            method: "POST",
            headers:{
                 Authorization: 'token',
                'Content-type': 'application/json'
            }, 
            body:JSON.stringify({   

              data: final_data,

            })
        }) 
        
        .then(response => {
            
            if (response.status === 201){
                
                this.setState({
                    
                    send_req_result: true
                    
                })
                
                
            }else{
                
                this.setState({
                    
                    send_req_result: false
                    
                })
                
            }
            
        }).catch(error => {
            
 
        })
        
   
        
    }                               
    
    render(){
        
  
        return(

            
<Consumer>
    
    {({previous_stage, data1, data2}) => (  
    <div id="review">
        
        
        
        <h5 style={{fontWeight: 'bold'}}>اطلاعات فردی</h5>
        
        <hr/>                    
        
        <div className="form-group row ">
            <div className="col-xl-4 col-lg-4 col-md-4 col-4">
                <label htmlFor="first_name" className="col-form-label">
                    نام:
                </label>
                
                <input type="text" name="first_name"  id="first_name" value={data1.first_name } />
                
            </div>
            
            <div className="col-xl-4 col-lg-4 col-md-4 col-4">
                <label htmlFor="last_name" className="col-form-label">
                    نام خانوادگی:
                </label>
                
                <input type="text" name="last_name"  id="last_name" value={data1.last_name} />
                
                
            </div>
            
            <div className="col-xl-4 col-lg-4 col-md-4 col-4">
                <label htmlFor="national_id" className="col-form-label">
                    کد ملی:  
                </label>
                
                <input type="text" name="national_id"  maxLength='10'  value={data1.national_id} />
                
                
            </div>
            
            
        </div>
        
        <div className="form-group row ">
            <div className="col-xl-4 col-lg-4 col-md-4 col-4">
                <label htmlFor="tel" className="col-form-label">
                    تلفن ثابت: 
                </label>
                
                <input type="tel" name="tel"   value={data1.tel} />
                
            </div>
            
            <div className="col-xl-4 col-lg-4 col-md-4 col-4">
                <label htmlFor="mobile" className="col-form-label">
                    تلفن همراه: 
                </label>
                
                <input type="tel" name="mobile"   value={data1.mobile} />
                
            </div>
            
        </div>
        
        
        <div className="form-group row ">
            <div className="col-xl-4 col-lg-4 col-md-4 col-4">
                <label htmlFor="city" className="col-form-label">
                    شهر: 
                </label>
                
                <input type="text" name="city"   value={data1.city}/>
                
            </div>
            
            <div className="col-xl-4 col-lg-4 col-md-4 col-4">
                <label htmlFor="postal_code" className="col-form-label">
                    کدپستی: 
                </label>
                
                <input type="text" name="postal_code"   value={data1.postal_code } />
                
            </div>
            
            <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                <label htmlFor="address" className="col-form-label">
                    آدرس: 
                </label>
                
                <input type="text" name="address"  value={data1.address}/>
                
            </div>
        </div>
        
        <div className="form-group row col-12">
            <label className="col-form-label" htmlFor="description">توضیحات:</label>
            <input  name="description" id="description"  value={data1.description} />
        </div>
        
        <h5 style={{fontWeight: 'bold'}}> سوابق تحصیلی</h5>
        
        <hr/>        
        
        {data2.map(row =>  (
            
            
            <div>
                <i class='fa fa-graduation-cap'></i>
                <h6 style={{fontWeight: 'bold'}}>  مدرک تحصیلی {1 +data2.indexOf(row)} </h6>
                <hr/>
                
                
                <div className="form-group row ">
                    <div className="col-4">
                        <label htmlFor="university" className="col-form-label">
                            دانشگاه:
                        </label>
                        
                        <input type="text" name="university"  id="university" value={row.university } />
                        
                    </div>
                    
                    <div className="col-4">
                        <label htmlFor="field" className="col-form-label">
                            رشته تحصیلی:
                        </label>
                        
                        <input type="text" name="field"  id="field" value={row.field } />
                        
                    </div>
                    
                    
                    <div className="col-4">
                        <label htmlFor="sub_field" className="col-form-label">
                            گرایش:
                        </label>
                        
                        <input type="text" name="sub_field"  id="sub_field" value={row.sub_field } />
                        
                    </div>
                    
                    
                    <div className="col-4">
                        <label htmlFor="grade" className="col-form-label">
                            معدل:
                        </label>
                        
                        <input type="text" name="grade"  id="grade" value={row.grade } />
                        
                    </div>
                    
                    
                    <div className="col-4">
                        <label htmlFor="year" className="col-form-label">
                            سال پایان:
                        </label>
                        
                        <input type="text" name="year"  id="year" value={row.year } />
                        
                    </div>
                </div>
                
                
            </div>
            ))
            
        }

            <div className="row">

           {this.state.send_req_result && this.state.send_req_result !== '' ? (

                <div className={`col-12`} >
                    <div className="alert alert-success" role="alert">
                        ارسال درخواست با موفقیت انجام شد
                    </div>
                </div>

           ):('')} 

          {!this.state.send_req_result && this.state.send_req_result !== '' ? (

                <div className={`col-12 `} >
                    <div className="alert alert-warning" role="alert">
                        خطا در ارسال درخواست! لطفا دوباره سعی نمایید
                    </div>
                </div>
                
           ):('')}  
            </div>
        
        <div className="row">
                    

                    <div className="col-6" style={{textAlign: 'right'}}>
     
 
                        <button className="sbm_req btn btn-primary next_previous" type="click"  onClick={() => previous_stage(data2)}>
                            قبل
                        </button>

                    </div>
                        

                <div className="col-6" style={{textAlign: 'left'}}>
                    
                
                        <button className="sbm_req btn btn-primary next_previous" type="click"  onClick={e => this.finalize(e)}>
                            ارسال فرم
                        </button>
     
                </div>
                    
        </div>
                
  
    </div>
        
        
   
    
    
    )}
    
</Consumer>


            
            
            )
        }
        
    }
    
    export default Stage3