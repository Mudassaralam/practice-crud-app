import { Tab } from 'bootstrap';
import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

function CrudOperation(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [list,setList] = useState([]);
    
    const formhandler = (e)=>{
            e.preventDefault();
            console.log(name,email);
            const data = {name,email};
            if(name && email){
                setList((li)=>[...li,data]);
                setName('');
                setEmail('');
            }
    }
    return(
        <>
            <h1>Crud Operations</h1>

            <form onSubmit={formhandler}>
                <input type='text' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} /><br/>
                <input type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
                <button type='submit'>Add</button>

            </form>
            {/* {
                list.map((e,index)=>{
                    return(
                        <div>
                            <p>{e.name}</p>
                            <p>{e.email}</p>

                        </div>
                    )
                })
            } */}
            <Table>
                <thead>
                    <tr>
                        <td># Sr No</td>
                        <td>Name</td>
                        <td>Email Address</td>
                        <td>Delete</td>
                        <td>Update</td>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </Table>
        </>
    )
}
export default CrudOperation;