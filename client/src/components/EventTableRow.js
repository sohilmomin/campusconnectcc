import React from 'react';

const EventTableRow = (props) => {
    const { eventName, organizerID, contact, dateTime, venue, duration, description, _id } = props.event;

    return (
        <tr>
            <th scope="row">{_id}</th>
            <td>{eventName}</td>
            <td>{organizerID}</td>
            <td>{contact}</td>
            <td>{dateTime}</td>
            <td>{venue}</td>
            <td>{duration}</td>
            <td>{description}</td>
            <td>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" onClick={props.showEditForm.bind(this, props.event)} className="btn btn-secondary">Edit</button>
                    <button type="button" onClick={props.deleteHandler.bind(this, _id)} className="btn btn-danger">Delete</button>
                </div>
            </td>

        </tr>
    )
}

export default EventTableRow;