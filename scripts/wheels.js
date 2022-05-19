import { getWheels, setWheels } from "./database.js";

/* invoke the function and store new values in a variable */

const wheels = getWheels()

/* 
Export below function => orders module

User can select option from drop down menu, using <select> elements

.map method is similar to for of loop but with invoked function

Select id - array of objects in database,
option value - loops through the array for each individual property - id, type, etc and returns the value 
*/

export const wheelsPackage = () => {
    return `<select id="wheels">
            <option value="0">Select Wheel Package</option>
            ${wheels.map((wheel) => {
                    return `<option value="${wheel.id}">${wheel.type}</option>`}).join("")
                 }
        </select>`
}

/* It listens for the change event, when you select an option, activates and invokes the "set" function to store that value of selected choice */

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheels") {
            setWheels(parseInt(changeEvent.target.value)) 
        }
    }
)
/* To get the option that the user selected, you would access the .value property of the <select> element, not the individual options which is why the id is plural above. */