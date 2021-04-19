import { Router } from 'express';
import Route from '@interfaces/routes.interface';
import PhotoController from '@controllers/photo.controller';
import upload from '@middlewares/upload.middleware';

class PhotoRoute implements Route {
  public path = '/photo';
  public router = Router();
  public photoController = new PhotoController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.photoController.getPhotoById);
    this.router.post(`${this.path}`, upload.single('photo[0]'), this.photoController.createPhoto);
  }
}

export default PhotoRoute;
