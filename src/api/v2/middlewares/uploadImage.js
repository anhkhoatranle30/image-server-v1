import multer from 'multer';

const uploadImage = multer({
  limits: {
    fileSize: 4 * 1024 * 1024,
  },
  fileFilter(req, file, cb) {
    console.log('🚀 ~ file: uploadImage.js ~ line 8 ~ fileFilter ~ file', file);

    if (!file.originalname.match(/\.(jpg|jpeg|png)/)) {
      return cb(new Error('Only accept pictures'));
    }
    cb(undefined, true);
  },
});

export default uploadImage;
