import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li data-type="employee" data-id="${employee.id}" data-name="${employee.name}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

    document.addEventListener(
        "click",
        (clickEvent) => {
            const itemClicked = clickEvent.target
            // Was an employee clicked?
            if (itemClicked.dataset.type === 'employee'){
                    // Get the id of the employee clicked
                    const employeeId = itemClicked.dataset.id
                    // Start a counter variable at 0
                    let counter = 0
                    
                    // Iterate all of the orders
                    for (const order of orders) {
                    // Does the employeeId foreign key match the id?
                        if (parseInt(employeeId) === order.employeeId) {
                        // Increase the counter by 1
                        counter++;
                        }
                    }
                    window.alert(`${itemClicked.dataset.name} sold ${counter} products`)
                }
        }
    )
