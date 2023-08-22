export const transientState =  new Map()
        transientState.set("metalId", 0),
        transientState.set("styleId", 0),
        transientState.set("sizeId", 0),
        transientState.set("jewelryType", "ring")
//"metalId" : 0,
    //"styleId": 0, // Default value for style, a string property
    //"sizeId": 0, // Default value for size, an integer property
    //"jewelryType": "ring",
    


export const setJewelryTypeChoice = (chosenType) => {
    transientState.set("jewelryType", chosenType);
    console.log(transientState);
    const customEvent = new CustomEvent("optionChanged");
    document.dispatchEvent(customEvent);
};
export const setMetalChoice = (chosenOwnership) => {
    transientState.set("metalId", chosenOwnership);
    console.log(transientState)
    const customEvent = new CustomEvent("optionChanged");
    document.dispatchEvent(customEvent);
}

export const setStyleChoice = (chosenStyle) => {
    transientState.set("styleId", chosenStyle);
    console.log(transientState)
    const customEvent = new CustomEvent("optionChanged");
    document.dispatchEvent(customEvent);
}
export const setSizeChoice = (chosenSize) => {
    transientState.set("sizeId", chosenSize);
    console.log(transientState)
    const customEvent = new CustomEvent("optionChanged");
    document.dispatchEvent(customEvent);
}


export const placeOrder = async () => {

    const transientObj = Object.fromEntries(transientState)

    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientObj)
    }

    const response = await fetch ("http://localhost:8088/orders", postOptions)
    const customEvent = new CustomEvent("newOrderCreated")
    document.dispatchEvent(customEvent)
}


