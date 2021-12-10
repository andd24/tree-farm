import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import userRepo from "../../repos/userRepo"
import useResourceResolver from "../../hooks/resource"

export const AccountPage = () => {
    const [users, setUsers] = useState([])
    const { userId } = useParams()
    const { resolveResource, resource } = useResourceResolver()

    useEffect(() => {
        
        resolveResource(user, userId, userRepo.get)
    }, [])


}



