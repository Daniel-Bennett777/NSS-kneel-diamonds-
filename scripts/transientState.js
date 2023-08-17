const transientState = {
    "metalId" : 0,
    "styleId": 0, // Default value for style, a string property
    "sizeId": 0, // Default value for size, an integer property
    

}
export const setMetalChoice = (chosenOwnership) => {
    transientState.metalId = chosenOwnership 
    console.log(transientState)
}

export const setStyleChoice = (chosenStyle) => {
    transientState.styleId = chosenStyle 
    console.log(transientState)
}
export const setSizeChoice = (chosenSize) => {
    transientState.sizeId = chosenSize 
    console.log(transientState)}


export const placeOrder = async () => {


    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch ("http://localhost:8088/orders", postOptions)
    const customEvent = new CustomEvent("newOrderCreated")
    document.dispatchEvent(customEvent)
}


