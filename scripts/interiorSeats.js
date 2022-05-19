import { getInteriorSeats, setInteriorSeats } from "./database.js";

const interiorSeats = getInteriorSeats();

/* 
Export below function => orders module

User can select option from drop down menu, using <select> elements

.map method is similar to for of loop but with invoked function

Select id - array of objects in database,
option value - loops through the array for each individual property - id, type, etc and returns the value 
*/

export const interiorSeatsPackage = () => {
    return `<select id="interiorSeats"> 
            <option value="0">Select Interior Seat Package</option>
            ${interiorSeats.map((interiorSeat) => {
                return `<option value="${interiorSeat.id}">${interiorSeat.type}</option>`}).join("")
            }
        </select>`
}

/* It listens for the change event, when you select an option, activates and invokes the "set" function to store that value of selected choice */

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interiorSeats") {
            //id is the value derives from select id shown above, parseInt turned back into an int, not return a string.
          setInteriorSeats(parseInt(changeEvent.target.value))  
        }
    }
)
/* To get the option that the user selected, you would access the .value property of the <select> element, not the individual options which is why the id is plural above. */