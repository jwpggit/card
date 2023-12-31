const AWS = require('aws-sdk');

// s3 config
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID, // your AWS access id
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, // your AWS access key
});

// actual function for uploading file
async function uploadImage(file) {
  const params = {
    Bucket: process.env.AWS_BUCKET, // bucket you want to upload to
    Key: `fileupload/scanskill-${Date.now()}-${file.name}`, // put all image to fileupload folder with name scanskill-${Date.now()}${file.name}`
    Body: file.data,
    ACL: "public-read-write",
  };
  const data = await s3.upload(params).promise();
  return data.Location; // returns the url location
}




module.exports = uploadImage