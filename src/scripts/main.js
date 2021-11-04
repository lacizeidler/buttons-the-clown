import { ButtonsTheClown } from "./buttons.js";
import { fetchRequests } from "./dataAccess.js";

const mainContainer = document.querySelector("#container")

export const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = ButtonsTheClown()
        }
    )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    } 
)
