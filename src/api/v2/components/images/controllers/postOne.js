import sharp from 'sharp';
import Image from '../model';

const postOne = async (req, res) => {
  try {
    const resizedBuffer = await sharp(req.file.buffer).png().toBuffer();

    const image = new Image({
      buffer: resizedBuffer,
    });
    await image.save();

    res.status(200).send({
      url:
        req.protocol + '://' + req.headers.host + req.baseUrl + '/' + image._id,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
};

export default postOne;
