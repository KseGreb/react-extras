

import './App.css';
import BasicExample from './Bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SweetAlert from './SweetAlert';
// import GreenSock from './GreenSockAnimation';

// import React from "react";
import ContactForm from './Foormspree';

// import MyForm from './Foormspree';



function App() {



  return (
    <div className="App">
 {/* Sweet Alert component: */}
    <SweetAlert/>

{/* Bootstrap component:     */}
    <BasicExample/>

{/* Green Sock Animation Component */}
    {/* <GreenSock/> */}

{/* Formspree Component     */}
    <ContactForm/>
    {/* <MyForm/> */}

    </div>
  );
}

export default App;
