import { placeOrder } from "./transientState.js"






const handleButtonClicked = (clickEvent) => {
    if (clickEvent.target.id === "orderPlaced") {
        placeOrder()
    }
}


export const SaveOrder = () => {

    document.addEventListener("click", handleButtonClicked)

    return "<div><button id ='orderPlaced'> Place Order </button></div>"
    
}

