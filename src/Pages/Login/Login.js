import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase.init';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
const provider = new GoogleAuthProvider();

const Login = () => {

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    })

    const [signInWithEmail, user, loading, hookError] = useSignInWithEmailAndPassword(auth);
    
    const heandelEmailChang = (e) =>{
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);
        
        if(validEmail){
            setUserInfo({...userInfo, email: e.target.value})
            setErrors({...errors, email: ""}) 
        }
        else{
            setErrors({...errors, email: "Invalid email"})
            setUserInfo({...userInfo, email: ""})
        }
    }

    const heandelPasswordChang = (e) =>{
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);
        if(validPassword){
            setUserInfo({...userInfo, password: e.target.value});
            setErrors({...errors, password: ""});
        }
        else{
            setErrors({...errors, password: "Minimum 6 characters!"});
            setUserInfo({...userInfo, password: ""})
        }
    }

    const heandelLogin = (e) =>{
        e.preventDefault();

        signInWithEmail(userInfo.email, userInfo.password);
    }

    useEffect(() => {
        const error = hookError;
        if(error){
            switch(error?.code){
                case "auth/invalid-email":
                    toast("Invalid email provided, please provide a valid email");
                    break;
                
                case "auth/invalid-password":
                    toast("Wrong password. Intruder!!")
                    break;
                default:
                    toast("something went wrong")
            }
        }
    }, [hookError])

    const googleAuth = () =>{
        signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      }).catch((error) => {
        const errorMessage = error.message;
       console.log(errorMessage);
      });
    }

    return (
        <Container>
            <Row>
                <Col>
                <div className='login-form'>
            <div className='from'>
            <h1>Login</h1>
            <div className='login d-flex justify-content-center'>
                <form onSubmit={heandelLogin}>
                    <input type="email" name="" id="" placeholder='Email' onChange={heandelEmailChang}/>
                    {errors?.email && <p className="text-danger">{errors.email}</p> }
                    <br />
                    <input type="password" name="" id="" placeholder='Password' onChange={heandelPasswordChang}/>
                    {errors?.password && <p className="text-danger">{errors.password}</p> }
                    <button className='button'>Log In</button>
                    <p className='mt-2'>New to Tech Geeks? <Link className="" to="/signup">Create New Account</Link></p>
                    <button className='google-button' onClick={googleAuth}>Continue with Google</button>
                    <ToastContainer/>
                </form>
            </div>
            </div>
        </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;