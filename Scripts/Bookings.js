//see orders.js for reference 

import { getBands, getBookings, getVenues } from "./database.js"

//Copy of state for use in module
const bookings = getBookings()
const bands = getBands()
const venues = getVenues()



//Function whose responsibilty is to find the band for a booking
const findBand = (booking) => {
    let bandBooking = null

    for (const band of bands) {
        if(band.id === booking.bandId) {
            bandBooking = band
        }
    }
        return bandBooking
}

//Function whose responsibilty is to find the venue for a booking
const findVenue = (booking) => {
    let venueBooking = null

    for (const venue of venues) {
        if(venue.id === booking.venueId) {
            venueBooking = venue
        }
    }
        return venueBooking
}


//Create HTML for bookings section
export const Bookings = () => {
    let html = "<ul>"

    for (const booking of bookings) {
        const band = findBand(booking)
        const venue = findVenue(booking)
        
        //Check if band and venue name properties are null before trying to access them 
        const bandName = band ? band.name : "Unknown Band"
        const venueName = venue ? venue.name : "Unknown Venue"

        html += `<li
                data-type= "booking"
                data-bandid="${booking.bandId}"
                data-venueid="${booking.venueId}"
                data-id="${booking.id}"
                >${bandName} will be playing at ${venueName} on ${booking.date}</li>`
    }

    html += "</ul>"

    return html
}

//Create click event listener that displays all band information for each booking
    //iterate through bands array, when itemClicked.dataset.id = band.id create window alert that shows all band info
    document.addEventListener(
        "click",
        (clickEvent) => {
            const itemClicked = clickEvent.target

            if(itemClicked.dataset.type === "booking") {
        
            const bookingBandId = parseInt(itemClicked.dataset.bandid)
            const bands = getBands()
            for (const band of bands) {
                if(bookingBandId === band.id)
                window.alert(`Band details:\n${band.name}\n${band.genre}\nFounded in ${band.established}\n${band.members} members`)
            
            }
        }
    }
)