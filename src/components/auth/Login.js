import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"
import authRepo from "../../repos/authRepo";

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
    }, [email])

    const logIn = () => {
        if (user.password === password) {
            localStorage.setItem("farm_user", user.id)
            history.push("/")
        }
        else {
            window.alert("Invalid email or password...please try again")
        }
    }

    return (
        <main className="container--login">
            <section>
                <form className="form--login" onSubmit={logIn}>
                    <h1>Tree Farm</h1>
                    <h2>Please sign in</h2>
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
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
        </main>
    )
}