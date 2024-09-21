

const fs = require('fs');
const path = require('path');
const deleteFile = (oldImage) => {
    const imagePath = path.join(__dirname, '../uploads', oldImage);
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.error("Failed to delete old image:", err);
        } else {
          console.log("Old image deleted successfully.");
        }
      });
};

module.exports = { deleteFile };
