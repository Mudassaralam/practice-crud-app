import React from 'react';

function Yupform (){
    return(
        <>
            <h2>Yup Form Validations</h2>
            <form>
                <input type='text' placeholder='Name..'/>
                <input type='email' placeholder='abc@gmail' />
                <input type='password' placeholder='password****' />
                <input type='submit' />
            </form>
        </>
    )
}
export default Yupform;