import React from "react";
import SignUp from "./components/SignUp";
import "./app.css"

function App() {
  return (
    <>
      <div className="container-fluid mt-3 text-center">
        <p>form validation using formik and Yup</p>
        <div className="row d-flex justify-content-center">
          <div className="col-sm-5 bg-slate-white px-2 py-4 rounded ">
            <SignUp />
          </div>
         
        </div>
      </div>
    </>
  );
}

export default App;
