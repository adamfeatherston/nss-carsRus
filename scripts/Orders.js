//module for caluculating costs of the custom order and displaying HTML of each order.
//import custom orders, interiors, paints, technologies, wheels from the database.
import { getCustomOrders } from "./database.js"
import { getPaints } from "./database.js"
import { getInteriors } from "./database.js"
import { getTechnologies } from "./database.js"
import { getWheels } from "./database.js"

const buildOrderListItem = (order) => {
    const paints = getPaints()
    const interiors = getInteriors ()
    const technologies = getTechnologies()
    const wheels = getWheels()
    
    // Remember that the function you pass to find() must return true/false
    const foundPaint = paints.find(
        (paint => {
            return paint.id === order.paintId
          
        }
    ))
    const foundInterior = interiors.find(
        (interior => {
            return interior.id === order.interiorId
          
        }
    ))
    const foundTechnology = technologies.find(
        (technology => {
            return technology.id === order.technologyId
          
        }
    ))
    const foundWheel = wheels.find(
        (wheel => {
            return wheel.id === order.wheelId
          
        }
    ))
    
    const totalCost = foundPaint.price + foundInterior.price + foundTechnology.price + foundWheel.price
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
        Order #${order.id} cost ${costString}
    </li>`
}


export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getCustomOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}
