import { setStyleChoice } from "./transientState.js"
import { transientState } from "./transientState.js";


const handleStyleChoice = (event) => {
    // Make sure you change this condition if you named your inputs differently
    if (event.target.name === "style") {
        setStyleChoice(parseInt(event.target.value))
    }
}




export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    let optionsHTML = ""

    const divStringArray = styles.map(
        (style) => {
            const checked = style.id === transientState.styleId ? 'checked': '';
          return `<div>
              <input type='radio' name='style' value='${style.id}' ${checked}/> ${style.style}
          </div>`
        }
    )

    // This function needs to return a single string, not an array of strings
     optionsHTML += divStringArray.join("")

    return optionsHTML
}

document.addEventListener("change", handleStyleChoice);


    