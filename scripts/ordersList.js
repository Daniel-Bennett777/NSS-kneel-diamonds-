export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size") /*"http://localhost:8088/orders"*/
    const orders = await fetchResponse.json()
    
    let ordersHTML = orders.map(
        (order) => {
            let orderPrice = order.metal.price + order.style.price + order.size.price;
            let jewelryType = order.jewelryType || "ring"; // Default to "ring" if not specified

            // Update price based on jewelry type
            if (jewelryType === "earrings") {
                orderPrice *= 4;
            } else if (jewelryType === "necklace") {
                orderPrice *= 2;
            }

            return `<div>
                order #${order.id} (${jewelryType}) cost ${orderPrice}</div>
            </div>`;
        }
    );
    
    return ordersHTML.join("")
}