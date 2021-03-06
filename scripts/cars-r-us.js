import { paintPackage } from "./paintColors.js";
import { technologyPackage } from "./technology.js";
import { interiorSeatsPackage } from "./interiorSeats.js";
import { wheelsPackage } from "./wheels.js";
import { addCustomOrder } from "./database.js"
import { customCarOrder } from "./orders.js"

/* 
User click on custom order button after selecting all options
Look below, there is an article with a button in it, with an id of "orderButton", it needs to be inside the event listener function. When the button is pushed, a new order is generated by invoking addCustomOrder function that was exported from database module. It prints out the order.
*/

document.addEventListener(
    "click",
    (event) => {
        if(event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

/* Function is being exported to main module
Visible button is created for user to click on down below */

export const car = () => {
    return `
        <h1 class="car">Cars 'R Us</h1>

        <article class="choices">
            <section class="choices_paintColors options">
                <h2>Paint Colors Package</h2>
                ${paintPackage()}
            </section>

            <section class="choices_interior options">
                <h2>Interior Seats Package</h2>
                ${interiorSeatsPackage()}
            </section>

            <section class="choices_wheels options">
                <h2>Wheels Package</h2>
                ${wheelsPackage()}
            </section>

            <section class="choices_technology options">
                <h2>Technology Package</h2>
                ${technologyPackage()}
            </section>
        </article>

        <article>
            <button id="orderButton">Let's Create Your Car Package</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
           ${customCarOrder()}
        </article>`
}