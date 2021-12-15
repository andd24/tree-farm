import { useEffect, useState } from "react"
import userRepo from "../../repos/userRepo"
import { useHistory } from "react-router"

export const AccountForm = () => {
    const [user, setUser] = useState({})
    const [newAddress, setAddress] = useState("")
    const [newPhone, setPhone] = useState("")
    const history = useHistory()

    useEffect(() => {
        userRepo.get(parseInt(localStorage.getItem("farm_user"))).then(u => setUser(u))
    }, [])

    const updateUserInfo = () => {

        const updatedUser = {
            name: user.name,
            address: newAddress,
            email: user.email,
            phone: newPhone
        }

        userRepo.updateUser(user.id, updatedUser)
        history.push("/account")    
        
    }

    return (
        <form className="form">
            <h2 className="form__title">Update Account Info</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input
                        onChange={ event => setAddress(event.target.value) }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder={user.address}
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="phone number">Phone Number:</label>
                    <input
                        onChange={event => setPhone(event.target.value) }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder={user.phone}
                        />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={() => updateUserInfo()}>
                Submit
            </button>
        </form>
    )
}