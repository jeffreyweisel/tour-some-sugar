const database = {
    bands: [
        {
            id: 1,
            name: "AC/DC",
            members: 5,
            genre: "Rock and Roll",
            established: 1999
        },
        {
            id: 2,
            name: "Foo Fighters",
            members: 3,
            genre: "Rock and Roll",
            established: 1990

        },
        {
            id: 3,
            name: "Green Day",
            members: 4,
            genre: "Punk Rock",
            established: 1992
        },
        {
            id: 4,
            name: "Guns N' Roses",
            members: 4,
            genre: "Rock",
            established: 1995

        },
        {
            id: 5,
            name: "Radiohead",
            members: 5,
            genre: "Alternative",
            established: 1998
        }
    ],
    venues: [
        {
            id: 1,
            name: "Cannery Hall",
            squareFeet: 2000,
            maxOccupancy: 215,
            address: "1 Cannery Row, Nashville TN"
        },
        {
            id: 2,
            name: "The Basement",
            squareFeet: 2225,
            maxOccupancy: 200,
            address: "1604 8th Ave Suite 330, Nashville TN"
        },
        {
            id: 3,
            name: "Main Street Music",
            squareFeet: 1789,
            maxOccupancy: 285,
            address: "527 W Main Street, Murfeesboro TN"
        },
        {
            id: 4,
            name: "Musicians Corner",
            squareFeet: 207,
            maxOccupancy: 100,
            address: "2500 West End Ave, Nashville TN"
        },
        {
            id: 5,
            name: "The End",
            squareFeet: 1000,
            maxOccupancy: 56,
            address: "2219 Ellison Pike, Nashville TN"
        },
        {
            id: 6,
            name: "Marathon Music Works",
            squareFeet: 2456,
            maxOccupancy: 109,
            address: "1402 Clinton Street, Nashville TN"
        },
        {
            id: 7,
            name: "The East Room",
            squareFeet: 2222,
            maxOccupancy: 190,
            address: "2412 Gallatin Avenue, Nashville TN"
        }
    ],
        bookings: [
            {
                id: 1,
                bandId: 1,
                venueId: 1,
                date : "1/24/2024"
            },
            {
                id: 2,
                bandId: 2,
                venueId: 2,
                date : "3/10/2024"
            },
            {
                id: 3,
                bandId: 3,
                venueId: 3,
                date : "6/25/2024"
            },
            {
                id: 4,
                bandId: 4,
                venueId: 4,
                date : "7/4/2024"
            },
            {
                id: 5,
                bandId: 5,
                venueId: 5,
                date : "8/10/2024"
            },
            {
                id: 6,
                bandId: 6,
                venueId: 6,
                date : "5/28/2024"
            },
            {
                id: 7,
                bandId: 7,
                venueId: 7,
                date : "3/21/2024"
            },
            {
                id: 8,
                bandId: 8,
                venueId: 8,
                date : "1/1/2024"
            },
            {
                id: 9,
                bandId: 9,
                venueId: 9,
                date : "4/24/2024"
            },
            {
                id: 10,
                bandId: 10,
                venueId: 10,
                date : "4/10/2024"
            }
        ]

    }

    export const getBands = () => {
        return database.bands.map(band => ({...band}))
    }
    
    export const getVenues = () => {
        return database.venues.map(venue => ({...venue}))
    }
    
    export const getBookings = () => {
        return database.bookings.map(booking => ({...booking}))
    }
