
const getAllEvents = async () => {
    try {
        const response = await fetch('http://localhost:3000/events')
        const result = await response.json()
        return result
    } catch (err) {
        console.error('Error fetching events:', err);
    }
}

const getEventById =  async (eventId : any) => {
    try {
        const response = await fetch(`http://localhost:3000/events/${eventId}`)
        const result = await response.json()
        return result
    } catch (err) {
        console.error('Error fetching events:', err);
    }
}

export default { getAllEvents, getEventById };