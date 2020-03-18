export default {
    getEvents: () => {
        return fetch('/event')
            .then(res => res.json())
            .then(data => data);
    },
    deleteEvent: (_id) => {
        return fetch(`/event/${_id}`,
            { method: 'delete' })
            .then(res => res.json())
            .then(data => data);
    },
    updateEvent: (event) => {
        return fetch(`/event/${event._id}`,
            {
                method: "put",
                body: JSON.stringify(event),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => res.json())
            .then(data => data);
    },
    createEvent: (event) => {
        return fetch(`/event`,
            {
                method: 'post',
                body: JSON.stringify(event),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => res.json())
            .then(data => data);
    }
}