import { useEffect, useState } from "react"

const useResourceResolver = () => { 

    const [resource, setResource] = useState({}) 

    useEffect(() => { //
       console.log('resolved resource', resource)
    }, [resource]) 

    const resolveResource = (property, param, getter) => {
        if (property && "id" in property) { 
            setResource(property)
        }
        else {
            if (param) { 
                getter(param).then(retrievedResource => { 
                    setResource(retrievedResource)
                })
            }
        }
    }
    return { resolveResource, resource }
}

export default useResourceResolver 