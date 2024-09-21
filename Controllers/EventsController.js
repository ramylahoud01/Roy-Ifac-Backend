const EventsModel = require("../models/EventsModel");
const NewsModel = require("../models/EventsModel");

const GetUpComingEventsController = async (req, res) => {
  try {
    
    const Events = await EventsModel
    .find();
    return res.status(200).json({ Events: Events });

  } catch (error) {
    res.status(400).json({ msg: "Error" });
  }
};

const AddEventsController = async (req, res) => {
  try {
    const Events = new EventsModel({
      title: req.body.title,
        Duration: req.body.Duration,
        Date: req.body.Date
    });

    await Events.save();

    return res.status(200).json(Events);
  } catch (error) {
    res.status(400).json({ msg: "Error" });
  }
};

module.exports = { GetUpComingEventsController ,AddEventsController };
