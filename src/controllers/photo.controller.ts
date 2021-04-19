import { NextFunction, Request, Response } from 'express';
import PhotoService from '@services/photo.service';
import { Photo } from '@interfaces/photo.interface';
import path from 'path';
import { FileRequest } from '@interfaces/fileRequest.interface';

class PhotoController {
  public photoService = new PhotoService();

  public getPhotoById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const photoId = Number(req.query.person);
      const photo: Photo = await this.photoService.findPhotoById(photoId);
      const dirname = path.resolve();
      const pathToFile = path.join(dirname, photo.value.path);
      res.sendFile(pathToFile);
    } catch (error) {
      next(error);
    }
  };

  public createPhoto = async (req: FileRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const createPhotoData: Photo = await this.photoService.createPhoto(req.file);
      res.status(201).json({ id: createPhotoData.id, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}

export default PhotoController;
