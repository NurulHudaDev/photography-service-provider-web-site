import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../../firebase.init";
import "./SignUp.css";

const SignUp = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPass: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    });

    const [showPass, setShowPass] = useState(false);

    const [createUserWithEmailAndPassword, user, loading, hookError] =
        useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const heandelEmailChang = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, email: "" });
        } else {
            setErrors({ ...errors, email: "Invalid email" });
            setUserInfo({ ...userInfo, email: "" });
        }
    };
    const heandelPasswordChang = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Minimum 6 characters!" });
            setUserInfo({ ...userInfo, password: "" });
        }
    };

    const handleConfirmPasswordChange = (e) => {
        if (e.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPass: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Password's don't match" });
            setUserInfo({ ...userInfo, confirmPass: "" });
        }
    };

    const heandelLogin = (e) => {
        e.preventDefault();
        console.log(userInfo);
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    };

    useEffect(() => {
        if (hookError) {
            switch (hookError?.code) {
                case "auth/invalid-email":
                    toast("Invalid email provided, please provide a valid email");
                    break;
                case "auth/invalid-password":
                    toast("Wrong password. Intruder!!");
                    break;
                default:
                    toast("something went wrong");
            }
        }
    }, [hookError]);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user]);
    

    return (
        <Container>
            <Row>
                <Col>
                <div className='login-form'>
            <div className='from'>
            <h1>Sign Up</h1>
            <div className='login d-flex justify-content-center'>
                <form onSubmit={heandelLogin}>
                    <input type="email" name="" id="" placeholder='Email' onChange={heandelEmailChang}/>
                    {errors?.email && <p className="text-danger">{errors.email}</p> }
                    <br />
                    <input type={showPass ? "text" : "password"} name="" id="" placeholder='Password' onChange={heandelPasswordChang}/>
                    {errors?.password && <p className="text-danger">{errors.password}</p> }
                    <p className="absolute top-3 right-5" onClick={() => setShowPass(!showPass)}>🔥</p>
                    <input type="password" name="" id="" placeholder='Confirm-Password' onChange={handleConfirmPasswordChange}/>
                    {errors?.password && <p className="text-danger">{errors.password}</p> }
                    <button className='button'>Sign Up</button>
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

export default SignUp;