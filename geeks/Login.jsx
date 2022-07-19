import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import Home from './Home';

function Login() {

    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");

    const [flag, setFlag] = useState(false);

    const [home, setHome] = useState(true);
   


    function handleLogin(e) {
        e.preventDefault();
        let name = localStorage.getItem('name').replace(/"/g, "");
        let pass = localStorage.getItem('password').replace(/"/g, "");
        //console.log(mail,pass)
        
        // .replace(/"/g,"") is used to remove the double quotes for the string

        if (!emaillog || !passwordlog) {
            setFlag(true);
            console.log("EMPTY");
        } else if ((passwordlog !== pass) || (emaillog !== name)) {
            setFlag(true);
        } else {
            setHome(false);
            setFlag(false);
        }
    }


    return (
        <div>
            {home ? <form onSubmit={handleLogin}>
                <h3>LogIn</h3>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter name" onChange={(event) => setEmaillog(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPasswordlog(event.target.value)} />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button>

                {flag && <Alert color='primary' variant="warning" >
                   invalid creditials
                        </Alert>}
            </form>
                : <Home />
            }

        </div>
    )
}

export default Login