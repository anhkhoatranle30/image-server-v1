import express from 'express';
import imageControllers from './controllers';
import uploadImageMiddleware from '../../middlewares/uploadImage';

const imageRoutes = express.Router();

//======================== GET ========================
imageRoutes.get('/:id', imageControllers.getOneById);
//======================== POST ========================
imageRoutes.post(
  '/',
  uploadImageMiddleware.single('image'),
  imageControllers.postOne
);
//======================== PUT ========================
//======================== DELETE ========================

export default imageRoutes;
