const appRoot = require("app-root-path");
const post = require("../model/posts");
exports.upload = (req, res) => {
  const foodimg = req.files.img;
  const filename = `${foodimg.name}`;
  const filepath = `${appRoot}/uploads/${filename}`;
  foodimg.mv(filepath, function (err) {
    if (err) return res.status(500).send(err);
    res.send("File uploaded!");
  });
  post.create({
    ...req.body,
    img: filename,
  });
};
