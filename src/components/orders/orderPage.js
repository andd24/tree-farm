import React, { useState, useEffect } from "react"
import locationRepo from "../../repos/locationRepo"
import orderRepo from "../../repos/orderRepo"
import { useHistory } from "react-router"
import "./orderPage.css"

export const OrderPage = () => {
    const [lights, setLights] = useState([])
    const [heights, setHeights] = useState([])
    const [flocks, setFlocks] = useState([])
    const [wreaths, setWreaths] = useState([])
    const [locations, setLocations] = useState([])
    const [heightId, setHeightId] = useState(0)
    const [lightId, setLightId] = useState(0)
    const [flockId, setFlockId] = useState(0)
    const [wreathId, setWreathId] = useState(0)
    const [checked, setChecked] = useState(false)
    const [locationId, setLocationId] = useState(0)
    const [saveEnabled, setEnabled] = useState(false)
    const history = useHistory()

    useEffect(() => {
        orderRepo.getAllLights().then(light => setLights(light))
        orderRepo.getAllHeights().then(height => setHeights(height))
        orderRepo.getAllFlocks().then(flock => setFlocks(flock))
        orderRepo.getAllWreaths().then(wreath => setWreaths(wreath))
        locationRepo.getAll().then(location => setLocations(location))
    }, [])

    const priceDisplay = (option, price) => {
            if (price > 0) {
                return `${option.description} +$${option.price}`
            }
            else {
                return `${option.description}`
            }
    }

    const handleChange = () => {
        setChecked(!checked)
    }

    const subtotal = (heightId, lightId, flockId, wreathId, checked) => {
        let subtotal = 0
        let foundHeight = heights.find(height => height.id === heightId)
        if (foundHeight) {
            subtotal += foundHeight.price
        }
        let foundLight = lights.find(light => light.id === lightId)
        if (foundLight) {
            subtotal += foundLight.price
        }
        let foundFlock = flocks.find(flock => flock.id === flockId)
        if (foundFlock) {
           subtotal += foundFlock.price 
        }
        let foundWreath = wreaths.find(wreath => wreath.id === wreathId) 
        if (foundWreath) {
           subtotal += foundWreath.price 
        }
        if (checked) {
            subtotal += 25
        }
        return subtotal
    }

    const makeOrder = evt => {
        evt.preventDefault()
        if (heightId === 0) {
            window.alert("Choose a tree")
        }
        else if (lightId === 0) {
            window.alert("Please choose a light option")
        }
        else if (flockId === 0) {
            window.alert("Please choose a flock option")
        }
        else if (wreathId === 0) {
            window.alert("Please choose a wreath option")
        }
        else if (locationId === 0) {
            window.alert("Please select a location for pickup")
        } 
        else {
            const order = {
                userId: parseInt(localStorage.getItem("farm_user")),
                heightId: heightId,
                lightId: lightId,
                flockId: flockId,
                wreathId: wreathId,
                delivery: checked,
                locationId: locationId,
                total: subtotal(heightId, lightId, flockId, wreathId, checked),
                date: new Date().toISOString().slice(0, 10)
            }

            orderRepo.addOrder(order)
                .then(() => setEnabled(true))
                .then(() => history.push("/account"))
        }
    }

    return (
        <>
        <article>
            <h2>Order A Tree Farm Tree Today</h2>
            <h3>Choose your desired height, lights, and flock options</h3>
            <h3>Pick a wreath to add to your order</h3>
            <h3>Choose pick up or delivery from one of our various locations</h3>    
            <div className="form-group">
                <label htmlFor="heights" key="height">Tree sizes</label>
                <select
                    defaultValue=""
                    name="height"
                    id="heightId"
                    className="form-control"
                    onChange={event => setHeightId(parseInt(event.target.value))}
                >
                    <option value="">Select a height</option>
                    {heights.map(height => (
                        <option key={height.id} id={height.id} value={height.id}>
                            {height.height} foot tree --- ${height.price}
                        </option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                {lights.map(light => 
                <label htmlFor="lights" className="card" key={light.price}>
                <img src={light.imgURL} alt="light options" height="100" width="100" value={light.id} />
                <input type="radio" id={light.id} name="lights" value={light.id} key={light.id} checked={lightId === light.id} onChange={event => setLightId(parseInt(event.target.value))}
                 />
                {priceDisplay(light, light.price)}
                </label>)}
            </div> 
            <div className="form-group" >
                {flocks.map(flock => 
                <label htmlFor="flocks" className="card" key={flock.price}>
                <img src={flock.imgURL} alt="flock options" height="100" width="100"/>
                <input type="radio" id={flock.id} name="flocks" value={flock.id} key={flock.id} checked={flockId === flock.id} onChange={event => setFlockId(parseInt(event.target.value))} 
                />
                {priceDisplay(flock, flock.price)}
              </label>)}
            </div>
            <div className="form-group" >
                {wreaths.map(wreath => 
                <label htmlFor="wreaths" className="card" key={wreath.price}>
                <img src={wreath.imgURL} alt="wreath options" height="100" width="100"/>
                <input type="radio" id={wreath.id} name="wreaths" value={wreath.id} key={wreath.id} checked={wreathId === wreath.id} onChange={event => setWreathId(parseInt(event.target.value))} 
                        />
                {priceDisplay(wreath, wreath.price)}
              </label>)}
            </div>
            <div className="form-group">
            <label htmlFor="pickup" key="location"></label>
            <select
                defaultValue=""
                name="pickup"
                id="locationId"
                className="form-control"
                onChange={event => setLocationId(parseInt(event.target.value))}
            >
                <option value="">Select a location</option>
                ${locations.map(location => (
                    <option key={location.id} id={location.id} value={location.id}>
                        {location.name}
                    </option>
                ))}
            </select>
            </div>
            <div>
            <label>Add home delivery for $25
            <input type="checkbox" checked={checked} onChange={handleChange} />
            </label>
            </div>
        </article>
        <article>
            <div>
                <h3>
                   Total: ${subtotal(heightId, lightId, flockId, wreathId, checked)} 
                </h3>
            </div>
            <div>
            <button type="submit"
                onClick={makeOrder}
                disabled={saveEnabled}
                className="btn btn-primary"> Submit 
            </button>
            </div>
        </article>


        </>
    )
}