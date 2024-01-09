import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li data-type="product" data-id="${product.id}" data-price="${product.price}" data-name="${product.name}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

// document.addEventListener(
//     "click",
//     (clickEvent) => {
//         const clickTarget = clickEvent.target;

//         if (clickTarget.dataset.type === 'product') {
//             window.alert(`${clickTarget.dataset.name} costs $${clickTarget.dataset.price}`)
//         }
//     }
// )

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target;

        if (clickTarget.dataset.type === 'product') {
            for (const product of products) {
                if (product.id === parseInt(clickTarget.dataset.id))
            window.alert(`${product.name} costs $${product.price.toFixed(2)}`)
            }
        }
    }
)

