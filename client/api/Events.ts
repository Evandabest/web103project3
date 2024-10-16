
const getAllEvents = async () => {
    try {
        const response = await fetch('http://localhost:3000/events')
        const result = await response.json()
        console.log(response)
        return result
    } catch (err) {
        console.error('Error fetching events:', err);
    }
}

const getEventById =  async (eventId : any) => {
    const response = await fetch(`http://localhost:3000/events/${eventId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json(); // Read the response body as JSON
        return data;
}

export default { getAllEvents, getEventById };