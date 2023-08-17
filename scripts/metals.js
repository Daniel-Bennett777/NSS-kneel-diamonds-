// The setMetalChoice() function used below is just an example.
// Change it to the name of the setter function you created.
import { setMetalChoice } from "./transientState.js"

const handleMetalChoice = (event) => {
    // Make sure you change this condition if you named your inputs differently
    if (event.target.name === "metal") {
        setMetalChoice(parseInt(event.target.value))
    }
}








export const MetalOptions = async () => {

    

    const response = await fetch("http://localhost:8088/metals")  //The fetch() function returns a Promise that resolves to the Response object containing information about the response.
    const metals = await response.json() // Reads and parses the response body as JSON. The await keyword is used to pause execution until the Promise returned by response.json() is resolved. The parsed JSON data is assigned to the metals variable.

    let optionsHTML = ""

    // Use map() to generate new array of strings
    const divStringArray = metals.map(
        (metal) => {
          return `<div>
              <input type='radio' name='metal' value='${metal.id}' /> ${metal.metal}
          </div>`
        }
    )
        //const divStringArray = metals.map((metal) => { ... });: Uses the map() function to iterate over the metals array. For each element (metal) in the array, an HTML string containing a radio button and metal name is generated. The generated strings are stored in the divStringArray.
    // This function needs to return a single string, not an array of strings
     optionsHTML += divStringArray.join("")

    return optionsHTML
    //This function fetches metal data from a specified URL, generates HTML strings for radio button options using the map() function, joins them into a single string, and returns the combined HTML code for the radio buttons representing different metals.
}
document.addEventListener("change", handleMetalChoice);



