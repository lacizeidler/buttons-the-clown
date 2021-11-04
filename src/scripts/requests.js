import { deleteRequest, getRequests } from "./dataAccess.js";

export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${requests.map(request => {
        return `
    <li>
        Parents Name: ${request.parentName} <br>
        Childs Name: ${request.childName} <br>
        Date of Reservation: ${request.dateOfReservation} <br>
        Number of Children: ${request.numberOfChildren} <br>
        Address: ${request.address} <br>
        Party Length in Hours: ${request.partyLength} <br>
        <button class="request__delete"
                id="request--${request.id}">
            Delete
        </button>
    </li>
`
    }).join("")
        }
        </ul>
    `

    return html
}
const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})