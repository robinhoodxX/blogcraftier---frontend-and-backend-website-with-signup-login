const multer = require("multer");
const path = require("path");
const getNextFolder = require("../utils/folder");

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder = getNextFolder();
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // e.g. 1696589293.jpg
  },
});

const upload = multer({ storage });

module.exports = upload;
