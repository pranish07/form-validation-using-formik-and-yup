import React from "react";
import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as Yup from "yup";
function SignUp() {

    const validate = Yup.object({
        firstName: Yup.string().min(3, "Must be more than 2 characters").required("Required"),
        lastName: Yup.string().min(3, "Must be more than 2 characters").required("Required"),
        email: Yup.string().email( "Email is invalid").required("Email is Required"),
        password: Yup.string().min(6, "Password must be atleast 6 characters").required("Password is Required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'),null],'Password must match').required("Confirm password is Required"),
    });
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validate}
        onSubmit={values=>{
            console.log(values);
            
        }}
      >
        {(formik) => (
          <div>
            <h1 className=" my-4 font-weight-bold-display-4">SignUp</h1>
            {/* {console.log(formik.values)} */}
         
            <Form>
                <TextField label="First Name" name="firstName" type="text"/>
                <TextField label="Last Name" name="lastName" type="text"/>
                <TextField label="Email" name="email" type="email"/>
                <TextField label="Password" name="password" type="password"/>
                <TextField label="Confirm Password" name="confirmPassword" type="password"/>
                <button className="btn btn-dark mt-3"type="submit" >Register</button>
                <button className="btn btn-danger mt-3 ms-3" type="reset">Reset</button>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
}

export default SignUp;
