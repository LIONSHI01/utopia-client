import { v4 as uuidv4 } from 'uuid';
import User from '../models/userModel';
const { hashPassword, verifyPassword } = require('../utils/hashPassword');

const { S3Client } = require('@aws-sdk/client-s3');
const multer = require('multer');
const multerS3 = require('multer-s3');

const awsS3 = new S3Client({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESSS_KEY,
  },
  region: process.env.AWS_BUCKET_REGION,
  sslEnabled: false,
  s3ForcePathStyle: true,
  signatureVersion: 'v4',
});

exports.signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(401).json({
      status: 'failed',
      message: 'This email is already registered, please try another one.',
    });
    return;
  }

  if (email.length === 0 || password.length === 0) {
    res.status(401).json({
      status: 'failed',
      message: 'Email and password are required, please try again.',
    });
  }

  const hashedPassword = await hashPassword(password);

  const newUser = await User.create({
    name: username,
    email,
    password: hashedPassword,
  });

  res.status(200).json({
    status: 'success',
    newUser,
  });
};

const upload = multer({
  storage: multerS3({
    s3: awsS3,
    bucket: 'utopia-image-storage',
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      req.fileExtenstion = file.mimetype.split('/')[1];
      cb(null, req.s3Key + '.' + file.mimetype.split('/')[1]);
    },
  }),
});

const singleFileUpload = upload.array('image', 10);

const uploadToS3 = (req, res) => {
  req.s3Key = uuidv4();
  let downloadUrl = `https://utopia-image-storage.s3.ap-southeast-1.amazonaws.com/${req.s3Key}`;

  return new Promise((resolve, reject) => {
    return singleFileUpload(req, res, (err) => {
      if (err) return reject(err);
      return resolve(downloadUrl);
    });
  });
};

exports.updateProfileImage = (req, res, next) => {
  uploadToS3(req, res)
    .then((downloadUrl) => {
      return res.status(200).json({
        status: 'success',
        data: {
          imageURL: downloadUrl,
          imageFormat: req.fileExtenstion,
        },
      });
    })
    .catch((err) => console.log(err));
};
