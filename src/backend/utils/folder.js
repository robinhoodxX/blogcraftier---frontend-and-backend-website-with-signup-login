const path = require("path");
const fs = require("fs");


// Function to get next folder number
const getNextFolder = () => {
  const basePath = "uploads";
  if (!fs.existsSync(basePath)) fs.mkdirSync(basePath);

  const folders = fs.readdirSync(basePath).filter(f =>
    fs.statSync(path.join(basePath, f)).isDirectory()
  );
  const nextNum = folders.length + 1;
  const nextFolder = path.join(basePath, nextNum.toString());
  if (!fs.existsSync(nextFolder)) fs.mkdirSync(nextFolder);

  return nextFolder;
};

module.exports = getNextFolder;
