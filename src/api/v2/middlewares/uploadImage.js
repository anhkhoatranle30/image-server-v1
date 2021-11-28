import multer from 'multer';

const uploadImage = multer({
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)/)) {
      return cb(new Error('Only accept pictures'));
    }
    cb(undefined, true);
  },
});

export default uploadImage;
