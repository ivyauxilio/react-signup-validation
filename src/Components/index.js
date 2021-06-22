import React,{useState} from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Minimum of 8 characters')
    .required('Required'),
  email: Yup.string().email('Please enter a valid email address'),
});

function Main() {
    
    const [ userType, setUserType ] = useState(["I would describe my user type as","Developer", "QA", "DevOps"])

    const type = userType.map(type => type);
    const handleUserTypeChange = (e) => console.log((userType[e.target.value]))

    const handleClickShowPassword = () => {  
        setValues({ ...values, showPassword: !values.showPassword });
      };
      const [values, setValues] = useState({
        password: "",
        showPassword: false,
       });

    function handleSubmit(event) {
        event.preventDefault();
        //set function to submit
      }

    return (
    <div className="app">
        <div className="row m-0">
            <div className="col-lg-8">
                <div className="box login-form">
                    <h2 className="mb-5">Let's set up your account</h2>
                    <p className="font-weight-light">Already have an account?  <a href="login.com" className="font-weight-bold">Sign in</a></p>
                    <Formik
                        initialValues={{
                            username: '',
                            password: '',
                            email: '',
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={handleSubmit}
                        >
                        {({ errors, touched, isValid, dirty }) => (
                        <form>
                            <div className="input-container">
                                <Field type="text" id="username" required="required"
                                    name="username" />
                                <label htmlFor="username">Your name</label>
                                {errors.username && touched.username ? (
                                    <div>{errors.username}</div>
                                ) : null}
                            </div>
                            <div className="input-container">
                                <Field type="text" id="email" name="email"  required="required" className={errors.email && "error-input"}/>
                                <label htmlFor="email">Email Address</label>
                                {errors.email && touched.email ? (
                                    <div className="text-danger"><small>{errors.email}</small></div>
                                ) : null}
                            </div>
                            <div className="input-container">
                                < select
                                    className="custom-select border-0 font-weight-light" >
                                    {
                                        type.map((type, key) => <option value={key}>{type}</option>)
                                    }
                                </select >
                            </div>
                            <div className="input-container mb-5">
                                <Field 
                                type={values.showPassword ? "text" : "password"} 
                                name="password"  required="required"
                                />
                                <a className="viewer text-dark" onClick={handleClickShowPassword}><i className={values.showPassword ?  "fas fa-eye" :  "fas fa-eye-slash"} ></i></a>
                                <label htmlFor="password">Password</label>

                                {errors.password && touched.password ? (
                                     <div className="text-danger"><small>{errors.password}</small></div>
                                ) : 
                                <div className="mt-2 password-span">                             
                                    <small>Minimum of 8 characters</small>
                                </div>}
                               
                            </div>
                            <div className="button-container mb-5">
                                <button type="submit" disabled={!(dirty && isValid)}  className={!(dirty && isValid) ? "btn btn-outline-primary btn-block border-0" : "btn btn-primary btn-block"}>Next</button>
                            </div>
                            <div className="footer">
                                <p><small>By clicking the "Next" button, you agree to creating a free account, and  to <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></small></p>
                            </div>
                        </form>
                         )}
                    </Formik>
                </div>
            </div>
            <div className="col-lg-4 p-0 dummy-heading ">
                <div className="box text-white">
                    <h2>Dummy Heading</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.  </p>
                </div>
            </div>
        </div>
    </div>
  );
}


export default Main;