const Profile = require("../models/profileModel");
const jwt = require("jsonwebtoken");
const multer = require('multer');



const FILE_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpeg',
  'image/jpg': 'jpg'
}


const storage = multer.diskStorage({
  destination: function( req,  file, cb){
      const isValid = FILE_TYPE_MAP[file.mimetype];
      let uploadError = new Error('invalid image type');
      if(isValid) {
          uploadError = null
      }
      cb(uploadError, 'public/uploads')
  },
  filename: function (req, file, cb){
      const fileName = file.originalname.split(' ').join('-')
      const extension = FILE_TYPE_MAP[file.mimetype];
      cb(null, `${fileName}-${Date.now()}.${extension}`)
  }
})
const uploadOptions = multer({ storage: storage})





const addUserProfile =   async (req, res, next) => {
  const auth = req.headers.authorization;
  const payload = req.body;
  if (!payload) return res.status(400).json({ error: "Bad request" });
  if (!auth) {
    return res.status(403).json({ error: "No credentials sent!" });
  }
const filename = req.body.filename
const basepath = `${req.protocol}://${req.get('host')}/public/upload/`;
  const token = auth.split(" ")[1];
  const { userId } = jwt.decode(token);

  const user = await Profile.findOne({ user: userId }).exec();

  let userProfile;
  if (!user) {
    userProfile = await Profile.create({
      user: userId,
      name: payload.name,
      brandKit: `payload.${basepath}${filename}`,
      job: payload.job,
      location: payload.location,
      email: payload.email,
      phoneNumber: payload.phoneNumber,
    });
  } else return res.status(400).json({ error: "profile already exist" });

  await userProfile.save();
  res.status(201).json({ result: userProfile });
};

const getUserProfile = async (req, res) => {
  const auth = req.headers.authorization;
  if (!auth) {
    return res.status(403).json({ error: "No credentials sent!" });
  }

  const token = auth.split(" ")[1];
  const { userId } = jwt.decode(token);

  const profile = await Profile.findOne({ user: userId }).exec();

  if (!profile) {
    return next(res.status(404).send("no profile with id")).end();
  }

  res.status(200).json({ profile });
};

const updateUserProfile = async (req, res) => {
  const payload = req.body;
  const auth = req.headers.authorization;
  if (!auth) {
    return res.status(403).json({ error: "No credentials sent!" }).end();
  }

  const token = auth.split(" ")[1];
  const { userId } = jwt.decode(token);

  const profile = await Profile.findOne({ user: userId }).exec();

  if (!profile) {
    return next(res.status(404).send("no profile with id")).end();
  }

  profile.name = payload.name;
  profile.job = payload.job;
  profile.location = payload.location;
  profile.email = payload.email;
  profile.phoneNumber = payload.phoneNumber;

  await profile.save();
  res.status(201).json({ result: profile });
};

module.exports = {
  addUserProfile,
  getUserProfile,
  updateUserProfile,
  uploadOptions,
};
