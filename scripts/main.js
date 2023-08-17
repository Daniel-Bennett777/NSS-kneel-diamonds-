import { SaveOrder } from './OrderButton.js'
import { MetalOptions } from './metals.js'
import { Orders } from './ordersList.js'
import { SizeOptions } from './size.js'
import { StyleOptions } from './styles.js'



const container = document.querySelector("#container")

const render = async() => {
    const metalOptionsHTML = await MetalOptions()
    const styleOptionsHTML = await StyleOptions()
    const sizeOptionsHTML = await SizeOptions()
    const buttonHTML = await SaveOrder()
    const orderHTML = await Orders()
    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizeOptionsHTML}
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
                ${styleOptionsHTML}
            </section>
        </article>

        <article class="order">
                ${buttonHTML}
        </article>

        <article class="customOrders">

            <h2>Custom Jewelry Orders</h2>
                ${orderHTML}

        </article>
    `

    container.innerHTML = composedHTML
}
render()

document.addEventListener("newOrderCreated", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})