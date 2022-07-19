import React, { useState } from 'react'
import { Form, Alert } from 'react-bootstrap';
import Login from './Login';



function Signup() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [profession, setProfession] = useState("");

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
    const [info, setInfo] = useState(true);




    // on form submit...
    function handleFormSubmit(e) {
        e.preventDefault();

        if (!name || !email || !password || !phone || !profession) {
            setFlag(true);

        } else {

            setFlag(false);
            localStorage.setItem("name", JSON.stringify(name));
            localStorage.setItem("password", JSON.stringify(password));
            
           
            console.log("Saved in Local Storage");

            setLogin(!login)

        }

    }

    // Directly to the login page
    function handleClick() {
        setLogin(!login)
    }

    // Company Info
    function infoClick() {
        setInfo(!info)
    }



    return (
        <>
        <div >
            <nav className="navbar navbar-light">
                <div className="container" onClick={infoClick}>
                    <h4 className="btn btn-dark btn-lg btn-block">Company Info</h4>
                </div>
            </nav>
            {info ? <div> {login ? <form onSubmit={handleFormSubmit}>
                <h3>Register</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter Full Name" name="name" onChange={(event) => setName(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPassword(event.target.value)} />
                </div>


                <div className="form-group">
                    <label>Phone No.</label>
                    <input type="Phone" className="form-control" placeholder="Enter contact no" onChange={(event) => setPhone(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Choose your Profession</label>
                    <Form.Control as="select" onChange={(event) => setProfession(event.target.value)} >
                        <option>Select</option>
                        <option>Student</option>
                        <option>Woring Professional</option>
                        
                    </Form.Control>
                </div>


                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <button onClick={handleClick} >log in?</button>
                </p>
                {flag &&
                    <Alert color='primary' variant="danger" >
                        empty inpit field
                    </Alert>
                }

            </form> : <Login />}
            </div> : <div>
                <p><strong>Company:</strong> Geeksynergy Technologies PVT Ltd</p>
                <p><strong>Address:</strong> Sanjaynagar, Bengaluru-56</p>
                <p><strong>Phone:</strong> XXXXXXXXXX09</p>
                <p><strong>Email:</strong> XXXXXXXX@gmail.com</p>
            </div>}
            </div>
        </>
        
    )
}

export default Signup