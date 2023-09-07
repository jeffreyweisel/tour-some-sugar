import { getBands, getBookings, getVenues } from "./database.js"

const bands = getBands()
export const Bands = () => {
    let html = "<ul>"

    for (const band of bands) {
        html += `<li
                data-type="band"
                data-id="${band.id}"
                data-name="${band.name}"
                >${band.name}</li>`
                
    }

    html += "</ul>"

    return html
}
//Create new array that matches ids for bands and bookings and pushes each match to new array
const bandBookings = (id) => {
    const bookings = getBookings()
    const venues = getVenues()
    
    const venueNames = []
    for (const booking of bookings) {
        if(booking.bandId === id) {
        const venue = venues.find((venue) => venue.id === booking.venueId)  //used to search through an array and find the first element that satisfies a given condition
            venueNames.push(venue.name)                                         //in this instance, it is finding the venue.id that matches the booking.venueId 
        }
    }
           return venueNames
}




//Create click event listener that displays all bands playing at that venue in window alert
   //iterate through bands array and find where band.id = itemClicked.dataset.id
   //pass itemClicked.dataset.id to bandBookings function, create window alert and use .join method to join all matching bands to each venue 
    document.addEventListener(
        "click",
        (clickEvent) => {
            const itemClicked = clickEvent.target
            
            if (itemClicked.dataset.type === "band") {
                
                const bandId = parseInt(itemClicked.dataset.id)
                const bands = getBands()
                
                for (const band of bands) {
                    if (band.id === bandId) {
                        
                        const venueNames = bandBookings(bandId)
                        window.alert(`${band.name} is playing at ${venueNames.join(', ')}`)
                    }
                }
            }
        }
    )
