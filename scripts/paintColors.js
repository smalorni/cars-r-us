import { getPaintColors, setPaintColors  } from "./database.js";

const paintColors = getPaintColors()

/* 
Export below function => orders module

User can select option from drop down menu, using <select> elements

.map method is similar to for of loop but with invoked function

Select id - array of objects in database,
option value - loops through the array for each individual property - id, type, etc and returns the value 
*/

export const paintPackage = () => {
    return `<select id="paintColors">
            <option value="0">Select Paint Color Package</option>
            ${paintColors.map((paintColor) => {
                return `<option value="${paintColor.id}">${paintColor.color}</option>`}).join("")
            }
        </select>`
}
/* It listens for the change event, when you select an option, activates and invokes the "set" function to store that value of selected choice */

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "paintColors") {
            setPaintColors(parseInt(changeEvent.target.value)) 
        }
    }
)
/* To get the option that the user selected, you would access the .value property of the <select> element, not the individual options which is why the id is plural above. */