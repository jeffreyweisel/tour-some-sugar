import { getVenues } from "./database.js"

const venues = getVenues()

export const Venues = () => {
    let html = "<ul>"

    for (const venue of venues) {
        html += `<li
                data-type="venue"
                data-id="${venue.id}"
                data-name="${venue.name}"
                >${venue.name}</li>`
                
    }

    html += "</ul>"

    return html
}