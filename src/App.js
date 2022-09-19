import logo from './logo.svg';
import Form from './Components/Form/Form'
import Array from './Components/Form/Array'
import './App.css';
import Yupform from './Yupvalidations/Yupform';
import SignUp from './FormikValidations/SignUp';
import CrupApp from './FormikValidations/CrupApp';
// import Array from './Components/Form/Array';
import 'bootstrap/dist/css/bootstrap.min.css';
import CrudOperation from './CrudOperation/CrudOperation';

import React from 'react';
function App(){
  return(
    <>
      <SignUp />
    </>
  )
}
export default App;