//module for to create clickEvent of adding wheel options and displaying HTML in a box
// import the wheels and the generated wheel options from the database 

import { getWheels, setWheel } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheel") {
            setWheel(parseInt(event.target.value))
        }
    }
)

export const Wheels = () => {
    let html = "<h2>Wheels</h2>"
    html += `<select id="wheel">`
    html += `<option value="0">Select a Wheel Size and color</option>`
    // Use .map() for converting objects to <li> elements
    const listItems = wheels.map(wheel => {
        return `<option value="${wheel.id}">${wheel.size}</option>`
    })

    html += listItems.join("")
    html += "</select>"

    return html
}