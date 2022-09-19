import React, { useState } from 'react';

function CrupApp(){
    const [text,setText] = useState();
    const [email,setEmail] = useState();
    // const [main,setMain] = useState();
const [data,setData] = useState([{
    name : '',
    email: ''
}]);



    // const formhandler = (e)=>{
    //     e.preventDefault();
    // //  console.log(text);
    // //  console.log(email);
    // console.log(text,email);
    // }

    
    return(
        <>
            <div>
            <h1>Crud App By React js </h1>
                <form>

                    <input type='text' placeholder='Name' value={data.name} onChange={(e)=>setText({...data,text: e.target.value})}/><br/>
                    <input type='email' placeholder='Email' value={data.email} onChange={(e)=>setEmail({...data,email:e.target.value})}/><br/>
                    <input type='submit'/><br/>

            
                   
                </form>
            </div>
        </>
    )
}
export default CrupApp;