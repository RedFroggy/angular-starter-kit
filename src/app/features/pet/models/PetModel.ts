import { Pet } from '../../../api/models';
import { TagModel } from './TagModel';
import { Type } from 'class-transformer';

export class PetModel extends Pet {
  @Type(() => TagModel)
  tags: Array<TagModel>;
}
