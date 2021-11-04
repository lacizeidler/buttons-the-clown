import { sendRequest } from "./dataAccess.js";

export const ReservationForm = () => {
    let html = ""

    html += `
    <div class="field">
        <label class="label" for="parentName">Parent Name</label>
        <input type="text" name="parentName" class="input"/>
    </div>
    <div class="field">
        <label class="label" for="childName">Child Name</label>
        <input type="text" name="childName" class="input"/>
    </div>
    <div class="field">
        <label class="label" for="numberOfChildren">Number of Children</label>
        <input type="number" name="numberOfChildren" class="input"/>
    </div>
    <div class="field">
        <label class="label" for="address">Address</label>
        <input type="text" name="address" class="input"/>
    </div>
    <div class="field">
        <label class="label" for="partyDate">Party Date</label>
        <input type="date" name="partyDate" class="input"/>
    </div>
    <div class="field">
        <label class="label" for="lengthOfParty">Length of Party in Hours</label>
        <input type="number" name="lengthOfParty" class="input"/>
    </div>

    <button class="button" id="submitRequest" >Submit Request</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        const userParentName = document.querySelector("input[name='parentName']").value
        const userChildName = document.querySelector("input[name='childName']").value
        const userNumberOfChildren = document.querySelector("input[name='numberOfChildren']").value
        const userAddress = document.querySelector("input[name='address']").value
        const userPartyDate = document.querySelector("input[name='partyDate']").value
        const userPartyLength = document.querySelector("input[name='lengthOfParty']").value

        const dataToSendToAPI = {
            parentName: userParentName,
            childName: userChildName,
            numberOfChildren: userNumberOfChildren,
            address: userAddress,
            dateOfReservation: userPartyDate,
            partyLength: userPartyLength
        }
        sendRequest(dataToSendToAPI)
    }
})
