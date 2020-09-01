import React from "react";
import { Consumer} from "./context";
import Stage1 from './stage1'
import Stage2 from './stage2'
import Stage3 from './stage3'



class Form extends React.Component{
    

    
    render(){    
        
    
        
        return(
            <Consumer>
            
            {({stage_no}) => (  
                <div>
                
                <div className="row justify-content-center form_wraper">
                
                
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                <div className={`stage1 ${ (stage_no !== 1) ? ('stage_inactive') : ('')}`}>1</div>
                <p className="stage_text"> مشخصات فردی</p>
                </div>
                
                <div className={`line1 col-xl-2 col-lg-3 col-md-3 col-sm-3 col-3 ${(stage_no < 2) ? ('stage_inactive') : ('')}`}>
                
                </div>
                
                <div className=" col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                
                <div className={`stage2 ${ (stage_no !== 2) ? ('stage_inactive') : ('')}`}>2</div>
                <p className="stage_text"> سوابق تحصیلی </p>
                
                
                </div>
                
                <div className={`line2 col-xl-2 col-lg-3 col-md-3 col-sm-3 col-3 ${stage_no !==3 ? ('line_inactive') : ('')}`}>
                
                </div>  
                
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                
                <div className={`stage3 ${ (stage_no !== 3) ? ('stage_inactive') : ('')}`}>3</div>
                <p className="stage_text">   بازبینی نهایی </p>
                
                
                </div>
                
                
                </div>
                
        
                <div  className="justify-content-center form_wraper"> 
                {stage_no === 1 ? (
                    <div className="">   
                    
                    <Stage1 value={this.props.value}/>
                    
                    </div>
                    ) : ('')}  
                    
                    {stage_no === 2 ? (
                        <div className="">
                        
                        <Stage2 value={this.props.value}/>  
                        
                        </div> 
                        ) : ('')}
                        
                        
                        {stage_no === 3 ? (
                            <div className="">
                            
                           <Stage3 value={this.props.value}/>  
                            
                            </div>                                                               
                            ) : ('')} 
                            </div>  
                            
                            
                            </div>      
                            )}
                            </Consumer>           
                            
        )}
                            
                            
    }
                        
    export default Form
                        
                        
                        
                        
                        