import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './AuthForm.module.css'
let key = process.env.KEY

function AuthForm() {
    let [isLogin, setIsLogin] = useState(true)
    let [password, setPassWord] = useState('')
    let [confirmPassword, setConfirmPassword] = useState('')
    let [email, setEmail] = useState('')
    let [name, setName] = useState('')

    let navigate = useNavigate()

    let switchAuthModeHandler = () => {
        setIsLogin(prev => !prev)
    }
    let nameInputHandler = (e) => {
        setName(e.target.value)
    }
    let emailInputHandler = (e) => {
        setEmail(e.target.value)
    }
    let passwordInputHandler = (e) => {
        setPassWord(e.target.value)
    }
    let passwordChangeInputHandler = (e) => {
        setConfirmPassword(e.target.value)
    }
    let submitHandler = (e) => {
        e.preventDefault()
        let url1 = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`
        let url2 = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`
        if (!isLogin) {
            let sigUpHandler = async () => {
                let res = await fetch(url1, {
                    method: 'POST',
                    body: JSON.stringify({
                        email,
                        password,
                        displayName: name,
                        returnSecureToken: true
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                if (res.ok) {
                    toast.success(`Account successfully created, Proceed to login`, {
                        position: "top-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'dark'
                    });
                    setName('')
                    setEmail('')
                    setPassWord('')
                    setConfirmPassword('')
                } else {
                    let data = await res.json()
                    toast.error(data.error.message, {
                        position: "top-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'dark'
                    });
                }
            }
            if (password !== confirmPassword) {
                toast.warning(`Passwords don't match`, {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark'
                });
            } else {
                return sigUpHandler();
            }
        } else {
            let signInHandler = async () => {
                const res = await fetch(url2,
                    {
                        method: 'POST',
                        body: JSON.stringify({
                            email,
                            password,
                            returnSecureToken: true
                        }),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                )
                if (res.ok) {
                    let data = await res.json()
                    navigate('/')
                    console.log(data)
                    // dispatch(authActions.login(data))
                } else {
                    let data = await res.json()
                    console.log(data)
                    toast.error(data.error.message, {
                        position: "top-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'dark'
                    });
                }
            }
            signInHandler()
        }
    }
    return (
        <section className={styles.auth}>
            <ToastContainer />
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form
                onSubmit={submitHandler}>
                {!isLogin && <div className={styles.control}>
                    <label htmlFor='email'>Name</label>
                    <input
                        onChange={nameInputHandler}
                        value={name}
                        type='text'
                        id='name' />
                </div>}
                <div className={styles.control}>
                    <label htmlFor='email'>Email</label>
                    <input
                        onChange={emailInputHandler}
                        value={email}
                        type='email' id='email'
                        required />
                </div>
                <div className={styles.control}>
                    <label htmlFor='password'>Password</label>
                    <input value={password}
                        onChange={passwordInputHandler}
                        type='password'
                        id='password'
                        required />
                </div>
                {!isLogin && <div className={styles.control}>
                    <label htmlFor='password'>Confirm Password</label>
                    <input
                        onChange={passwordChangeInputHandler}
                        value={confirmPassword}
                        type='password'
                        id='confirmPassword'
                        required />
                </div>}
                <div className={styles.actions}>
                    <button>{isLogin ? 'Login' : 'Create Account'}</button>
                    <button
                        type='button'
                        className={styles.toggle}
                        onClick={switchAuthModeHandler}
                    >
                        {isLogin ? 'Create new account' : 'Login with existing account'}
                    </button>
                    {/* {isLoading && <h4>Loading....</h4>} */}
                    {/* {isLogin ? '' : <h4>{message}</h4>} */}
                </div>
            </form>
        </section>
    )
}

export default AuthForm