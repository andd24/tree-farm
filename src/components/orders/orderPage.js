import React, { useState, useHistory, useEffect } from "react"
import orderRepo from "../../repos/orderRepo"
import "./orderPage.css"

export const OrderPage = () => {
    const [lights, setLights] = useState([])
    const [heights, setHeights] = useState([])
    const [flocks, setFlocks] = useState([])
    const [wreaths, setWreaths] = useState([])
    const [heightId, setHeightId] = useState(0)

    useEffect(() => {
        orderRepo.getAllLights().then(light => setLights(light))
        orderRepo.getAllHeights().then(height => setHeights(height))
        orderRepo.getAllFlocks().then(flock => setFlocks(flock))
        orderRepo.getAllWreaths().then(wreath => setWreaths(wreath))
    }, [])

    const priceDisplay = (option, price) => {
            if (price > 0) {
                return `${option.description} +$${option.price}`
            }
            else {
                return `${option.description}`
            }
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
                    onChange={event => setHeightId(event.target.value)}
                >
                    <option value="">Select a height</option>
                    {heights.map(height => (
                        <option key={height.id} id={height.id} value={height.id}>
                            {height.height} foot tree --- ${height.price}+
                        </option>
                    ))}
                </select>
            </div>
            <div className="form-group">
            {lights.map(light => 
                <label htmlFor="lights">
                {priceDisplay(light, light.price)}
                <input type="radio" id={light.id} name="lights" value={light.description}
                    checked />
                <img src={light.imgURL} height="100" width="100"/>
                
              </label>)}
            </div>
            <div className="form-group">
            {flocks.map(flock => 
                <label htmlFor="flocks">
                {priceDisplay(flock, flock.price)}
                <input type="radio" id={flock.id} name="flocks" value={flock.description}
                       checked />
                <img src={flock.imgURL} height="100" width="100"/>
                
              </label>)}
            </div>
        </article>


        </>
    )
}