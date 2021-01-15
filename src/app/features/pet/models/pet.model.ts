import { Pet } from '../../../api/models';
import { TagModel } from './tag.model';
import { Type } from 'class-transformer';

export class PetModel extends Pet {
  @Type(() => TagModel)
  tags: Array<TagModel>;
}
