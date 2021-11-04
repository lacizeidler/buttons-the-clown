import { Requests } from "./requests.js"
import { ReservationForm } from "./reservations.js"


export const ButtonsTheClown = () => {
    return `
        <h1>Buttons the Clown</h1>
        <section class="reservationForm">
        ${ReservationForm()}
        </section>

        <section class="reservationRequests">
        <h2>Reservation Requests</h2>
        ${Requests()}
        </section>
    `
}