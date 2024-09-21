const express = require("express");
const {
  GetNewsController,
  AddNewsController,
} = require("../Controllers/NewsController");
const {
  GetUpComingEventsController,
  AddEventsController,
} = require("../Controllers/EventsController");
const multer = require("multer");
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `./uploads/new`);
  },
  filename: function (req, file, cb) {
    const uniqueFileName = file.originalname; // Generate a unique filename using uuidv4
    cb(null, uniqueFileName);
  },
});

const filterFile = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "text/csv"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const uploadNews = multer({ storage: storage, fileFilter: filterFile });

router.get("/news", GetNewsController);
router.post("/news", uploadNews.single("NewsImage"), AddNewsController);

router.get("/events", GetUpComingEventsController);
router.post("/events", AddEventsController);

module.exports = router;
