const database = {
   paintColors: [ 
       { id: 1, color: "Silver", price: 345.00 },
       { id: 2, color: "Midnight Blue", price: 225.50},
       { id: 3, color: "Firebrick Red", price: 649.99},
       { id: 4, color: "Spring Green", price: 150.50 }
    ],
    interiorSeats: [
        { id: 1, type: "Beige Fabric", price: 45.00 },
        { id: 2, type: "Charcoal Fabric", price: 99.99 },
        { id: 3, type: "White Leather", price: 199.99 },
        { id: 4, type: "Black Leather", price: 109.99 } 
    ], 
    technology: [
        { id: 1, type: "Basic Package", price: 29.99 },
        { id: 2, type: "Navigation Package", price: 39.99 },
        { id: 3, type: "Visibility Package", price: 49.99 },
        { id: 4, type: "Ultra Package", price: 59.99 }
    ],
    wheels: [
        { id: 1, type: "17-inch Pair Radial", price: 100.00 },
        { id: 2, type: "17-inch Pair Radial Black", price: 121.00 },
        { id: 3, type: "18-inch Pair Spoke Silver", price: 135.00 },
        { id: 4, type: "18-inch Pair Spoke Black", price: 139.00 }
    ],
/* Custom orders array is where you store each Id but it must be the same number of id available in the above arrays, for example, can't go above 4 */
    customOrders: [
        { id: 1, paintColorId: 2, interiorSeatId: 3, technologyId: 4, wheelId: 1  }
    ],
/* This is where you will create your new order and out in the empty array */
    orderBuilder: {},
}

/**** map() method generates a new array w/ as many items as are in original array, but in the new array, it puts items in the form you specify. It also iterates through the array and also invokes the function ****************/

/* Export following "get" functions with .map array method */
export const getPaintColors = () => {
    return database.paintColors.map(paintColor => ({...paintColor}))
}

export const getInteriorSeats = () => {
    return database.interiorSeats.map(interiorSeat => ({...interiorSeat}))
}

export const getTechnology = () => {
    return database.technology.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(customOrder => ({...customOrder}))
}

/* export function "set" in it, it's building a new order when user select choices, using orderBuilder array above, the id part comes from customOrders array */

export const setInteriorSeats = (id) => {
    database.orderBuilder.interiorSeatId = id
}

export const setPaintColors = (id) => {
    database.orderBuilder.paintColorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}

/* Export function that stores temporary choices */

export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder}
    
    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))

    
}
