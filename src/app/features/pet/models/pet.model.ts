import { TagModel } from './tag.model';
import { Type } from 'class-transformer';
import { Category, Pet } from '../../../api';

export class PetModel implements Pet {
  id?: number;
  name: string;
  category?: Category;
  photoUrls: Array<string>;
  status?: Pet.StatusEnum;
  @Type(() => TagModel)
  tags: Array<TagModel>;
}
