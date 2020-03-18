import React from 'react';
import EventTableRow from './EventTableRow';

const EventTable = (props) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">eventName</th>
                    <th scope="col">organizerID</th>
                    <th scope="col">contact</th>
                    <th scope="col">dateTime</th>
                    <th scope="col">venue</th>
                    <th scope="col">duration</th>
                    <th scope="col">description</th>
                </tr>
            </thead>
            <tbody>
                {props.events.map(event => {
                    return <EventTableRow key={event._id}
                        event={event}
                        deleteHandler={props.deleteHandler}
                        showEditForm={props.showEditForm} />
                })}
            </tbody>
        </table>
    )
}

export default EventTable;