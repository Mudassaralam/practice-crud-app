import React, { useState } from 'react';
// import { Formik, Form } from 'formik';
import * as yup from 'yup'
import { Formik,Form , Field , ErrorMessage } from 'formik'
// import  Form  from 'react-bootstrap'
function SignUp(){
    const [data, setData] = useState([]);

    const defaultValues = {
        name: '',
        email: '',
        password: ''
    }
    const validationScheme = yup.object().shape({
        name: yup.string().required('Please Enter Name').min(5).max(12),
        email: yup.string().required('Enter is Required').email('Valid Email'),
        password: yup.string().required('Password must be ').min(5).max(10)
    })

const handleSubmit =(values)=>{
    console.log(values)
    setData([values]);
}
    return(
        <>
        <div className='container'>
            <h2>Sign Up Forms</h2>
            <Formik
            initialValues={defaultValues}    
            validationSchema={validationScheme} 
            onSubmit={handleSubmit}
            >

                <Form>
                <div>
                 <Field type='text' name='name' placeholder='Name...'  className='form-control'/>
                 <p style={{color:'red'}}>
                     <ErrorMessage name='name' />
                 </p>
                 </div>
                 <div>
                 <Field type='email' name='email' placeholder='Email...'  className='form-control'/>
                 <p style={{color:'red'}}>
                     <ErrorMessage name='email' />
                 </p>
                 </div>
                 <div>
                 <Field type='password' name='password' placeholder='Password...'  className='form-control'/>
                 <p style={{color:'red'}}>
                     <ErrorMessage name='password' />
                 </p>
                 </div>
                 <div>
                 <button type='submit'>Submit</button>
                 <button type='reset'>Rest</button>
                 </div>
                </Form>
            </Formik>
            </div>

            {
                data.map((items,index)=>{
                    return(
                    <ul>
                        <li>{items.name}</li>
                        <li>{items.email}</li>
                        <li>{items.password}</li>
                    </ul>
                    )
                })
            }
        </>
    )
}
export default SignUp;