import React from 'react'
import { useRef, useState, useEffect } from 'react';


const Login = () => {

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd)
        setUser('')
        setPwd('')
        setSuccess(true)
    }

  return (
    <section>
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
             <input
            type="text"
             id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
            />

        <label htmlFor="username">Username:</label>
             <input
             id="password"
            ref={userRef}
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
            />
            <button>Sign in</button>

        </form>
        <p>
            Need an Account?<br />
            <span className="line">
            {/*put router link here*/}
            <a href="#">Sign Up</a>
             </span>
         </p>
    </section>
  )
}

export default Login