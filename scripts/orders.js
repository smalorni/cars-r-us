import { getInteriorSeats, getPaintColors, getWheels, getTechnology, getOrders } from "./database.js";

const buildOrder = (order) => {
    const wheels = getWheels()
    const seats = getInteriorSeats()
    const paint = getPaintColors()
    const tech = getTechnology()


/* Find price of paint and store it in a new variable */
const chosenPaint = paint.find(
    (paintColor) => {
        return paintColor.id === order.paintColorId
    }
)
const totalCostOfPaint = chosenPaint.price

/* Find price of tech and store it in a new variable */
const chosenTech = tech.find(
    (technology) => {
        return technology.id === order.technologyId
    }
)
const totalCostOfTech = chosenTech.price

/* Find price of seat and store it in a new variable */
const chosenSeat = seats.find(
    (interiorSeat) => {
        return interiorSeat.id === order.interiorSeatId
    }
)
const totalCostOfSeat = chosenSeat.price

/* Find price of wheel and store it in a new variable */
const chosenWheel = wheels.find(
    (wheel) => {
        return wheel.id === order.wheelId
    }
)
const totalCostOfWheel = chosenWheel.price

/* Add up all the prices to find total cost of metal, size and style */
const totalCostOfCar = totalCostOfPaint + totalCostOfTech + totalCostOfSeat + totalCostOfWheel

const costString = totalCostOfCar.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"

})

/* The state stores permanent values once the "create car package order" is clicked on. To print out orders, you need to use current variable names in this module to access property/value or it will return undefined */

return `<li>Car #${order.id} contains ${chosenPaint.color} Paint, ${chosenTech.type} for Technology, ${chosenSeat.type} Seats and ${chosenWheel.type} Wheels. The total cost is ${costString}.</li>`
}

export const customCarOrder = () => {
    const orders = getOrders()
    let htmlOrder = "<ul>"
/*buildOrder comes from above invoking all the imported function */
    const carAccessories = orders.map(buildOrder)
    
    htmlOrder += carAccessories.join("")
    htmlOrder += "</ul>"

    return htmlOrder
}

