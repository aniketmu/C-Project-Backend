// import multer from 'multer';
// import multerS3 from 'multer-s3';
// import dotenv from 'dotenv';
// import AWS from 'aws-sdk';

// dotenv.config();

// AWS.config.update({
//   accessKeyId: process.env.ACESS_KEY,
//   secretAccessKey: process.env.ACESS_SECRET,
//   region: process.env.REGION,
// });

// const BUCKET = process.env.BUCKET;
// const s3 = new AWS.S3();

// const upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: BUCKET,
//     acl: 'public-read',
//     key: (req, file, cb) => {
//       cb(null, file.originalname);
//     },
//   }),
// });

// export default upload;