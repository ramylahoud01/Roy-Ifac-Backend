const News = require("../models/NewsModel");

const GetNewsController = async (req, res) => {
  try {
    const news = await News.find();
    res.status(200).json(news);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

const AddNewsController = async (req, res) => {
  try {
    const imageUrl = req.file ? `/${req.file.path}` : "";
    const { title, content } = req.body;

    const news = new News({
      title: title,
      content: content,
      image: imageUrl,
    });
    const savedNews = await news.save();
    res.status(200).json(savedNews);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

module.exports = { GetNewsController, AddNewsController };
