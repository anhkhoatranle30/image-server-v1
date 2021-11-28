import Image from '../model';

const getOneById = async (req, res) => {
  const { id } = req.params;
  try {
    const image = await Image.findById(id);
    if (!image) {
      throw new Error('Not found');
    }
    res.set('Content-Type', 'image/png');
    res.write(image.buffer);
    res.end();
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
};

export default getOneById;
