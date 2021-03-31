import { useContext, useState } from 'react';
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import { handleGoogleSignIn, initializeLoginFrameWork, handleSignOut, handleFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './loginManager';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './Login.css';


function Login() {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    });

    initializeLoginFrameWork();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/destination/1" } };


    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }

    // const fbSignIn = () => {
    //     handleFbSignIn()
    //         .then(res => {
    //             handleResponse(res, true);
    //         })
    // }

    const signOut = () => {
        handleSignOut()
            .then(res => {
                handleResponse(res, false);
            })
    }


    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    }







    const handleBlur = (e) => {
        let isFromValid = true;
        if (e.target.name === 'email') {
            isFromValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFromValid = isPasswordValid && passwordHasNumber
        }
        if (isFromValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        if (newUser && user.name && user.password) {
            createUserWithEmailAndPassword(user.email, user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }


        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }
        e.preventDefault();
    }


    return (
        <div className="App">


            <div className="login-form">
                <h1>You must LogIn First</h1>
                <form onSubmit={handleSubmit}>
                    {newUser && <input className="input-box" name="name" type="text" onBlur={handleBlur} placeholder="Name" />} <br />
                    <input className="input-box" type="email" onBlur={handleBlur} name="email" placeholder="Email" required /> <br />
                    <input className="input-box" type="password" onBlur={handleBlur} name="password" placeholder="Password" required /> <br />
                    <input className="submit" type="submit" value={newUser ? 'Sign Up' : 'Sign In'} />
                </form>
                <input className="check-box" type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
                <label htmlFor="newUser">New User Sign Up</label>
                <br />
                {
                    user.isSignedIn ? <button onClick={signOut}>Sine Out</button> :
                        <button className="submit-ggl" onClick={googleSignIn}>Sign In with Google</button>
                }
            </div>



        </div >
    );
}


export default Login;