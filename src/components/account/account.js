import React, { useEffect, useState } from "react"
import userRepo from "../../repos/userRepo"

const [users, setUsers] = useState([])


useEffect(() => {
    userRepo.getAll().then(user => setUsers(user))
}, [])

let foundUser = users.find(user => user.id === parseInt(localStorage.getItem(farm_user)))


