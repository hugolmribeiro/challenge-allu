import { instanceToPlain } from 'class-transformer';
import { SerializableEntity } from '../contracts/serializable-entity.interface';

export class BaseEntity implements SerializableEntity {
  public serialize(): Record<string, any> {
    return instanceToPlain(this);
  }
}
