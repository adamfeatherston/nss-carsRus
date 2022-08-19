//module for creating HTML String that will be displayed.
    //1. String will have 3 article classes
    //  a. article class 1 will have 4 boxes (1 for each option with drop down menus). Invoke functions for displaying each car option.
    //  b. article class 2 will have a button for submitting all the orders.
    //  c. article class 3 will display all the orders. Invoke function for displaying all the orders.
    //      1. click event needed for the order button.

import { Paints } from "./Paints.js"
import { Interiors } from "./Interiors.js"
import { Orders } from "./Orders.js"
import { Technologies } from "./Technologies.js"
import { Wheels } from "./Wheels.js"
import { addCustomOrder } from "./database.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder(parseInt(event.target.value))
        }
    }
)

export const carsRus = () => {
    return `
        <h1>Cars 'R Us: Personal Car Builder</h1>

        <article class="choices">
            <section class="choices__paints options">
                ${Paints()}
            </section>
            <section class="choices__interiors options">
               ${Interiors()}
            </section>
            <section class="choices__wheels options">
               ${Wheels()}
            </section>
            <section class="choices__technologies options">
               ${Technologies()}
            </section>
        </article>

        <article>
            <button id="orderButton">Place Car Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </article>
    `
}