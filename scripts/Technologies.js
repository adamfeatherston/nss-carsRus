//module for to create clickEvent of adding technology options and displaying HTML in a box
// import the technologies and the generated technology options from the database 

import { getTechnologies, setTechnology } from "./database.js"

const techs = getTechnologies()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "tech") {
            setTechnology(parseInt(event.target.value))
        }
    }
)

export const Technologies = () => {
    let html = "<h2>Technologies</h2>"
    html += `<select id="tech">`
    html += `<option value="0">Select a technology package</option>`
    // Use .map() for converting objects to <li> elements
    const listItems = techs.map(tech => {
        return `<option value="${tech.id}">${tech.package}</option>`
    })

    html += listItems.join("")
    html += "</select>"

    return html
}