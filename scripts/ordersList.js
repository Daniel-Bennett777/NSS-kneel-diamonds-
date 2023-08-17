export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size") /*"http://localhost:8088/orders"*/
    const orders = await fetchResponse.json()
    let ordersHTML = orders.map(
        (order) => {
            const orderPrice = order.metal.price + order.style.price + order.size.price
            

            return `<div>
            order #${order.id} cost ${orderPrice}</div>
        </div>`
        }
    )
    
    return ordersHTML.join("")
}