import React from 'react';
import EventTable from './components/EventTable';
import Form from './components/Form';
import Message from './components/Message';
import EventAPI from './EventAPI';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            isEditForm: false,
            event: {
                eventName: "",
                organizerID: "",
                contact: "",
                dateTime: "",
                venue: "",
                duration: "",
                description: ""
            },
            message: ""
        };

        this.deleteHandler = this.deleteHandler.bind(this);
        this.addHandler = this.addHandler.bind(this);
        this.updateHandler = this.updateHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.showEditForm = this.showEditForm.bind(this);
    }

    componentDidMount() {
        EventAPI.getEvents().then(data => {
            console.log(data);
            this.setState({ events: data.response })
        });
    }

    resetForm() {
        this.setState({
            event: {
                eventName: "",
                organizerID: "",
                contact: "",
                dateTime: "",
                venue: "",
                duration: "",
                description: ""
            }
        });
    }

    handleChange(e) {
        this.setState({
            event: {
                ...this.state.event,
                [e.target.name]: e.target.value
            }
        });
    }

    showEditForm(event) {
        this.setState({ isEditForm: true, event: event });
    }

    async deleteHandler(id) {
        const deleteData = await EventAPI.deleteEvent(id);
        const message = deleteData.message;
        if (message.msgError) {
            this.setState({ message });
        }
        else {
            const data = await EventAPI.getEvents();
            this.setState({ message, events: data.response })
        }
    }

    async updateHandler(e) {
        e.preventDefault();
        const updateData = await EventAPI.updateEvent(this.state.event);
        const message = updateData.message;
        if (message.msgError) {
            this.setState({ message });
        }
        else {
            const data = await EventAPI.getEvents();
            this.setState({ message, events: data.response })
        }
        this.setState({ isEditForm: false });
        this.resetForm();
    }

    async addHandler(e) {
        e.preventDefault();
        const postData = await EventAPI.createEvent(this.state.event);
        const message = postData.message;
        if (message.msgError) {
            this.setState({ message });
        }
        else {
            const data = await EventAPI.getEvents();
            this.setState({ message, events: data.response });
        }
        this.resetForm();
    }

    renderEventTable() {
        if (this.state.events.length > 0) {
            return (
                <EventTable events={this.state.events}
                    deleteHandler={this.deleteHandler}
                    showEditForm={this.showEditForm} />
            );
        }
        return null;
    }

    renderForm() {
        return (
            <Form isEditForm={this.state.isEditForm}
                event={this.state.event}
                handleChange={this.handleChange}
                handler={!this.state.isEditForm ? this.addHandler : this.updateHandler} />
        );
    }

    renderMessage() {
        if (this.state.message === "")
            return null;
        return (
            <Message message={this.state.message} />
        );
    }

    render() {
        return (
            <div className="row">
                <div className="col"></div>
                <div className="col-10">
                    {this.renderEventTable()}
                    {this.renderForm()}
                    {this.renderMessage()}
                </div>
                <div className="col"></div>
            </div>
        )
    }
}

export default App;