import { TagModel } from './tag.model';
import { Category, Pet } from 'app/shared/api';

export class PetModel implements Pet {
  id: number;
  name: string;
  category?: Category;
  photoUrls: Array<string>;
  status?: Pet.StatusEnum;
  tags: Array<TagModel>;

  constructor(name: string, photoUrls: Array<string>, tags: Array<TagModel>) {
    this.name = name;
    this.photoUrls = photoUrls;
    this.tags = tags;
  }
}
