import React, { useState, useHistory, useEffect } from "react"
import locationRepo from "../../repos/locationRepo"
import orderRepo from "../../repos/orderRepo"
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
    
    const subtotal = (a, b, c, d, e) => {
        let subtotal = 0
        if (a.id === heightId) {
            subtotal += a.price
        }
        if (b.id === lightId) {
            subtotal += b.price
        }
        if (c.id === flockId) {
            subtotal += c.price
        }
        if (d.id === wreathId) {
            subtotal += d.price
        }
        if (e) {
            subtotal += 20
        }
        return subtotal
    }

    const handleChange = () => {
        setChecked(!checked)
    }

    const Checkbox = ({ label, value, onChange }) => {
        return (
          <label>
            <input type="checkbox" checked={value} onChange={onChange} />
            {label}
          </label>
        )
    }

    const Pickup = ({}) => {
        if (checked === false) {
            return ``
        }
        else {
            return (            <div className="form-group">
            <label htmlFor="pickup">Pickup</label>
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
        </div> )
        }
        
    }

    const tax = () => {
        return subtotal() * 0.07 
    }

    const grandTotal = () => {
        let a = subtotal()
        let b = tax()
        return a + b
    }

    return (
        <>
        <article>
            <h2>Order A Tree Farm Tree Today</h2>
            <h3>Choose your desired height and add lights or flocking</h3>
            <h3>Add a wreath to your order!</h3>
            <h3>Come on down to one of our convenient locations or have your tree delivered straight to your home!</h3>    
            <div className="form-group">
                <label htmlFor="heights">Tree sizes</label>
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
                <label htmlFor="lights" class="card">
                <img src={light.imgURL} height="100" width="100" value={light.id} />
                <input type="radio" id={light.id} name="lights" value={light.id} key={light.id} checked={lightId === light.id} onChange={event => setLightId(parseInt(event.target.value))}
                 />
                {priceDisplay(light, light.price)}
                </label>)}
            </div> 
            <div className="form-group">
            {flocks.map(flock => 
                <label htmlFor="flocks">
                {priceDisplay(flock, flock.price)}
                <input type="radio" id={flock.id} name="flocks" value={flock.id} key={flock.id} checked={flockId === flock.id} onChange={event => setFlockId(parseInt(event.target.value))} 
                        />
                <img src={flock.imgURL} height="100" width="100"/>
                
              </label>)}
            </div>
            <div className="form-group">
            {wreaths.map(wreath => 
                <label htmlFor="wreaths">
                {wreath.description} ${wreath.price}
                <input type="radio" id={wreath.id} name="flocks" value={wreath.id} key={wreath.id} checked={wreathId === wreath.id} onChange={event => setWreathId(parseInt(event.target.value))} 
                        />
                <img src={wreath.imgURL} height="100" width="100"/>
                
              </label>)}
            </div>
            <div>
                <Checkbox
                    label="Add home delivery for $25"
                    value={checked}
                    onChange={handleChange}
                />  
            </div>
            <Pickup />
        </article>


        </>
    )
}