//see orders.js for reference 

import { getBookings } from "./database.js"

const bookings = getBookings()

export const Bookings = () => {
    let html = "<ul>"

    for (const booking of bookings) {
        html += `<li>${booking.bandId} will be playing at ${booking.venueId}</li>`
    }

    html += "</ul>"

    return html
}