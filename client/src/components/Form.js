import React from 'react';
import Input from './Input';

const Form = (props) => {
    return (
        <form onSubmit={props.handler}>
            <h4>{props.isEditForm ? "Editing Event: " : "Add Event: "}</h4>
            <div className="form-group">
                <Input name="eventName"
                    placeholder="Enter event Name"
                    labelName="Event Name: "
                    handleChange={props.handleChange}
                    value={props.event.eventName} />
                <Input name="organizerID"
                    placeholder="Enter organizerID"
                    labelName="organizerID: "
                    handleChange={props.handleChange}
                    value={props.event.organizerID} />
                <Input name="contact"
                    placeholder="Enter contact"
                    labelName="contact: "
                    handleChange={props.handleChange}
                    value={props.event.contact} />
                <Input name="dateTime"
                    placeholder="Enter dateTime"
                    labelName="Date: "
                    handleChange={props.handleChange}
                    value={props.event.dateTime} />
                <Input name="venue"
                    placeholder="Enter venue"
                    labelName="venue: "
                    handleChange={props.handleChange}
                    value={props.event.venue} />
                <Input name="duration"
                    placeholder="Enter duration"
                    labelName="duration: "
                    handleChange={props.handleChange}
                    value={props.event.duration} />
                <Input name="description"
                    placeholder="Enter description"
                    labelName="description: "
                    handleChange={props.handleChange}
                    value={props.event.description} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Form;