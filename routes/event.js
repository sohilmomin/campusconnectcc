const express = require('express');
const eventRouter = express.Router();
const Event = require('../model/Event');

//CRUD

//read
eventRouter.get('/', (req, res) => {
    Event.find({}, (err, response) => {
        if (err)
            res.status(500).json({
                message: {
                    msgBody: "Unable to get events",
                    msgError: true
                }
            });
        else {
            res.status(200).json({ response });
        }

    });
});

//create
eventRouter.post('/', (req, res) => {
    const event = new Event(req.body);
    event.save((err, document) => {
        if (err)
            res.status(500).json({
                message: {
                    msgBody: "Unable to add Event",
                    msgError: true
                }
            });
        else
            res.status(200).json({
                message: {
                    msgBody: "Successfully Added Event",
                    msgError: false
                }
            });
    });
});

// delete
eventRouter.delete('/:id', (req, res) => {
    Event.findByIdAndDelete(req.params.id, err => {
        if (err)
            res.status(500).json({
                message: {
                    msgBody: "Unable to Delete Event",
                    msgError: true
                }
            });
        else
            res.status(200).json({
                message: {
                    msgBody: "Successfully Deleted Events",
                    msgError: false
                }
            });
    });
});

//update 
eventRouter.put('/:id', (req, res) => {
    Event.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true }, (err, response) => {
        if (err)
            res.status(500).json({
                message: {
                    msgBody: "Unable to Update Event",
                    msgError: true
                }
            });
        else
            res.status(200).json({
                message: {
                    msgBody: "Successfully Updated Event",
                    msgError: false
                }
            });
    });
});

module.exports = eventRouter;