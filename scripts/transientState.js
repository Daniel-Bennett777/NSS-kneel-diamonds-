export const transientState =  {
    "metalId" : 0,
    "styleId": 0, // Default value for style, a string property
    "sizeId": 0, // Default value for size, an integer property
    "jewelryType": "ring",
    

}
export const setJewelryTypeChoice = (chosenType) => {
    transientState.jewelryType = chosenType;
    console.log(transientState);
    const customEvent = new CustomEvent("optionChanged");
    document.dispatchEvent(customEvent);
};
export const setMetalChoice = (chosenOwnership) => {
    transientState.metalId = chosenOwnership 
    console.log(transientState)
    const customEvent = new CustomEvent("optionChanged");
    document.dispatchEvent(customEvent);
}

export const setStyleChoice = (chosenStyle) => {
    transientState.styleId = chosenStyle 
    console.log(transientState)
    const customEvent = new CustomEvent("optionChanged");
    document.dispatchEvent(customEvent);
}
export const setSizeChoice = (chosenSize) => {
    transientState.sizeId = chosenSize 
    console.log(transientState)
    const customEvent = new CustomEvent("optionChanged");
    document.dispatchEvent(customEvent);
}


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


