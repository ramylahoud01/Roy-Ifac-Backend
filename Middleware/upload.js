const multer = require("multer");
const path = require("path");

const getStorage = () => {
  return multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
      
      const fileExtension = path.extname(file.originalname);
      const random_num = Math.floor(Math.random() * 1000); 

      const uniqueFilename = `${random_num}-${Date.now()}${fileExtension}`;
      
      cb(null, uniqueFilename);
      
      
      req.file_name = uniqueFilename;
    },
  });
};

const storage = getStorage();
const upload = multer({ storage });

module.exports = { storage, upload };
