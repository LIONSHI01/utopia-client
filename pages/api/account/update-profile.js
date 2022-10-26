import { v4 as uuidv4 } from 'uuid';
// import { S3Client } from '@aws-sdk/client-s3';

import S3 from 'aws-sdk/clients/s3';
import multer from 'multer';
import multerS3 from 'multer-s3';

export const config = {
  api: {
    bodyParser: { sizeLimit: '10mb' },
  },
};

const s3 = new S3({
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESSS_KEY,
  region: process.env.NEXT_PUBLIC_AWS_BUCKET_REGION,
  signatureVersion: 'v4',
});

const upload = multer({
  storage: multerS3({
    s3,
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

// Fn for uploading image to S3
const uploadToS3 = (req, res) => {
  req.s3Key = uuidv4();
  const downloadUrl = `https://utopia-image-storage.s3.ap-southeast-1.amazonaws.com/${req.s3Key}`;

  return new Promise((resolve, reject) => {
    return singleFileUpload(req, res, (err) => {
      if (err) return reject(err);
      return resolve(downloadUrl);
    });
  });
};

const handler = async (req, res) => {
  if (req.method !== 'POST')
    return res.status(405).json({ message: 'Method not allowed' });

  // console.log(req.body);

  uploadToS3(req, res)
    .then((downloadUrl) => {
      // Update UserProfile in DB
      // await connectMongoose();
      // const updatedUser = await User.findOneAndUpdate(
      //   { email: req.email },
      //   { photo: downloadUrl + '.' + req.fileExtenstion }
      // );

      return res.status(200).json({
        status: 'success',
        data: {
          imageURL: downloadUrl,
        },
      });
    })
    .catch((err) => console.log(err));
};

export default handler;
