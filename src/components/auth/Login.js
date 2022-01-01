import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"
import authRepo from "../../repos/authRepo"
import "./Login.css"

export const Login = () => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState({})
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    useEffect(() => {
        authRepo.getUsers().then(user => setUsers(user))
    }, [])

    useEffect(() => {
        for (const user of users) {
            if (user.email === email) {
                setUser(user)
            } 
        }
    }, [email, users])

    const logIn = () => {
        if (user.password === password) {
            localStorage.setItem("farm_user", user.id)
            history.push("/account")
        }
        else {
            window.alert("Invalid email or password...please try again")
        }
    }

    return (
        <>
        <img className="image" src="https://www.rbgrant.co.uk/wp-content/uploads/banner-commercial-christmas-lights.jpg" alt="lights" />
        <main className="container">
            <section>
                <form className="form--login" onSubmit={logIn}>
                    <h2>Please sign in to place an order or view your account!</h2>
                    <div className="box"> 
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input type="email"
                            onChange={evt => setEmail(evt.target.value)}
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword"> Password </label>
                        <input type="password"
                            onChange={evt => setPassword(evt.target.value)}
                            className="form-control"
                            placeholder="Password"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button type="submit">
                            Sign in
                        </button>
                    </fieldset>
                    </div>
                </form>
            </section>
            <section className="link">
                <Link to="/register">Not a member yet?</Link>
            </section>
            <div className="foot">
                <img className="logo" src="images/pngfind.com-pine-tree-silhouette-png-47958.png" alt="logo" />
            </div>
        </main>
        </>
    )
}