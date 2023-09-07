import { getBands, getBookings, getVenues } from "./database.js"

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
//Create new array that matches ids for venues and bookings and pushes each match 
const venueBookings = (id) => {
    const bookings = getBookings()
    const bands = getBands()
    
    const bandNames = []
    for (const booking of bookings) {
        if(booking.venueId === id) {
        const band = bands.find((band) => band.id === booking.bandId)   //used to search through an array and find the first element that satisfies a given condition
            bandNames.push(band.name)                                       //in this instance, it is finding the band.id that matches the booking.bandId 
        }
    }
            return bandNames
}

//Create click event listener that displays all bands playing at that venue in window alert
    //iterate through venues array, find matching itemClicked.dataset.id to venue.id
    //pass itemClicked.dataset.id to venueBookings function, create window alert and use .join method to join all matching bands to each venue
    document.addEventListener(
        "click",
        (clickEvent) => {
            const itemClicked = clickEvent.target
            
            if (itemClicked.dataset.type === "venue") {
                
                const venueId = parseInt(itemClicked.dataset.id)
                const venues = getVenues()
                
                for (const venue of venues) {
                    if (venue.id === venueId) {
                        
                        const bandNames = venueBookings(venueId)
                        window.alert(`${venue.name} is hosting ${bandNames.join(', ')}`)
                    }
                }
            }
        }
    )













































    