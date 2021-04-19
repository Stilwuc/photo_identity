import { getRepository } from 'typeorm';
import { PhotoEntity } from '@entity/photo.entity';
import HttpException from '@exceptions/HttpException';
import { Photo } from '@interfaces/photo.interface';
import { isEmpty } from '@utils/util';

class PhotoService {
  public photos = PhotoEntity;

  public async findPhotoById(photoId: number): Promise<Photo> {
    if (isEmpty(photoId)) throw new HttpException(400, "You're not photoId");

    const photoRepository = getRepository(this.photos);
    const findPhoto: Photo = await photoRepository.findOne({ where: { id: photoId } });
    if (!findPhoto) throw new HttpException(404, "You're not photo");

    return findPhoto;
  }

  public async createPhoto(photoData): Promise<Photo> {
    if (isEmpty(photoData)) throw new HttpException(400, "You're not photoData");
    const photoRepository = getRepository(this.photos);
    return await photoRepository.save({ value: photoData });
  }
}

export default PhotoService;
