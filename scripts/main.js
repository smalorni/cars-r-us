import { car } from "./cars-r-us.js";

/* should be in html */
const mainContainer = document.querySelector("#container")

/* When state of data changes, for example, a user selected options, HTML must be regenerated to display new state of data */

const renderAllHTML = () => {
    mainContainer.innerHTML = car()
}

renderAllHTML()

document.addEventListener("stateChanged", event =>  {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})